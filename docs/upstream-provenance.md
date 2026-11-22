# Elementor 上游来源核对

本次候选版沿用 Elementor 4.3.6 兼容基线，使用凌凌漆自己的包名、版本与标志。上游核对以 2026 年 11 月 21 日的官方 Git 标签和 WordPress.org 插件安装包为准。

| 版本 | 官方标签对象 → 对应提交 | 官方安装包 SHA-256 |
| --- | --- | --- |
| 4.3.6，本仓库兼容基线 | `135104589e9184f31727d5942148bea3d7369642` → `561b44289f6d953c6ce950c851579dc085e93a4f` | F9F04C40E559ECC1C737EEC6519E7223FF9A1AB04ABCC2E004B44C9F6D1247A3 |
| 4.4.0 | `00860054ecdb0b7e4c210c18135fcd8c5e5318f3` → `89723fc6c0505d38df07211f5a03b5ab99aa8029` | — |
| 4.4.1，核对时的官方稳定版 | `8b08c65bb20abc4a7fdfc8d0d666a9778c6f322c` → `f1bfaf709b520f8306393b49e38c262843012e81` | DBC14B8D91B8AB5636D35421034E5A78698849C05B0489731611BD0033F13E5B |

[官方发布记录](https://wordpress.org/plugins/elementor/#developers) · [官方标签差异](https://github.com/elementor/elementor/compare/4.3.6...4.4.1) · [4.3.6 安装包](https://downloads.wordpress.org/plugin/elementor.4.3.6.zip) · [4.4.1 安装包](https://downloads.wordpress.org/plugin/elementor.4.4.1.zip)

- **4.3.6** 修正了导航、图标、原子与模板相关的数据处理，修正原子样式的冗余后台操作和部分内嵌 CSS 的前台生成。 [4.3.6 发布记录](https://plugins.svn.wordpress.org/elementor/tags/4.3.6/changelog.txt)
- **4.4.0** 加入 SVG 图标库和新的原子列表、地图元素，并修正根层粘贴的原子元素 ID 重复、响应式控件和设计系统样式等问题。此版本还扩展了 Agent Ready 与 MCP。
- **4.4.1** 增加了 WordPress 7.2 兼容声明，同时加强权限、属性和数据处理，修正移动端锚点和 Agent Ready 的若干问题。 [官方发布记录](https://wordpress.org/plugins/elementor/#developers)

## 1.1.0 与官方安装包的差异

对照凌凌漆 v1.1.0 标签和官方 4.3.6 安装包时，比较了 553 个原子元素、变量、全局类、默认样式、设计系统和关联资源路径。两边共存 529 项。比较内容时使用官方 ZIP 文件长度与 CRC-32，并允许检出时的 LF/CRLF 转换。

- 两边保留相同的 V4 占位图、样式核心压缩脚本、Tab 和折叠的预览脚本、背景视频处理脚本，以及 V4 opt-in PHP 实现。原子编辑器、变量和全局类的压缩包存在本仓库差异。
- 官方包中有 24 个检查路径在 1.1.0 中缺失，主要是原子表单与 WebMCP、样式类和变量等整站导入导出，以及样式类用量管理方面的文件。第一批 Flex、文本、图像、按钮和分隔所需资源已随本仓库提供。
- 本候选版继续复用 4.3.6 已有的元素、控件和样式解析。新版的 SVG 图标库、原子地图、Agent Ready、MCP 等资源未被引入。预设从本站插入时由插件单独生成元素和本地样式标识，避免依赖上游旧版的根层粘贴流程。

## 1.2.0-rc.2 定向修复

以 4.3.6 和 4.4.1 官方安装包对照了编辑器编译代码，并沿 4.4.0 和 4.4.1 标签提交追踪相关改动。凌凌漆继续使用自己的版本号和 4.3.6 兼容基线。

| 项目 | 上游变化 | 凌凌漆处理与证据 |
| --- | --- | --- |
| 根层粘贴原子元素 | 待渲染的子元素在注册前递归重建 ID，后续通过新 ID 取得插入的元素。[99bb7355，#37429](https://github.com/elementor/elementor/commit/99bb7355fcf1343edc970e619e10a019746f8286) | 已复现 rc.1 同页根层粘贴复用原 ID、局部样式重映射误更新源元素，跨页首次粘贴也沿用源 ID。取其待渲染子元素的修复逻辑适配 `editor-canvas`，保留仓库已有的局部样式重映射。保留源元素，粘贴副本有独立元素和局部样式 ID，继续使用站点共享类。 |
| 响应式样式控件 | 经典尺寸控件继承父断点数值和联动状态。V4 清空尺寸会保留选定单位，数值字段支持清空和多位数编辑。[2d5bbf7f，#37646](https://github.com/elementor/elementor/commit/2d5bbf7fa0435d066fbc2fe52d839f4c13bf9cf8) · [942cc33f，#37871](https://github.com/elementor/elementor/commit/942cc33f8056d2d0181ecdefda5b5830e4521a20) · [dcf980de，#37348](https://github.com/elementor/elementor/commit/dcf980dec5199cd1bcd9be6ea15b11d3151981c4) | 源码对照已完成。这三项控件改动未并入，未执行针对其边界场景的专项复验。本候选版的响应式编辑验收另见验收记录。 |
| 样式缓存与数据处理 | 在站点套件切换、创建和缓存清理时使设计系统同步 CSS 失效。4.4.1 集中调整权限、模板、属性和数据处理。[4a113bac，#37886](https://github.com/elementor/elementor/commit/4a113bacf525d3e653f84311effb7b17b021d6a6) · [b64914a8，#38221](https://github.com/elementor/elementor/commit/b64914a8481549400a7dd5c0bac568bd7a4d297f) | 源码对照显示同步样式模块少了对应失效钩子，站点套件切换专项未复现。两个提交均未整体并入，4.4.1 涵盖的其他数据处理与权限路径未随本次验收逐项验证。 |

用 WordPress 7.1.5 和 Edge/Chromium 分别加载 `editor-canvas.js` 与 `editor-canvas.min.js`。两次均通过编辑器的原生复制和粘贴命令验证同页及跨页粘贴、重复粘贴、嵌套元素、站点共享类、局部样式 ID 和保存重开。浏览器禁止外部请求。

## 许可和预设素材

官方 4.3.6 与 4.4.1 安装包的 GPLv3 许可文件相同。仓库随附相同的 [GPLv3 文本](../linglingqi-builder-open/license.txt)，保留原版权和第三方库随附的许可文件。 [官方 GPLv3 文本](https://raw.githubusercontent.com/elementor/elementor/4.3.6/license.txt)

三张组合示例图是本项目绘制的抽象插画，随插件安装包本地提供。预设图片使用插件资产 URL，另行替换为自有素材可在原子图片控件中完成。
