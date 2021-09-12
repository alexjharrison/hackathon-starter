<!-- run from project root -->

<!-- entire cluster -->

docker exec hackathon-starter_postgres_1 pg_dumpall -U postgres -O -x | gzip -9 > postgres/seed-data/hackathonstarter1.sql.gz

<!-- single database -->

docker exec hackathon-starter_postgres_1 pg_dump <db_name> -U postgres -O -x | gzip -9 > postgres/seed-data/hackathonstarter1.sql.gz

https://www.postgresql.org/docs/9.2/app-pg-dumpall.html
