# Stage 1: Build React app
FROM node:18 AS build
WORKDIR /app
COPY . .

RUN npm install

# Fix permission for binaries
RUN chmod +x ./node_modules/.bin/* \
    && chmod +x ./node_modules/@esbuild/linux-x64/bin/esbuild

RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
