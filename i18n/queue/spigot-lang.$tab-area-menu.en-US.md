---
title: Custom arena menu
---

# Custom arena menu

You only need to copy the text below once to fill in the language text for a custom arena menu

## Available variables
| Variable             | Explanation                  |
| -------------------- | ---------------------------- |
| %queueName%          | Original match group ID      |
| %queueDisplayName%   | Match group display name     |
| %serverName%         | Original server ID           |
| %serverDisplayName%  | Server display name          |
| %serverMotd%         | Server MOTD                  |
| %serverPlayerNum%    | Current server online number |
| %serverMaxPlayerNum% | Server maximum number        |

## Language configuration text

:::warning{title=tips}
Remember to replace `{area-menu-id}` below with the ID of your custom arena menu\
`{other-name}` with the ID of your custom item ::.

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
Arena menu display title

### gui-{area-menu-id}-{match/online/offline}-server-{name/description}
Arena `Matching/Online/Offline` Server displayed when `Name/Description Information`

### gui-{area-menu-id}-random-{name/description}
Random selection of arena button displayed at `Name/Description information`

### gui-area-{previous/next}-page-{name/description}
`Previous/Next` button's `Name/Description Information`

### gui-{area-menu-id}-other-{other-name}-{name/description}
Custom button's `name/description information`
