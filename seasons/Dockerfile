# stage1 - the build process
FROM node:7.10 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run-script build

# stage2 - the production env
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
