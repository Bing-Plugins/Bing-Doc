---
group: Configuration file
---

# Booster.yml

```yaml
# Player kill reward
Vip:
  display: '&aVIP'
  permission: rank.vip
  booster: 1.5
  command:
    - say hi %player%
Mvp:
  display: '&bMVP'
  permission: rank.mvp
  booster: 2
  command: []
```

## display

Display name, used for showing when killing.

## permission

The permission required to use this bonus.

## booster

Coin bonus multiplier.

## command

Extra commands to execute when killing, support variable `%player%`.
