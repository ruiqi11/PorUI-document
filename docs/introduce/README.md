---
title: porUI
---

## 简介
porUI 是一个实用的 UI 简易框架，目前提供了一些常用组件（不定期更新），适合 PC 端使用。

## NPM包
[![NPM](https://nodei.co/npm/por-ui.png)](https://nodei.co/npm/por-ui/)

## 快速上手
1. 安装
<div style="background-color: #fafafa; padding: 20px 15px">
npm install por-ui
</div>

2. 全部引入
<div style="background-color: #fafafa; padding: 20px 15px">
// main.js，导入porUI
<br/>
import porUI from 'por-ui'
<br/>
import 'por-ui/dist/por-ui.css'
<br/>
Vue.use(porUI)
</div>

3. 按需引入
<div style="background-color: #fafafa; padding: 20px 15px">
import {Button} from 'por-ui'
<br/>
import 'por-ui/dist/por-ui.css'
<br/>
Vue.component(Button.name, Button);
</div>

4. toast需要安装插件
<div style="background-color: #fafafa; padding: 20px 15px">
import { Plugin } from './packages/index'
<br/>
Vue.prototype.$toast = Plugin
</div>

## 现已支持

Button（按钮）
<br/>
Input（输入框）
<br/>
Layout（布局）
<br/>
Toast（提示）
<br/>
Tabs（选项卡）
<br/>
Popover（浮层）


## 官方文档

[官方文档](https://github.com/ruiqi11/PorUI/)

#提问

[Issues](https://github.com/ruiqi11/PorUI/issues)

#贡献代码

[Pull request](https://github.com/ruiqi11/PorUI/pulls)
