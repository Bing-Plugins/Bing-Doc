---
title: Custom arena menu
---

# Custom arena menu

You only need to copy the text below once to fill in the language text for a custom arena menu

## Available variables
| Variables            | Explanation                      |
| -------------------- | -------------------------------- |
| %queueName%          | Original Match Group ID          |
| %queueDisplayName%   | Matching group display name      |
| %serverName%         | Original Server ID               |
| %serverDisplayName%  | Server display name              |
| %serverMotd%         | Server MOTD                      |
| %serverPlayerNum%    | Current server online population |
| %serverMaxPlayerNum% | Maximum number of servers        |

## Language configuration text

:::warning{title=tips}
Remember to replace `{area-menu-id}` below with the ID of your custom arena menu\
`{other-name}` with the ID of your custom item ::.

```yaml
gui-{area-menu-id}-title: "%queueDisplayName%"

gui-{area-menu-id}-match-server-name: "&a%serverDisplayName%"
gui-{area-menu-id}-match-server-description: |-
  &8%queueDisplayName%

  &7 Current Player: &a%serverPlayerNum%&7 / &a%serverMaxPlayerNum%

  &eClick to play

gui-{area-menu-id}-online-server-name: "&a%serverDisplayName%"
gui-{area-menu-id}-online-server-description: |- 8 7 Current Player: a 7 / a eClick to play gui- -online-server-name: " a " gui- -online- server-description: |-
  &8%queueDisplayName%

  &7 Current Player: &a%serverPlayerNum%&7 / &a%serverMaxPlayerNum%

  &eClick to enter the game

gui-{area-menu-id}-offline-server-name: "&a%serverDisplayName%"
gui-{area-menu-id}-offline-server-description: |-
  &8%queueDisplayName%

  &7 Current Status: &c is offline

gui-{area-menu-id}-random-name: "&a random map"
gui-{area-menu-id}-random-description: |-
  &8%queueDisplayName%

  &eClick to randomly select a map

gui-{area-menu-id}-previous-page-name: "&a previous page"
gui-{area-menu-id}-previous-page-description: |-
  &7Page %previous-page%

gui-{area-menu-id}-next-page-name: "&a next-page-name: "
gui-{area-menu-id}-next-page-description: |-
  &7 第 %next-page% 页

gui-{area-menu-id}-other-{other-name}-name: "&a 回回"
gui-{area-menu-id}-other-{other-name}-description: |-
  &7 回回%queueDisplayName%
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
