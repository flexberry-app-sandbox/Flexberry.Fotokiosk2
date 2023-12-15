docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fotokiosk2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t fotokiosk2-java/app ../../..
