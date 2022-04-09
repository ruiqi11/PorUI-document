---
title: Button 按钮
---

## 基本使用
#

  <demo-block>
::: slot source

<button-button1></button-button1>

:::

使用type属性来定义 Button 的样式。

::: slot highlight

```html
<div>
    <por-button>默认按钮</por-button>
    <por-button type="primary">主要按钮</por-button>
    <por-button type="success">成功按钮</por-button>
    <por-button type="info">信息按钮</por-button>
    <por-button type="warning">警告按钮</por-button>
    <por-button type="danger">危险按钮</por-button>
</div>
```
:::
</demo-block>


## 带图标
#

<demo-block>
::: slot source

<button-button2></button-button2>

:::

使用icon属性来定义 Button 的图标，用iconPosition属性定义图标的位置。

::: slot highlight

```html
<div>
  <por-button type="primary" icon='icon-shezhi'>左侧</por-button>
  <por-button type="primary" icon='icon-shezhi' iconPosition='right'>右侧 </por-button>
</div>
```
:::
</demo-block>


## 加载中
#


<demo-block>
::: slot source
<button-button3></button-button3>
:::

使用loading属性来定义 Button 的图标，按钮不可点击。

::: slot highlight

```html
<div>
  <por-button type="primary" loading>加载中</por-button>
</div>
```
:::
</demo-block>

## 涟漪效果
#

<demo-block>
::: slot source
<button-button4></button-button4>
:::

使用press属性开启涟漪效果。

::: slot highlight

```html
<div>
  <por-button press>涟漪效果</por-button>
</div>
```
:::
</demo-block>


## 组合
#

<demo-block>
::: slot source
<button-button-group></button-button-group>
:::
pro-button-group 标签包裹多个按钮，不能包含其他类型组件。

::: slot highlight

```html
<div>
  <por-button-group>
      <por-button icon='icon-back' type="primary" >上一页</por-button>
      <por-button icon='icon-more' type="primary" icon-position='right'>下一页</por-button>
    </por-button-group>
</div>
```
:::
</demo-block>

