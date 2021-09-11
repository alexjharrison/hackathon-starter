docker exec postgres pg_dump db_name -U dev -O -x | gzip -9 > name.sql.gz
