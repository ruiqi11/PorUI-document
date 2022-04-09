---
title: Tabs 选项卡
---

## 水平模式

#
<demo-block>
::: slot source
<tabs-tabs1></tabs-tabs1>
:::

使用selected动态绑定选项。
使用name属性对选项和内容进行配对。

::: slot highlight

```html
<div>
    <por-tabs :selected="selected">
      <por-tabs-head>
        <por-tabs-item name="1">1</por-tabs-item>
        <por-tabs-item name="2">2</por-tabs-item>
        <por-tabs-item name="3" disabled>3</por-tabs-item>
      </por-tabs-head>
      <por-tabs-body>
        <por-tabs-pane name="1">content 1</por-tabs-pane>
        <por-tabs-pane name="2">content 2</por-tabs-pane>
        <por-tabs-pane name="3">content 3</por-tabs-pane>
      </por-tabs-body>
    </por-tabs>
</div>
```
:::
</demo-block>

## 竖直模式

#
<demo-block>
::: slot source
<tabs-tabs2></tabs-tabs2>
:::

direction属性设置为vertical，可以变为竖直模式。

::: slot highlight

```html
<div>
  <por-tabs :selected="selected" direction="vertical">
    <por-tabs-head>
      <por-tabs-item name="1">1</por-tabs-item>
      <por-tabs-item name="2">2</por-tabs-item>
    </por-tabs-head> 
    <por-tabs-body>
      <por-tabs-pane name="1">content 1</por-tabs-pane>
      <por-tabs-pane name="2">content 2</por-tabs-pane>
    </por-tabs-body>
  </por-tabs>
</div>
```
:::
</demo-block>
