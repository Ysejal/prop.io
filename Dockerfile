# Utilisez l'image de base Node.js
FROM node:18

# Créez un répertoire de travail dans l'image
WORKDIR /app

# Installez Git
RUN apt-get update && apt-get install -y git

# Clonez le dépôt Git contenant votre application
RUN git clone https://github.com/Ysejal/prop.io.git .

# Installez les dépendances de l'application
RUN npm install

# Exposez le port sur lequel votre application écoute
EXPOSE 3000

# Démarrez l'application
CMD [ "npm", "start" ]
