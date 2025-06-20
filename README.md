# FastBroc - Marketplace Open Source

## Présentation

FastBroc est une plateforme de marketplace open source développée avec Next.js et React. Cette application offre une interface utilisateur moderne et épurée, conçue pour être facilement personnalisable selon vos besoins.
![image](https://github.com/user-attachments/assets/0969c686-7ff0-4229-8f08-5ccc910e0fd7)

## Fonctionnalités

- Interface utilisateur claire et intuitive
- Système d'authentification administrateur
- Affichage de contenu dynamique
- Design responsive adapté à tous les appareils
- Architecture basée sur Next.js pour des performances optimales

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/El0-E/FastBroc.git

# Accéder au répertoire
cd FastBroc

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Technologies utilisées

- Next.js
- React
- Tailwind CSS
- TypeScript
- Shadcn UI

## Points d'amélioration

1. **Système d'authentification sécurisé** - Implémenter un système d'authentification complet avec JWT ou OAuth.
2. **Base de données** - Intégrer une base de données (MongoDB, PostgreSQL) pour stocker les informations utilisateurs et les contenus.
3. **Système de recherche** - Ajouter une fonctionnalité de recherche pour filtrer les contenus.
4. **Gestion des utilisateurs** - Développer un système complet de gestion des utilisateurs avec différents niveaux de permissions.
5. **API RESTful** - Créer une API complète pour faciliter l'intégration avec d'autres services.
6. **Tests automatisés** - Mettre en place des tests unitaires et d'intégration.
7. **Internationalisation** - Ajouter le support pour plusieurs langues.

## Points négatifs

⚠️ **Sécurité** - Les identifiants administrateur sont codés en dur. Ceci représente une faille de sécurité majeure et devrait être remplacé par un système d'authentification sécurisé utilisant une base de données et un chiffrement des mots de passe.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request pour améliorer ce projet.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
