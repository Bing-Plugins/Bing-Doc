---
group: 子服务器配置文件
order: 1
---

# config.yml

```yaml
token: ""

default-main-menu: main
default-area-select-menu: area

custom-main-menu: {}
custom-area-select-menu:
  HorrorFarmerLobby: lobby-gui

floodgate-icon-url: "https://demo.yistars.net/queue/{name}.png"
```

## token
购买后联系插件作者获取的 Token，需要正确填入 Token，插件才可以正常运行。

## default-main-menu
默认主菜单名称文件名称，位于 `main-gui` 文件夹。

## default-area-select-menu
默认竞技场菜单文件名称，位于 `area-gui` 文件夹。

## custom-main-menu
自定义主菜单使用名称和文件名称对应表，位于 `main-gui` 文件夹。

## custom-area-select-menu
自定义竞技场菜单使用名称和文件名称对应表，位于 `area-gui` 文件夹。

## floodgate-icon-url
Floodgate 使用图标时访问的图片路径格式。
