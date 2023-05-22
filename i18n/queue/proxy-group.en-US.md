---
group: Proxy-side configuration file
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
Rules for matching servers

| Rule                            | Explanation                                              |
| ------------------------------- | -------------------------------------------------------- |
| MORE_ONLINE                     | More players first                                       |
| LESS_ONLINE Fewer players first |                                                          |
| MOTD                            | Match according to MOTD                                  |
| MOTD_AND_MORE_ONLINE          | Match according to MOTD and prioritize the most players  |
| MOTD_AND_LESS_ONLINE          | Match according to MOTD and prioritize the least players |
| MOTD_AND_RANDOM               | Match according to MOTD and randomly select              |
| RANDOM                          | Randomly select an available server                      |

## motd
Only when a rule requires MOTD, this part needs to be filled in, containing a list of all accepted MOTDs.

## motd-replace
Only when a rule requires MOTD, this part needs to be filled in, and you can fill in their names when they are displayed.

## delay
Artificial delay when using the matching function

## tag
The attributes of the matching group, currently only support the following two types:

| Attribute       | Explanation                          |
| --------------- | ------------------------------------ |
| DISABLE_TITLE   | Do not display Title when matching   |
| DISABLE_MESSAGE | Do not display message when matching |

## gui-show-level
The levels displayed in the Arena menu, from highest to lowest priority, are MATCH > ONLINE > OFFLINE These levels are explained as follows:

| Level   | Explanation                                                           |
| ------- | --------------------------------------------------------------------- |
| MATCH   | Only include online servers that meet the matching criteria (default) |
| ONLINE  | Include all online servers                                            |
| OFFLINE | Include all servers in the matching pool                              |

## servers
The list of servers in the matching group and their attributes display-name: display-name.

| Attribute    | Explanation                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| display-name | The name at the time of presentation, usually used for the `%serverDisplayName%` replacement in the language file. |
| timeout      | Timeout time, when ping exceeds this time without response, it is considered offline, unit milliseconds            |
| charset      | The encoding of MOTD                                                                                               |
