---
title: Toast 提示
---

## 定时关闭

#
<demo-block>
::: slot source
<toast-toast1></toast-toast1>
:::

按钮通过@click绑定$toast()方法，点击触发。
$toast可以传入参数position，定义浮层位置。可选值为top，middle，bottom，默认为top。

::: slot highlight

```html
<div>
  <por-button @click="$toast('点击弹出提示')" border>上方弹出</por-button>
  <por-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</por-button>
  <por-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</por-button>
</div>
<style>
  .por-toast {
    z-index: 30;
  }
</style>
onClickButton () {
  this.$toast('你知道我在等你吗？', {
    closeButton: {
      text: '知道了',
      callback: () => {
        console.log('他说知道了')
      }
    }
  })
}
```
:::
</demo-block>

## 按钮关闭

#
<demo-block>
::: slot source
<toast-toast2></toast-toast2>
:::

使用autoClose属性定义自动关闭，默认为true，即2s后关闭。
如果设置为false，则手动关闭。

::: slot highlight

```html
<div>
  <por-button @click="onClickButton" autoClose="false">上方弹出</por-button>
</div>
<style>
  .por-toast {
    z-index: 30;
  }
</style>
onClickButton () {
  this.$toast('你知道我在等你吗？', {
    closeButton: {
      text: '知道了',
      callback: () => {
        console.log('他说知道了')
      }
    }
  })
}
```
:::
</demo-block>


## 支持 HTML

#
<demo-block>
::: slot source
<toast-toast3></toast-toast3>
:::

在$toast中传入html可以起效。

::: slot highlight

```html
<div>
  <por-button @click="onClickButton" autoClose="false">h3标题</por-button>
</div>
<style>
  .por-toast {
    z-index: 30;
  }
</style>
onClickButton () {
  this.$toast('<h3 style="color:red;">h3标题提示</h3>', {
    enableHtml: true
  })
}
```
:::
</demo-block>
