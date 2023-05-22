---
group: 組態文件
---

# LootChest.yml

```yaml
Common:
  texture: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTc5ZmFkNDIwZDJjOTcyMDUxYzljMDRkNGYyNmE4ZDBkMGE5YTNiZWMyOGQ4MGIxZjY4YmQ1ZGQ4Y2ZhZTBjZiJ9fX0='
  respawnTime: 60
  location:
    - world,30.5,153.0,-54.5
    - world,67.5,147.0,29.5
  display:
    - world,-25.5,145.0,27.5
  items:
    f5d957e0-71d5-434f-975f-cf84babd020d:
      weight: 30
      item:
        ==: org.bukkit.inventory.ItemStack
        v: 2975
        type: EXPERIENCE_BOTTLE
        amount: 16
Rare:
  texture: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzE1NDRiZDcyNjA1ODI3YjlhODgwMjNlNzgzNjhiNDFlOGY4M2FjNWM5ZTQ3YzgyZmIxOTZmYzY3MmIyMmE3NiJ9fX0='
  respawnTime: 120
  location: []
  display: []
  items: {}
Epic:
  texture: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTA2ZWExMDRjYjliZTcwM2NjZWQxYjFmNTY1Mjg2NzUyZTI3MTc1MmM1YWM4NWU4MTEzYjNlMmRjNDM1MmMyMCJ9fX0='
  respawnTime: 180
  location: []
  display: []
  items: {}
Legendary:
  texture: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDNkMDRkYmE1MWY4OTI0OTU4MzRmZjcxYTQyOWE4YTkxMDE1YTVhNzg2Yjg1NmZmZTljMDI0Y2RiNTJmYmM4ZiJ9fX0='
  respawnTime: 300
  location: []
  display: []
  items: {}
Random:
  location: []
```

## texture

幸运方块头颅的 texture，可修改。

## respawnTime

此类型幸运方块再次生成时间。

## display

展示用幸运方块的坐标。

## items

此类型幸运方块的幸运物品，通常不需要手动修改。
