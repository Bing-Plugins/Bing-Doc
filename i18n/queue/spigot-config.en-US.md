---
group:
  title: Sub-server configuration file
  order: 3
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
After purchase, contact the plugin author to get the `token`, you need to fill in the `token` correctly in order for the plugin to work properly.

## default-main-menu
Default main menu name file name, located in the `main-gui` folder.

## default-area-select-menu
The name of the default arena menu file, located in the `area-gui` folder.

## custom-main-menu
Custom main menu use name and file name correspondence table, located at `main-gui` folder.

## custom-area-select-menu
Custom arena menu use name and file name correspondence table, located in the `area-gui` folder.

## floodgate-icon-url
The image path format that Floodgate uses when accessing icons.
