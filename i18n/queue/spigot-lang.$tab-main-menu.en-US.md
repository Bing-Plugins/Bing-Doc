---
title: Custom main menu
---

# Custom main menu

You only need to copy the text below once to fill in the language text for a custom main menu

## Available variables
| Variable           | Explanation              |
| ------------------ | ------------------------ |
| %queueName%        | Original match group ID  |
| %queueDisplayName% | Match group display name |

## Language configuration text

:::warning{title=tips}
Remember to replace `{area-menu-id}` below with the ID of your custom arena menu\
`{other-name}` with the ID of your custom item ::.

```yaml
gui-{main-menu-id}-title: "游玩%queueDisplayName%"

gui-{main-menu-id}-play-name: "&a%queueDisplayName%"
gui-{main-menu-id}-play-description: |-
  &7游玩%queueDisplayName%

  &e点击开始游戏
gui-{main-menu-id}-play-floodgate-button: |-
  游玩%queueDisplayName%
  点击开始游戏

gui-{main-menu-id}-area-select-name: "&a房间选择器"
gui-{main-menu-id}-area-select-description: |-
  &7在房间选择器中选择一个房间游玩
  &7
  &e点击浏览
gui-{main-menu-id}-area-select-floodgate-button: |-
  房间选择器
  点击浏览

gui-{main-menu-id}-area-select-clicked-name: "&a地图选择器"
gui-{main-menu-id}-area-select-clicked-description: |-
  &7已发送获取请求, 等待数据回传

gui-{main-menu-id}-other-{other-name}-name: "&a重新加入"
gui-{main-menu-id}-other-{other-name}-description: |-
  &7如果你掉线了, 可以点击这里重新加入

gui-{main-menu-id}-other-{other-name}-floodgate-button: |-
  重新加入
  点击重新加入
```

### gui-{area-menu-id}-title
Main Menu Display Title

### gui-{main-menu-id}-play-{name/description}
Matching button's `name/description information`

### gui-{main-menu-id}-play-floodgate-button
The matching button text for Floodgate, which supports up to two lines

### gui-{main-menu-id}-area-select-{name/description}
Toggle arena selection menu button for `Name/Description information`

### gui-{main-menu-id}-area-select-floodgate-button
The switch arena selection menu button text for Floodgate, which supports up to two lines

### gui-{main-menu-id}-area-select-clicked-{name/description}
`Name/Description information displayed when the switch arena selection menu button is clicked and waiting for data to be sent back from the proxy side`

### gui-{area-menu-id}-other-{other-name}-{name/description}
Custom button's `name/description information`

### gui-{main-menu-id}-other-{other-name}-floodgate-button
The custom button text for Floodgate, which supports up to two lines
