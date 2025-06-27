FROM oven/bun:1 AS build
WORKDIR /src
COPY bun.lock package.json ./
RUN bun install
COPY . .
RUN bun run build
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /src/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]