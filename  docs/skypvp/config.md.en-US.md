---
group:
  title: Configuration file
  order: 4
---

# config.yml

```yaml
# Token authentication token
# If you bought from SpigotMC, you don’t need to fill in the Token
Token: ''

# Update checker
Update-Checker: true

# Debug mode
Debug-Mode: false

# Combat mode duration
Combat-Time: 10

# Teleport wait time
Spawn-Cool-Down: 3

# Kill to give economy
Kill-Coins: 10

# Keep death experience
Keep-Death-Exp: false

# No damage within a few seconds of entering the game (not recommended to set to 0)
No-Damage-On-Join: 3

# When hitting the void, determine the attacker within how many seconds as the killer
Void-Kill-Time: 10

# When the player is below the specified height, it is considered as death
Void-Kill-Height: -200

# Death respawn time
Death-Respawn-Time: 0

# Disable scoreboard
Disable-Scoreboard: false

# Enable save inventory
Enable-Keep-Inventory: false

# Custom open lucky block sound
# 1.8 LEVEL_UP
# 1.9+ ENTITY_PLAYER_LEVELUP
Open-Loot-Sound: ''

# Place of birth
Spawn-Loc: ''

# Database type
# SQLite or MySQL
Database: SQLite

# Data part
MySQL:
  driver: ''
  host: mysql.yistars.net
  port: 3306
  username: BingSkyPvP
  password: bhx7HNpYkxy6rLdX
  database: bingskypvp
```

## Token

The token obtained by contacting the plugin author after purchase needs to be filled in correctly for the plugin to run normally.

## Update-Checker

Players with the `SkyPvP.admin` permission will receive plugin update notifications when they enter the server.

## Debug-Mode

Debug mode, only available in test versions.Use with the help of developers.

## Combat-Time

How long to exit combat mode after a player attacks another player/is attacked by another player.

Leaving the game in combat mode will cause the player to die instantly and drop their backpack items.

## Spawn-Cool-Down

How long does a player have to wait before teleporting after using the `/spawn` command.

## Keep-Death-Exp

Whether the player keeps their experience after death.

## No-Damage-On-Join

How many seconds a player will not take damage after entering the game.This feature was originally designed to prevent players from dying from falling when teleporting from the void to the spawn point, due to Minecraft’s characteristics.Therefore, it is not recommended to set this value too small.

## Void-Kill-Time

How many seconds to determine the player who attacked him as the killer when a player dies from falling into the void.

## Void-Kill-Height

When the player is below this height, the player is judged to be dead.

## Death-Respawn-Time

When you die, you switch to spectator mode and then respawn after a specified number of seconds.

Setting this value to 0 disables this feature.

## Disable-Scoreboard

Disable the built-in scoreboard feature.Can be used to turn off the scoreboard.

## Enable-Keep-Inventory

Disable the built-in item drop feature.

## Open-Loot-Sound

The sound when opening a lucky block.

## Spawn-Loc

The coordinates of the respawn point, usually you don’t need to fill it in yourself.You can use the `/SkyPvP setSpawn` command to set it.

## Database

Database type, choose according to your needs.The default is SQLite, if you want to use MySQL, just change the value here to MySQL.

## MySQL

Currently only MySQL database is supported, just fill in normally.
