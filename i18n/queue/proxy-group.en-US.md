---
group: Proxy side configuration file
---

# Group.yml

```yaml
# Group name
Lobby:
  # Group display name
  display-name: "&aLobby"
  # Matching rules
  # MORE_ONLINE More players first
  # LESS_ONLINE Fewer players first
  # MOTD Matches based on MOTD
  # MOTD_AND_MORE_ONLINE Matches based on MOTD and has the most people first
  # MOTD_AND_LESS_ONLINE matches according to MOTD and has the lowest number of players first
  # MOTD_AND_RANDOM matches according to MOTD and selects randomly
  # RANDOM randomly selects available servers
  rule: "MORE_ONLINE"
  motd:
  - "Server Can Join"
  # Replacements for display only
  motd-replace:
    "WAITING": "Waiting"
    "STARTING": "Counting down"
    "PLAYING": "In game"
    "ENDING": "Ended"
  # Delayed match on
  delay: 0
  # Tag
  tag:
  - DISABLE_TITLE
  - DISABLE_MESSAGE
  # MATCH Contains only servers that are online and match the criteria (default)
  # ONLINE Contains all servers that are online
  # OFFLINE Contains all servers in the match pool
  gui-show-level: MATCH
  # Match pool
  servers:
    # Same name as the proxy side
    lobby_1:
      # Display name
      display-name: "&aLobby #1"
      timeout: 1000
      charset: "UTF-8"

```

## display-name
The display name of the matching group, usually used for the `%queueDisplayName%` replacement in language files.

## rule
The rule used to match the server.

| Rules                           | Explanation                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| MORE_ONLINE                     | More players first                                            |
| LESS_ONLINE Fewer players first |                                                               |
| MOTD                            | Matching according to MOTD                                    |
| MOTD_AND_MORE_ONLINE          | Matching according to MOTD and highest number of people first |
| MOTD_AND_LESS_ONLINE          | Matching according to MOTD and lowest number priority         |
| MOTD_AND_RANDOM               | Matching and random selection according to MOTD               |
| RANDOM                          | Random selection of available servers                         |

## motd
This section needs to be filled in only if the rule requires a MOTD and contains a list of all accepted MOTDs.

## motd-replace
This section is only required for rules that require MOTD and can be filled in with the name as they are displayed.

## delay
Manual delay when using the match function.

## tag
Matching group attributes, currently only the following two are supported：

| Properties      | Explanation                           |
| --------------- | ------------------------------------- |
| DISABLE_TITLE   | Title is not displayed when matching  |
| DISABLE_MESSAGE | No message is displayed when matching |

## gui-show-level
The levels displayed in the Arena menu, from highest to lowest priority, are MATCH > ONLINE > OFFLINE These levels are explained as follows：

| Grade   | Explanation                                                            |
| ------- | ---------------------------------------------------------------------- |
| MATCH   | Contains only servers that are online and match the criteria (default) |
| ONLINE  | Includes all online servers                                            |
| OFFLINE | Contains all servers in the match pool                                 |

## servers
A list of servers in the match group and their attributes.

| Properties   | Explanation                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| display-name | The name at the time of presentation, usually used for the `%serverDisplayName%` replacement in the language file. |
| timeout      | Timeout time, the ping is considered offline when no response is received after this time, in milliseconds         |
| charset      | Coding of MOTD                                                                                                     |
