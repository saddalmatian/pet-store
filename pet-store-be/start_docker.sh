docker run --name pet_store_sql -e MYSQL_ROOT_PASSWORD=petstore#123A -d mysql:latest
docker build -t fastapi -f Dockerfile .
docker run -d -t -p 8000:8000 fastapi