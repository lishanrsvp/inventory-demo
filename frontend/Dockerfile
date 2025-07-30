# Stage 1: Build React app
FROM node:18 AS build
WORKDIR /app
COPY . .

RUN npm install

# Fix permission issue
RUN chmod +x ./node_modules/.bin/vite \
    && chmod +x ./node_modules/.bin/tsc \
    && chmod +x ./node_modules/@esbuild/linux-x64/bin/esbuild

RUN npm run build && ls -la /app/dist

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
