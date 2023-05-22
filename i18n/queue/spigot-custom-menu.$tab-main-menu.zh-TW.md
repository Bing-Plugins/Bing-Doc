---
title: 自定义主菜单
---

# 自定义主菜单

你只需要将下面的文本复制到新建的文件中就可以创建一个主菜单。

:::warning{title=提示}
不要忘记在语言文件中添加此菜单的文本
:::

## 組態文件

```yaml
rows: 3

play:
  slot: 12
  item: SLIME_BALL

area-select:
  slot: 14
  item: OAK_SIGN

area-select-clicked:
  slot: 14
  item: OAK_SIGN

other:
  rejoin:
    slot: 49
    item: ARROW
    console-command: []
    player-command:
      - rejoin
```
