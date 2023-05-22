---
title: Customize the main menu
---

# Customize the main menu

You can create a main menu by simply copying the text below into a newly created file.

:::warning{title=tips}
Don't forget to add the text of this menu in the language file ::.

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
    item. ARROW
    console-command: []
    player-command:
      - rejoin
```
