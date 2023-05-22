---
title: Custom arena menu
---

# Custom arena menu

You only need to copy the text below to a new file to create an arena menu.

:::warning{title=Tip}
Don’t forget to add the text of this menu in the language file
:::

## Configuration file

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
