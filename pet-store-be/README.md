# Backend pet store
docker run -p 3306:3306 --name pet_store -e MYSQL_ROOT_PASSWORD=123456789 -d mysql:latest

sudo service mysql stop
sudo service mysql start