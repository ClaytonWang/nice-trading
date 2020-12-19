# deploy and redeploy
----
```
#deploy
git pull
cd /data-dog
sudo docker-compose up --build -d

#redeploy
git pull
cd /data-dog
sudo docker-compose stop
sudo docker-compose rm
sudo docker-compose up --build -d

```
