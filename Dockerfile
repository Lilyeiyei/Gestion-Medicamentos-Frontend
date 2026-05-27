# Paso 1: Compilar la aplicación Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Paso 2: Servir con Nginx
FROM nginx:alpine

# Path corregido según nombre del proyecto en angular.json
COPY --from=build /app/dist/gestion-docentes/browser /usr/share/nginx/html

# Configuración de Nginx para Angular (maneja rutas con Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
