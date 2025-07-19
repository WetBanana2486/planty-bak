# Makefile for db setup and data seeding
# You can choose to run this or the db.sh bash script

# Up the container with basic PostgreSQL setup
up:
	docker start artisans_db || docker run --name artisans_db \
	  -e POSTGRES_USER=postgres \
	  -e POSTGRES_PASSWORD=postgres \
	  -e POSTGRES_DB=artisans_db \
	  -p 5432:5432 \
	  -d postgres:latest
# Generate Prisma client and push the schema to the database
prisma:
	npx prisma generate
	npx prisma db push
# Seed the database with initial data, ensure you have a seed command defined in package.json
# This also required a seed script in prisma/seed.ts
seed:
	npx prisma db seed

deploy: up prisma seed
