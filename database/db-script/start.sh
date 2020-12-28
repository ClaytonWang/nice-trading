sudo docker run -d -it --name db-migration --network webproxy  node:15.3.0-alpine3.10
cd database/db-script
sudo docker cp . db-migration:/
sudo docker exec -it db-migration sh
npm install
npm start
exit

sudo docker stop db-migration
sudo docker rm db-migration
