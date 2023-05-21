---
title: 自定义主菜单
---

# 自定义主菜单

你只需要将下面的文本复制一次就可以为一个自定义主菜单填写语言文本

## 可用的变量
| 变量                 | 解释       |
| ------------------ | -------- |
| %queueName%        | 原始匹配组 ID |
| %queueDisplayName% | 匹配组展示名称  |

## 语言配置文本

:::warning{title=提示}
记得将下文中的 `{area-menu-id}` 替换为你的自定义竞技场菜单的 ID\
`{other-name}` 替换为自定义物品的 ID
:::

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
主菜单显示标题

### gui-{main-menu-id}-play-{name/description}
匹配按钮的 `名称/描述信息`

### gui-{main-menu-id}-play-floodgate-button
用于 Floodgate 的匹配按钮文本，最多只支持两行

### gui-{main-menu-id}-area-select-{name/description}
切换竞技场选择菜单按钮的 `名称/描述信息`

### gui-{main-menu-id}-area-select-floodgate-button
用于 Floodgate 的切换竞技场选择菜单按钮文本，最多只支持两行

### gui-{main-menu-id}-area-select-clicked-{name/description}
当切换竞技场选择菜单按钮被点击，等待数据从代理端发回时显示的 `名称/描述信息`

### gui-{area-menu-id}-other-{other-name}-{name/description}
自定义按钮的 `名称/描述信息`

### gui-{main-menu-id}-other-{other-name}-floodgate-button
用于 Floodgate 的自定义按钮文本，最多只支持两行
