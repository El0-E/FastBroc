FROM node:20-alpine AS base

# Installation des dépendances système
RUN apk add --no-cache libc6-compat

# Définition du répertoire de travail
WORKDIR /app

# Première étape : installation des dépendances uniquement
FROM base AS deps
WORKDIR /app

# Copie des fichiers de configuration
COPY package.json ./

# Installation des dépendances avec l'option legacy-peer-deps
RUN npm install --legacy-peer-deps

# Deuxième étape : construction de l'application
FROM base AS builder
WORKDIR /app

# Copie des dépendances depuis l'étape précédente
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build de l'application avec output standalone activé dans next.config.js
RUN npm run build

# Étape de production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copie des fichiers nécessaires depuis l'étape de build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copie du dossier standalone généré par Next.js
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Exposition du port
EXPOSE 3000

ENV PORT 3000

# Commande de démarrage
CMD ["node", "server.js"]
