---
group: 配置文件
---

# Booster.yml

```yaml
# 玩家击杀奖励
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

显示名称，用于击杀时显示。

## permission

使用此加成所需的权限。

## booster

硬币加成倍数。

## command

击杀时额外执行的命令，支持变量 `%player%`。
