bookmark-tool-loader
====================

[![Greenkeeper badge](https://badges.greenkeeper.io/yujiangshui/bookmark-tool-loader.svg)](https://greenkeeper.io/)

Bookmark tool loader，让你专注于书签工具本身功能的编写。

Bookmark tool loader, let you focus on bookmark tool itself.

## 介绍

当你开发一个书签工具的时候，可以专注书签工具本身功能开发，然后将其部署在 CDN 或者服务器上面，使用这个工具加载到页面中。

## 用法

1. 下载下来或者 `git clone`
2. 跳转到目录并执行：

	```
	npm install
	grunt
	```
	这样会开启 jshint 校验，并压缩代码。

3. 打开 `bookmark-tool-loader.js` 文件，参照 Demo 加载你的书签工具资源。
4. 打开 `bookmark-tool-loader.min.js` 文件，将所有代码复制到 `loader.html` 文件中的对应位置，然后就可以打开这个文件，拖动到书签栏进行功能测试了。

## 参数

```
loadFile(file, type, handle);
```
### file

Type: `string`

你想加载的文件的 URL。

### type

Type: `string`

Value: `css` 或者 `js`

你加载文件的类型，支持 css 和 js。

### handle

Type: `function`

可选参数，当资源加载完成之后，会调用这个回调函数。适用于资源之间有加载顺序或者依赖关系的场景，例如 jQuery 和 jQuery 插件，插件调用要在 jQuery 加载完之后进行。




## Intro

Use bookmark tool loader, you can focus on your bookmark tool itself.

When you finish your code in external files, put them on your CDN or Web Server, then you can use this tool to load them.

## Usage

1. `git clone` or download it.
2. Jump to the folder and run:

	```
	npm install
	grunt
	```
3. Write code to load your bookmark files. Open `bookmark-tool-loader.js` your can see the demo code on the top.
4. Open `bookmark-tool-loader.min.js`, copy the code to replace `CODE_PUT_HERE` of `loader.html` file, then you can open it and test your bookmark tool.


## Options

```
loadFile(file, type, handle);
```

### file

Type: `string`

The file which you what to load.

### type

Type: `string`

Value: `css` or `js`

The type of the file.

### handle

Type: `function`

This is an optional parameter. When the file loaded, this handle will be called.

It's useful for load files which has dependence, like jQuery and plugin, the plugin must called after jQuery callled.
