---
title: input 输入框
---

## 基础用法

#
<demo-block>
::: slot source
<input-input1></input-input1>
:::

使用value属性定义输入框的值。
<br/>
使用title属性定义浮层提示。
<br/>
使用readonly属性定义只读。
<br/>
使用error属性定义错误信息。

::: slot highlight

```html
<div>
    <por-input value="默认样式"></por-input>
    <por-input value="浮层提示" title="浮层提示"></por-input>
    <por-input value="禁止输入" disabled></por-input>
    <por-input value="只读" readonly></por-input>
    <por-input value="值" error="错误"></por-input>
</div>
```
:::
</demo-block>

## 支持双向绑定

#
<demo-block>
::: slot source
<input-input2></input-input2>
:::

可以使用v-model绑定value。

::: slot highlight

```html
<div>
  <por-input v-model="value"></por-input>
  <div>
    value: {{value}}
  </div>
</div>
<script>
export default {
  data(){
    return{
      value: '1'
    }
  },
}
</script>
```
:::
</demo-block>
