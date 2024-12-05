FROM node:latest AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY backend.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]