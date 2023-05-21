---
title: 自定义竞技场菜单
---

:::warning{title=提示}
你只需要将下面的文本复制一次就可以为一个自定义竞技场菜单填写语言文本\
但记得将下文中的 lobby 替换为你的自定义竞技场菜单的 ID
:::

```yaml
gui-lobby-title: "%queueDisplayName%"

gui-lobby-match-server-name: "&a%serverDisplayName%"
gui-lobby-match-server-description: |-
  &8%queueDisplayName%
  
  &7当前玩家: &a%serverPlayerNum%&7 / &a%serverMaxPlayerNum%
  
  &e点击进入大厅

gui-lobby-online-server-name: "&a%serverDisplayName%"
gui-lobby-online-server-description: |-
  &8%queueDisplayName%
  
  &7当前玩家: &a%serverPlayerNum%&7 / &a%serverMaxPlayerNum%
  
  &e点击进入大厅

gui-lobby-offline-server-name: "&a%serverDisplayName%"
gui-lobby-offline-server-description: |-
  &8%queueDisplayName%
  
  &7当前状态: &c已离线

gui-lobby-random-name: "&a随机大厅"
gui-lobby-random-description: |-
  &8%queueDisplayName%
  
  &e点击随机选择大厅
```

## gui-lobby-title
竞技场菜单显示标题

## gui-lobby-match-server-name
竞技场匹配时显示的物品名称
