(function () {
	'use strict';

	const editor = window.elementorV2.editorElements;
	const config = window.linglingqiLocalBlocks;
	const appBar = window.elementorV2.editorAppBar;
	const { __, sprintf } = wp.i18n;
	const rootTypes = [ 'e-flexbox', 'e-div-block', 'e-grid', 'e-accordion', 'e-tabs' ];

	async function request(documentId, path = '', method = 'GET', data, query = {}) {
		const url = new URL(config.url, window.location.href);

		if (url.origin !== window.location.origin) {
			throw new Error(__('区块库必须和编辑器使用同一个站点地址。', 'elementor'));
		}

		if (url.searchParams.has('rest_route')) {
			url.searchParams.set('rest_route', url.searchParams.get('rest_route').replace(/\/$/, '') + path);
		} else {
			url.pathname = url.pathname.replace(/\/$/, '') + path;
		}

		url.searchParams.set('document', documentId);
		Object.entries(query).forEach(([key, value]) => url.searchParams.set(key, value));

		const headers = { 'X-WP-Nonce': config.nonce };

		if (data) {
			headers['Content-Type'] = 'application/json';
		}

		const response = await fetch(url, {
			method,
			headers,
			credentials: 'same-origin',
			body: data ? JSON.stringify(data) : undefined,
		});
		const payload = await response.json().catch(() => null);

		if (!response.ok || !payload) {
			throw new Error(payload?.message || __('无法读取区块。', 'elementor'));
		}

		return payload;
	}

	function element(tag, text, className) {
		const node = document.createElement(tag);

		if (text) {
			node.textContent = text;
		}

		if (className) {
			node.className = className;
		}

		return node;
	}

	function button(label, onClick, className) {
		const node = element('button', label, className);
		node.type = 'button';
		node.addEventListener('click', onClick);
		return node;
	}

	function section(title) {
		const region = element('section', '', 'llq-blocks-section');
		const list = element('div', '', 'llq-blocks-list');
		region.append(element('h3', title), list);
		return { region, list };
	}

	function row(title, ...actions) {
		const item = element('div', '', 'llq-blocks-row');
		item.append(element('span', title, 'llq-blocks-name'), ...actions);
		return item;
	}

	function textField(label, initial = '') {
		const wrapper = element('label', label);
		const input = element('input');
		input.type = 'text';
		input.value = initial;
		input.maxLength = 120;
		input.required = true;
		wrapper.append(input);
		return { wrapper, input };
	}

	function getSelectedContainer() {
		const selected = editor.getSelectedElements();

		if (selected.length !== 1 || !rootTypes.includes(selected[0].type)) {
			return null;
		}

		return editor.getContainer(selected[0].id);
	}

	function openLibrary(event) {
		if (document.querySelector('.llq-blocks-dialog[open]')) {
			return;
		}

		const opener = event.currentTarget;
		const documentId = editor.getCurrentDocumentId();
		const selectedContainer = getSelectedContainer();
		const dialog = element('dialog', '', 'llq-blocks-dialog');
		const heading = element('h2', __('我的区块', 'elementor'));
		const close = button(__('关闭', 'elementor'), () => dialog.close());
		const header = element('header', '', 'llq-blocks-header');
		const fields = element('fieldset', '', 'llq-blocks-fields');
		const content = element('div', '', 'llq-blocks-content');
		const status = element('p', '', 'llq-blocks-status');
		const presets = section(__('预设组合', 'elementor'));
		const library = section(__('本站区块', 'elementor'));
		const pagination = element('nav', '', 'llq-blocks-pagination');
		let page = 1;
		let busy = false;

		heading.id = 'llq-blocks-title';
		dialog.setAttribute('aria-labelledby', heading.id);
		status.setAttribute('role', 'status');
		pagination.setAttribute('aria-label', __('区块分页', 'elementor'));
		library.region.append(pagination);
		header.append(heading, close);
		content.append(makeSaveForm(selectedContainer), presets.region, library.region);
		fields.append(content);
		dialog.append(header, status, fields);
		dialog.addEventListener('cancel', event => {
			if (busy) {
				event.preventDefault();
			}
		});
		dialog.addEventListener('close', () => {
			dialog.remove();
			opener?.focus();
		});

		document.body.append(dialog);
		dialog.showModal();
		void run(loadLibrary);

		async function run(action) {
			if (busy) {
				return;
			}

			busy = true;
			close.disabled = true;
			fields.disabled = true;
			content.setAttribute('aria-busy', 'true');
			status.textContent = __('处理中…', 'elementor');

			try {
				await action();
				status.textContent = '';
			} catch (error) {
				status.textContent = error instanceof Error ? error.message : __('操作失败。', 'elementor');
			} finally {
				busy = false;
				close.disabled = false;
				fields.disabled = false;
				content.removeAttribute('aria-busy');
			}
		}

		function makeSaveForm(container) {
			const form = element('form', '', 'llq-blocks-form');

			if (!container) {
				form.append(element('p', __('在画布中选中一个 V4 容器、折叠区块或选项卡，即可保存到本站区块。', 'elementor')));
				return form;
			}

			const name = textField(__('区块名称', 'elementor'));
			const saveLabels = {
				'e-accordion': __('保存所选折叠区块', 'elementor'),
				'e-tabs': __('保存所选选项卡', 'elementor')
			};
			const saveLabel = saveLabels[container.type] ?? __('保存所选容器', 'elementor');
			const save = element('button', saveLabel, 'llq-blocks-primary');
			save.type = 'submit';
			form.append(name.wrapper, save);
			form.addEventListener('submit', event => {
				event.preventDefault();
				void run(async () => {
					const current = container.lookup?.() ?? container;
					const model = current.model.toJSON();
					await request(documentId, '', 'POST', { title: name.input.value, model });
					form.reset();
					page = 1;
					await loadLibrary();
				});
			});

			return form;
		}

		function insert(path) {
			return run(async () => {
				const { model } = await request(documentId, path, 'POST');
				const parent = editor.getCurrentDocumentContainer();

				if (!parent || editor.getCurrentDocumentId() !== documentId) {
					throw new Error(__('当前页面已切换，请重新打开区块库。', 'elementor'));
				}

				const created = await window.$e.run('document/elements/create', {
					container: parent,
					model,
					options: { edit: false },
				});

				if (!created || !created.id) {
					throw new Error(__('无法插入区块。', 'elementor'));
				}

				dialog.close();
			});
		}

		function editBlock(item, action, block, trigger) {
			const previous = [...item.childNodes];
			const form = element('form', '', 'llq-blocks-form llq-blocks-row-form');
			const rename = action === 'PATCH';
			const submit = element('button', rename ? __('保存名称', 'elementor') : __('确认删除原稿', 'elementor'), 'llq-blocks-primary');
			const cancel = button(__('取消', 'elementor'), () => {
				item.replaceChildren(...previous);
				trigger.focus();
			});
			const name = rename ? textField(__('区块名称', 'elementor'), block.title) : null;

			submit.type = 'submit';
			if (name) {
				form.append(name.wrapper);
			} else {
				form.append(element('p', sprintf(__('删除「%s」的区块原稿？已插入的页面和媒体会保留。', 'elementor'), block.title)));
			}
			form.append(submit, cancel);
			item.replaceChildren(form);

			(name ? name.input : cancel).focus();
			form.addEventListener('submit', event => {
				event.preventDefault();
				void run(async () => {
					await request(documentId, `/${block.id}`, action, name ? { title: name.input.value } : undefined);
					await loadLibrary();
				});
			});
		}

		function renderBlock(block) {
			const action = button(__('插入', 'elementor'), () => insert(`/${block.id}/copy`), 'llq-blocks-primary');
			const item = row(block.title, action);

			if (block.canRename) {
				item.append(button(__('重命名', 'elementor'), event => editBlock(item, 'PATCH', block, event.currentTarget)));
			}

			if (block.canDelete) {
				item.append(button(__('删除原稿', 'elementor'), event => editBlock(item, 'DELETE', block, event.currentTarget)));
			}

			return item;
		}

		function renderPagination(pages) {
			pagination.replaceChildren();

			if (pages < 2) {
				return;
			}

			const step = (label, offset) => button(label, () => run(async () => {
				page += offset;
				await loadLibrary();
			}));
			const previous = step(__('上一页', 'elementor'), -1);
			const next = step(__('下一页', 'elementor'), 1);
			previous.disabled = page <= 1;
			next.disabled = page >= pages;
			pagination.append(previous, element('span', `${page} / ${pages}`), next);
		}

		async function loadLibrary() {
			const result = await request(documentId, '', 'GET', undefined, { page });

			if (page > 1 && page > result.pages) {
				page = Math.max(result.pages, 1);
				return loadLibrary();
			}

			presets.list.replaceChildren(...result.presets.map(preset => row(
				preset.title,
				button(__('插入', 'elementor'), () => insert(`/presets/${preset.slug}/copy`), 'llq-blocks-primary')
			)));
			library.list.replaceChildren(...result.blocks.map(renderBlock));

			if (result.blocks.length === 0) {
				library.list.append(element('p', __('还没有保存的区块。', 'elementor')));
			}

			renderPagination(result.pages);
		}
	}

	appBar.toolsMenu.registerAction({
		id: 'linglingqi-local-blocks',
		priority: 60,
		useProps: () => ({
			title: __('我的区块', 'elementor'),
			icon: window.elementorV2.icons.FolderIcon,
			onClick: openLibrary,
		}),
	});
})();
