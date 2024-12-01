# Usa Node.js como base
FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Expone el puerto por defecto que usa Angular CLI
EXPOSE 4200

# Comando para iniciar Angular CLI en modo desarrollo
CMD ["npm", "start"]
