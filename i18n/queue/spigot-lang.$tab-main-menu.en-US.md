---
title: Customize the main menu
---

# Customize the main menu

You only need to copy the text below once to fill in the language text for a custom main menu

## Available variables
| Variables          | Explanation                 |
| ------------------ | --------------------------- |
| %queueName%        | Original Match Group ID     |
| %queueDisplayName% | Matching group display name |

## Language configuration text

:::warning{title=tips}
Remember to replace `{area-menu-id}` below with the ID of your custom arena menu\
`{other-name}` with the ID of your custom item ::.

```yaml
gui-{main-menu-id}-title: "Play%queueDisplayName%"

gui-{main-menu-id}-play-name: "&a%queueDisplayName%"
gui-{main-menu-id}-play-description: |-
  &7Play%queueDisplayName%

  &eClick to start the game
gui-{main-menu-id}-play-floodgate-button: |-
  Play%queueDisplayName%
  Click to start the game

gui-{main-menu-id}-area-select-name: "&a room selector"
gui-{main-menu-id}-area-select-description: |-
  &7 Select a room to play in the room selector
  &7
  &e clicked to browse
gui-{main-menu-id}-area-select-floodgate-button: |-
  room-selector
  clicked to browse

gui-{main-menu-id}-area-select-clicked- name: "&a map selector"
gui-{main-menu-id}-area-select-clicked-description: |-
  &7Fetch request sent, waiting for data to be returned

gui-{main-menu-id}-other-{other-name}-name: "&a rejoin"
gui-{main-menu-id}-other-{other-name}-description: |-
  &7If you're down, you can click here to rejoin

gui-{main-menu-id}-other-{other-name}-floodgate-button: |-
  rejoin
  click to rejoin
```

### gui-{area-menu-id}-title
Main Menu Display Title

### gui-{main-menu-id}-play-{name/description}
Matching button's `name/description information`

### gui-{main-menu-id}-play-floodgate-button
Match button text for Floodgate, supports up to two lines

### gui-{main-menu-id}-area-select-{name/description}
Toggle arena selection menu button for `Name/Description information`

### gui-{main-menu-id}-area-select-floodgate-button
Toggle arena selection menu button text for Floodgate, supports up to two lines only

### gui-{main-menu-id}-area-select-clicked-{name/description}
`Name/Description information displayed when the switch arena selection menu button is clicked and waiting for data to be sent back from the proxy side`

### gui-{area-menu-id}-other-{other-name}-{name/description}
Custom button's `name/description information`

### gui-{main-menu-id}-other-{other-name}-floodgate-button
Custom button text for Floodgate, supporting up to two lines
