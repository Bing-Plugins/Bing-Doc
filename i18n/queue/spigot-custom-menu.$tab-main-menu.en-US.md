---
title: Custom main menu
---

# Custom main menu

You only need to copy the text below to a new file to create a main menu.

:::warning{title=Tip}
Don’t forget to add the text of this menu in the language file
:::

## Configuration file

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
