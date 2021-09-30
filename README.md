# PA 2021 4AL - Bald Wars

## Contexte et définition du problème

Le développement d’Intelligence Artificielle est de plus en plus demandé, cependant les
formations et les exercices en permettant l’apprentissage sont peu nombreux.

Nous avons constaté ce problème et voulons lancer une solution permettant aux étudiants et
professionnels de développer leurs compétences en développant leur propre IA.

## Objectif du projet

Bald Wars est un jeu de programmation d'IA dans lequel on doit créer le guerrier le plus puissant et vaincre ses ennemis.

L’Intelligence Artificielle devra être développée depuis le site web, dans un langage de
programmation, de préférence JavaScript.

## Description fonctionnelle du besoin

### Matchmaking

Le choix de l’adversaire se fera par rapport à son ranking (système d’ELO).

L’ELO est mis à jour à la fin de chaque partie en fonction du statut du personnage du joueur (mort, vivant ou match nul).

### Déroulement du jeu

Le jeu commence par le placement des personnages des deux joueurs sur une carte quadrillée.

Une fois les personnages placés, à tour de rôle leur IA sera exécutée pour déterminer la ou les actions à réaliser. Les personnages auront une limite d’actions réalisables.

Le jeu se termine lorsque l’un des personnages meurt. Le joueur gagnant est le joueur ayant
son personnage encore en vie à la fin du jeu. Dans le cas de mort simultanée, le match est
considéré comme nul et le classement des joueurs reste inchangé.

### Actions de base

- Déplacements sur la carte
- Attaque de mêlée
- Attaque à distance
- Défense (réduit un peu les dégâts)

### Actions utilisateur

- Possibilité d’écrire un programme qui permet d’interagir avec son personnage (un personnage est défini par un programme)
- Gérer ses personnages
- Lancement d’une partie avec l’un de ses personnages
- Poster son personnage sur un dépôt public
- Télécharger/Commenter/Noter les personnages d’autres utilisateurs
- Visualisation du ranking des autres utilisateurs

## Délais

La date de rendu du projet est le 15/10/2021.
