DC=docker-compose
HCLI=$(DC) exec hasura hasura-cli


migration: 
	@$(HCLI) migrate create init --from-server
	sudo chown -R `id -u`:`id -g` ./hasura

export:
	@$(HCLI) metadata export
	@$(DC) exec vue npm run generate
	mv vue/api.ts express/src/api.ts
	# sudo chown -R `id -u`:`id -g` ./hasura

db-reset:
	@$(DC) down
	@$(DC) -f docker-compose.prod.yml down
	docker volume rm hackathon-starter_db_data
	@$(DC) up -d

rebuild:
	@$(DC) down
	@$(DC) -f docker-compose.prod.yml down
	docker volume rm hackathon-starter_db_data
	@$(DC) build --no-cache
	@$(DC) up -d

reboot:
	@$(DC) down
	@$(DC) -f docker-compose.prod.yml down
	@$(DC) build 
	@$(DC) up -d 

rebuild-prod:
	@$(DC) -f docker-compose.prod.yml down
	@$(DC) down
	docker volume create --name=caddy_data
	@$(DC) -f docker-compose.prod.yml build --no-cache
	@$(DC) -f docker-compose.prod.yml up -d

reboot-prod:
	@$(DC) down
	@$(DC) -f docker-compose.prod.yml down
	@$(DC) -f docker-compose.prod.yml build 
	@$(DC) -f docker-compose.prod.yml up -d

