---
group: 代理端配置文件
---

# Group.yml

```yaml
# 组名称
Lobby:
  # 组展示名称
  display-name: "&aLobby"
  # 匹配规则
  # MORE_ONLINE 更多玩家优先
  # LESS_ONLINE 更少玩家优先
  # MOTD 根据 MOTD 匹配
  # MOTD_AND_MORE_ONLINE 根据 MOTD 匹配并人数最多优先
  # MOTD_AND_LESS_ONLINE 根据 MOTD 匹配并人数最少优先
  # MOTD_AND_RANDOM 根据 MOTD 匹配并随机选择
  # RANDOM 随机选择可用服务器
  rule: "MORE_ONLINE"
  motd:
  - "Server Can Join"
  # 仅用于显示的替换
  motd-replace:
    "WAITING": "等待中"
    "STARTING": "倒计时中"
    "PLAYING": "游戏中"
    "ENDING": "已结束"
  # 延迟匹配上
  delay: 0
  # 标签
  tag:
  - DISABLE_TITLE
  - DISABLE_MESSAGE
  # MATCH 仅包含在线且符合匹配条件的服务器（默认）
  # ONLINE 包含所有在线的服务器
  # OFFLINE 包含所有匹配池中的服务器
  gui-show-level: MATCH
  # 匹配池
  servers:
    # 与代理端名称一致
    lobby_1:
      # 展示名称
      display-name: "&aLobby #1"
      timeout: 1000
      charset: "UTF-8"

```

## display-name
匹配组的展示名称，通常用于语言文件中的 `%queueDisplayName%` 替换。

## rule
用于匹配服务器的规则。

| 规则                   | 解释                |
|----------------------|-------------------|
| MORE_ONLINE          | 更多玩家优先            |
| LESS_ONLINE 更少玩家优先   |
| MOTD                 | 根据 MOTD 匹配        |
| MOTD_AND_MORE_ONLINE | 根据 MOTD 匹配并人数最多优先 |
| MOTD_AND_LESS_ONLINE | 根据 MOTD 匹配并人数最少优先 |
| MOTD_AND_RANDOM      | 根据 MOTD 匹配并随机选择   |
| RANDOM               | 随机选择可用服务器         |

## motd
仅当需要 MOTD 的规则才需要填写此部分，包含所有接受的 MOTD 列表。

## motd-replace
仅当需要 MOTD 的规则才需要填写此部分，可以填入它们展示时候的名称。

## delay
当使用匹配功能时候的人工延迟。

## tag
匹配组的属性，目前只支持以下两种：

| 属性              | 解释           |
|-----------------|--------------|
| DISABLE_TITLE   | 匹配时不显示 Title |
| DISABLE_MESSAGE | 匹配时不显示消息     |

## gui-show-level
竞技场菜单中展示的等级，优先级由高到低分别是 MATCH > ONLINE > OFFLINE
这些等级的解释如下：

| 等级      | 解释                   |
|---------|----------------------|
| MATCH   | 仅包含在线且符合匹配条件的服务器（默认） |
| ONLINE  | 包含所有在线的服务器           |
| OFFLINE | 包含所有匹配池中的服务器         |

## servers
匹配组内的服务器列表以及它们的属性。

| 属性           | 解释                                          |
|--------------|---------------------------------------------|
| display-name | 展示时的名称，通常用于语言文件中的 `%serverDisplayName%` 替换。 |
| timeout      | 超时时间，ping 超过这个时间未得到响应时认定为离线，单位毫秒            |
| charset      | MOTD 的编码                                    |
