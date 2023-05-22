---
group:
  title: Proxy-side configuration file
  order: 2
---

# config.yml

```yaml
token: ""

server-cache-time: 5000

server-cache-redis-time: 1000
```

## token
After purchase, contact the plugin author to get the `token`, you need to fill in the `token` correctly in order for the plugin to work properly.

## server-cache-time
Cache time after matching queue ping once, used to prevent unnecessary resource waste caused by too many requests from players in a short time.

## server-cache-redis-tim
If your proxy uses `RedisBungee`, a proxy that fetches data once will send it to other proxies as cache time.
