---
title: 自定义竞技场菜单
order: 2
---

# 自定义竞技场菜单

你只需要将下面的文本复制一次就可以为一个自定义竞技场菜单填写语言文本

## 可用的变量
| 变量                   | 解释        |
| -------------------- | --------- |
| %queueName%          | 原始匹配组 ID  |
| %queueDisplayName%   | 匹配组展示名称   |
| %serverName%         | 原始服务器 ID  |
| %serverDisplayName%  | 服务器展示名称   |
| %serverMotd%         | 服务器 MOTD  |
| %serverPlayerNum%    | 当前服务器在线人数 |
| %serverMaxPlayerNum% | 服务器最大人数   |

## 语言配置文本

:::warning{title=提示}
记得将下文中的 `{area-menu-id}` 替换为你的自定义竞技场菜单的 ID\
`{other-name}` 替换为自定义物品的 ID
:::

```yaml
gui-{area-menu-id}-title: "%queueDisplayName%"

gui-{area-menu-id}-match-server-name: "&a%serverDisplayName%"
gui-{area-menu-id}-match-server-description: |-
  &8%queueDisplayName%

  &7当前玩家: &a%serverPlayerNum%&7 / &a%serverMaxPlayerNum%

  &e点击进入游戏

gui-{area-menu-id}-online-server-name: "&a%serverDisplayName%"
gui-{area-menu-id}-online-server-description: |-
  &8%queueDisplayName%

  &7当前玩家: &a%serverPlayerNum%&7 / &a%serverMaxPlayerNum%

  &e点击进入游戏

gui-{area-menu-id}-offline-server-name: "&a%serverDisplayName%"
gui-{area-menu-id}-offline-server-description: |-
  &8%queueDisplayName%

  &7当前状态: &c已离线

gui-{area-menu-id}-random-name: "&a随机地图"
gui-{area-menu-id}-random-description: |-
  &8%queueDisplayName%

  &e点击随机选择地图

gui-{area-menu-id}-previous-page-name: "&a上一页"
gui-{area-menu-id}-previous-page-description: |-
  &7第 %previous-page% 页

gui-{area-menu-id}-next-page-name: "&a下一页"
gui-{area-menu-id}-next-page-description: |-
  &7第 %next-page% 页

gui-{area-menu-id}-other-{other-name}-name: "&a返回"
gui-{area-menu-id}-other-{other-name}-description: |-
  &7返回%queueDisplayName%
```

### gui-{area-menu-id}-title
竞技场菜单显示标题

### gui-{area-menu-id}-{match/online/offline}-server-{name/description}
竞技场 `匹配/在线/离线` 时显示的服务器 `名称/描述信息`

### gui-{area-menu-id}-random-{name/description}
随机选择竞技场按钮显示的 `名称/描述信息`

### gui-area-{previous/next}-page-{name/description}
`上一页/下一页` 按钮的 `名称/描述信息`

### gui-{area-menu-id}-other-{other-name}-{name/description}
自定义按钮的 `名称/描述信息`
