#!/bin/bash

## Start PostgreSQL Container
# Check if a PostgreSQL container named "artisans_db" exists. If so, remove it and start a new one.
echo "🔧 Checking for existing container..."
if [ ! "$(docker ps -q -f name=artisans_db)" ]; then
  if [ "$(docker ps -aq -f status=exited -f name=artisans_db)" ]; then
    echo "🧹 Removing exited container..."
    docker rm artisans_db
  fi
  # This setting is same as the Dockerfile
  echo "🚀 Starting new PostgreSQL container..."
  docker run --name artisans_db \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_DB=artisans_db \
    -p 5432:5432 \
    -d postgres:latest
else
  echo "✅ Container already running."
fi

# Prompt user to wait for PostgreSQL to be ready
echo "⏳ Waiting for PostgreSQL to be ready..."
sleep 5

# Prisma setup
echo "📦 Running Prisma setup..."
npx prisma generate
npx prisma db push
# Seeding the database with initial data
echo "🌱 Seeding the database..."
npx prisma db seed


# Check if the database container is created successfully
if [ $? -ne 0 ]; then
  echo "❌ Failed to set up the database. Please check the logs."
  exit 1
fi
echo "🎉 Deployment complete!"


## Deployment
# chmod +x db.sh
# ./db.sh
