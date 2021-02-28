# data-dog

### 本地创建mysql
``` sh

docker run --name mysql -p 3306:3306 -e ALLOW_EMPTY_PASSWORD=yes -e MYSQL_USER=nice_trading -e MYSQL_PASSWORD=Password1 -e MYSQL_ROOT_USER=root -e MYSQL_ROOT_PASSWORD=Password1 -e MYSQL_DATABASE=my_trading -e MYSQL_AUTHENTICATION_PLUGIN=mysql_native_password bitnami/mysql:5.7

```

### 手动备份一次
```sh
  sudo docker run --network webproxy \
    -v '/home/azureuser/nice-trading/database/data/backup:/backup' \
    -e DBHOST=trading-db \
    -e DBNAMES=my_trading \
    -e USERNAME=root \
    -e PASSWORD=Password1 \
    database_mysql-auto-backup

```

### sequelize
``` javascript
//安装 sequelize-cli
npm install --save-dev sequelize-cli
//在 egg 项目中，我们希望将所有数据库 Migrations 相关的内容都放在 database 目录下，所以我们在项目根目录下新建一个 .sequelizerc 配置文件
'use strict';

const path = require('path');

module.exports = {
  config: path.join(__dirname, 'config.json'),
  'migrations-path': path.join(__dirname, 'migrations'),
  'seeders-path': path.join(__dirname, 'seeders'),
  'models-path': path.join(__dirname, 'model'),
};

//初始化 Migrations 配置文件和目录
npx sequelize init:config
npx sequelize init:migrations


//创建表
npx sequelize migration:generate --name=init-users


//执行 migrate 进行数据库变更
// 升级数据库
npx sequelize db:migrate
// 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
// npx sequelize db:migrate:undo
// 可以通过 `db:migrate:undo:all` 回退到初始状态
// npx sequelize db:migrate:undo:all
```

https://www.bookstack.cn/read/sequelize-orm-v6-zh/f66d0923bcbe34a1.md?wd=%E9%AB%98%E7%BA%A7
