FROM node:18

WORKDIR /app

COPY . .

RUN npm install

# Tambahkan ini untuk memastikan nest bisa dieksekusi
RUN npm install -g @nestjs/cli

RUN npm run build

CMD ["node", "dist/main"]

