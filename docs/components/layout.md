---
title: Layout 布局
---

## 上中下三栏
#
<layout-layout1></layout-layout1>

代码
```html
<div>
  <por-layout style="color: white; margin-bottom:50px;">
    <por-header style="height: 50px; background:lightskyblue;">
      header
    </por-header>
    <por-content style="height: 100px; background:deepskyblue;">
      content
    </por-content>
    <por-footer style="height: 50px; background:lightskyblue;">
      footer
    </por-footer>
  </por-layout>
</div>
```
#

## 添加侧边栏
#
<layout-layout2></layout-layout2>

代码
```html
<por-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <por-sider style=" background:#ddd; width:200px; color: black;">
    sider
  </por-sider>
  <por-layout>
    <por-header style="height: 50px; background:lightskyblue;">
      header
    </por-header>
    <por-content style="height: 100px; background:deepskyblue;">
      content
    </por-content>
    <por-footer style="height: 50px; background:lightskyblue;">
      footer
    </por-footer>
  </por-layout>
</por-layout>
```
