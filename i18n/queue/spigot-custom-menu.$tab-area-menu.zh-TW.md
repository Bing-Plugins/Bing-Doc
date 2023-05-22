---
title: 自定义竞技场菜单
---

# 自定义竞技场菜单

你只需要将下面的文本复制到新建的文件中就可以创建一个竞技场菜单。

:::warning{title=提示}
不要忘记在语言文件中添加此菜单的文本
:::

## 組態文件

```yaml
rows: 6
slots: [10,11,12,13,14,15,16,19,20,21,22,23,24,25,28,29,30,31,32,33,34]

match-server:
  item: MAP

online-server:
  item: PAPER

offline-server:
  item: REDSTONE

random:
  slot: 40
  item: FIREWORK_ROCKET

previous-page:
  slot: 18
  item: ARROW

next-page:
  slot: 26
  item: ARROW

other:
  back:
    slot: 49
    item: ARROW
    console-command: []
    player-command:
      - queue %queueName% gui
```
