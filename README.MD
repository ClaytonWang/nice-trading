## Nice Trading
----
记录交易的系统，能让自已对自已所有的交易有所回顾，吸取教训。

----

### fortune-cat-client
前端：是用ant-vue-admin第三方样式组件库，直接拿来做PC前端架子。

### fortune-cat-app
前端：uni-app框架做的mobile端

### data-dog
后端：用 egg js + mysql 存取数据。RESTFull 风格的API。


#部署方法
---
### First start Proxy

```terminal
git clone https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion.git proxy
cd proxy
sudo chmod +x start.sh
$ sudo ./start.sh
```

### Then start your app

```terminal
# use proxy network 'webproxy'
#db
cd app/database
sudo docker-compose up --build -d

#api
cd app/data-dog
sudo docker-compose up --build -d

#web
cd app/fortune-cat-client
sudo docker-compose up --build -d

```
