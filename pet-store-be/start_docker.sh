docker build -f Dockerfile . -t fastapi
docker run -d -t --publish 8000:80 fastapi 