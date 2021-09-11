# POSTGRES DOCKERFILE
FROM postgres:12-alpine
ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
COPY hackathonstarter.sql.gz /docker-entrypoint-initdb.d/