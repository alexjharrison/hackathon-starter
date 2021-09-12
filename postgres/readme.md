<!-- run from project root -->

docker exec hackathon-starter_postgres_1 pg_dumpall -U postgres -O -x | gzip -9 > postgres/seed-data/hackathonstarter.sql.gz
