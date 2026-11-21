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

## 许可和预设素材

官方 4.3.6 与 4.4.1 安装包的 GPLv3 许可文件相同。仓库随附相同的 [GPLv3 文本](../linglingqi-builder-open/license.txt)，保留原版权和第三方库随附的许可文件。 [官方 GPLv3 文本](https://raw.githubusercontent.com/elementor/elementor/4.3.6/license.txt)

三张组合示例图是本项目绘制的抽象插画，随插件安装包本地提供。预设图片使用插件资产 URL，另行替换为自有素材可在原子图片控件中完成。
