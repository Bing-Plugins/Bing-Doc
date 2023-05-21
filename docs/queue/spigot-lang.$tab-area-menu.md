---
title: 自定义竞技场菜单
---

# 自定义竞技场菜单

:::warning{title=提示}
你只需要将下面的文本复制一次就可以为一个自定义竞技场菜单填写语言文本\
但记得将下文中的 `{area-menu-id}` 替换为你的自定义竞技场菜单的 ID
:::

## 可用的变量
| 变量                   | 解释        |
|----------------------|-----------|
| %queueName%          | 原始匹配组 ID  |
| %queueDisplayName%   | 匹配组展示名称   |
| %serverName%         | 原始服务器 ID  |
| %serverDisplayName%  | 服务器展示名称   |
| %serverMotd%         | 服务器 MOTD  |
| %serverPlayerNum%    | 当前服务器在线人数 |
| %serverMaxPlayerNum% | 服务器最大人数   |

## 语言配置文本

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

gui-area-previous-page-name: "&a上一页"
gui-area-previous-page-description: |-
  &7第 %previous-page% 页

gui-area-next-page-name: "&a下一页"
gui-area-next-page-description: |-
  &7第 %next-page% 页

gui-area-other-back-name: "&a返回"
gui-area-other-back-description: |-
  &7返回%queueDisplayName%
```

## gui-{area-menu-id}-title
竞技场菜单显示标题

## gui-{area-menu-id}-match-server-name
竞技场匹配时显示的物品名称

## gui-{area-menu-id}-match-server-description
