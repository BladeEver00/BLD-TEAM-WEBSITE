# Backend du Site Vitrine - BLD TEAM

Ce dossier contient le backend de l'application, développé avec Node.js, Express et MySQL. Il fournit une API RESTful pour gérer toutes les données du site : matchs, actualités, candidatures, médias, etc.

## ✨ Fonctionnalités

*   **API RESTful** pour les ressources (matchs, candidatures, etc.)
*   **Base de Données MySQL** avec modélisation via **Sequelize ORM**
*   **Sécurité** : `helmet`, `cors`, `rate-limiting`
*   **Gestion des secrets** via variables d'environnement (`.env`)
*   **Structure de projet scalable** (Routes, Contrôleurs, Modèles)
*   **Prêt pour l'authentification** (panel admin)

---

## 🚀 Démarrage Rapide

### Prérequis

*   [Node.js](https://nodejs.org/) (version 18.x ou supérieure)
*   Un serveur de base de données [MySQL](https://www.mysql.com/) ou [MariaDB](https://mariadb.org/) installé et en cours d'exécution.

### 1. Installation

Clonez le projet, puis naviguez dans le dossier `backend` et installez les dépendances.

```bash
# Naviguer vers le dossier du backend
cd backend

# Installer les dépendances
npm install
```

### 2. Configuration de l'environnement

1.  Créez une base de données MySQL pour le projet (ex: `bld_team_db`).
2.  Copiez le fichier d'exemple `.env.example` et renommez-le en `.env`.

    ```bash
    cp .env.example .env
    ```

3.  Modifiez le fichier `.env` avec vos informations de connexion à la base de données :

    ```env
    # Configuration du serveur
    PORT=5000

    # Configuration de la base de données MySQL
    DB_HOST=localhost
    DB_USER=votre_utilisateur_mysql
    DB_PASSWORD=votre_mot_de_passe_mysql
    DB_NAME=bld_team_db

    # Secrets (pour le futur panel admin)
    JWT_SECRET=VOTRE_SECRET_TRES_COMPLIQUE_POUR_JWT
    ```

### 3. Lancer le serveur

Une fois la configuration terminée, vous pouvez lancer le serveur de développement.

```bash
npm run dev
```

Le serveur sera accessible à l'adresse `http://localhost:5000`. Il se redémarrera automatiquement à chaque modification de fichier.

---

## 📦 Scripts Disponibles

*   `npm run dev`: Lance le serveur en mode développement avec `nodemon`.
*   `npm start`: Lance le serveur en mode production.

---

## 🌐 Endpoints de l'API (Exemples)

| Méthode | URL                      | Description                                | Accès  |
| :------ | :----------------------- | :----------------------------------------- | :----- |
| `POST`  | `/api/applications`      | Soumettre une nouvelle candidature         | Public |
| `GET`   | `/api/matches`           | Récupérer la liste de tous les matchs      | Public |
| `GET`   | `/api/media?type=video`  | Récupérer tous les médias de type "vidéo"  | Public |

*(Cette section devra être complétée au fur et à mesure du développement)*