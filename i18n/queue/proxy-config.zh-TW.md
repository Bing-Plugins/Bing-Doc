---
group:
  title: 代理端配置文件
  order: 2
---

# config.yml

```yaml
token: ""

server-cache-time: 5000

server-cache-redis-time: 1000
```

## token
购买后联系插件作者获取的 `token` ，需要正确填入 `token` ，插件才可以正常运行。

## server-cache-time
匹配队列 ping 一次之后缓存时间，用于防止玩家短时间内请求过多导致不必要的资源浪费。

## server-cache-redis-tim
如果你的代理端使用了 `RedisBungee` ，某个代理端获取到一次数据后会发送给其他的代理端作为缓存的时间。
