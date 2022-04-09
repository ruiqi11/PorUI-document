---
title: Popover 浮层
---

## 点击方式

#
<demo-block>
::: slot source
<popover-popover1></popover-popover1>
:::

使用position属性来定义 popover 的位置。

::: slot highlight

```html
<div>
    <por-popover>
      <por-button>上方弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="bottom">
      <por-button>下方弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="left">
      <por-button>左边弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="right">
      <por-button>右边弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
</div>
```
:::
</demo-block>

## hover方式

#
<demo-block>
::: slot source
<popover-popover2></popover-popover2>
:::

使用trigger属性来定义 popover 的触发方式。

::: slot highlight

```html
<div>
  <por-popover trigger="hover">
    <por-button>上方弹出</por-button>
    <template slot="content">
      弹出内容
    </template>
  </por-popover>
  <por-popover position="bottom" trigger="hover">
    <por-button>下方弹出</por-button>
    <template slot="content">
      弹出内容
    </template>
  </por-popover>
  <por-popover position="left" trigger="hover">
    <por-button>左边弹出</por-button>
    <template slot="content">
      弹出内容
    </template>
  </por-popover>
  <por-popover position="right" trigger="hover">
    <por-button>右边弹出</por-button>
    <template slot="content">
      弹出内容
    </template>
  </por-popover>
</div>
```
:::
</demo-block>
