#How to use it
---
### First start Proxy

```terminal
cd proxy
$ ./start.sh
```

### Then start your app

```terminal
#db
cd app/database
sudo docker-compose up -d

#api
cd app/data-dog
sudo docker-compose up -d

#web
cd app/trading-cat
sudo docker-compose up -d

```
