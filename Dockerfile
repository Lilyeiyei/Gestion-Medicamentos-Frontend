# Paso 1: Compilar la aplicación Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Paso 2: Servir la aplicación usando Nginx
FROM nginx:alpine
# Copia los archivos compilados al directorio de Nginx
# NOTA: Asegúrate de revisar si tu carpeta dist genera 'browser'. Si no, quita '/browser'
COPY --from=build /app/dist/gestion-medicamentos-frontend/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
