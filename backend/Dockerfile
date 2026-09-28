FROM node:20-slim

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

COPY package*.json ./
RUN npm install

COPY . .

# Build the app
RUN npm run build

EXPOSE 3000

CMD ["npx", "ts-node", "src/main.ts"]
