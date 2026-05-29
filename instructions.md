Je veux que tu modifie les informations dans la categorie robot autonome. opour chque nom de categorie donne une couleur un peu differente. Regl aussi lep roblemet du lightmode qui a la partie "contexte surlignee en sombre qui la rend peu lisible
Partie contexte :

Baptisé « Thésée », ce projet universitaire a été réalisé en équipe de quatre lors du deuxième semestre du Diplôme Universitaire en Robotique à l'IUT de Bordeaux. L'objectif était de concevoir de A à Z un robot capable de naviguer de manière autonome depuis l'une des entrées d'un labyrinthe jusqu'à sa sortie. Mené en grande autonomie sur plusieurs semaines, tout en bénéficiant du soutien ponctuel de nos professeurs en cas de besoin, ce projet a abouti à une soutenance technique accompagnée d'une démonstration fonctionnelle.

// répartition_équipe

**Équipe Mécanique :** En charge de l'intégralité de la structure, du design à la modélisation 3D, en passant par la fabrication (impression 3D et découpe laser) et l'assemblage du châssis.

**Équipe Informatique (Mon rôle) :** Responsable de l'intelligence du robot, incluant le contrôle des servomoteurs Dynamixel, le traitement des données du LiDAR, le pilotage global et la création de l'algorithme de sortie du labyrinthe.

// matériel_et_technologies

L'architecture matérielle s'articule autour d'une **Raspberry Pi** servant d'unité centrale, couplée à un **capteur LiDAR** pour l'analyse de l'environnement. La mobilité autonome est assurée par des **roues Mecanum** alimentées par une **batterie LiPo**. Le prototypage a été réalisé grâce aux équipements du fablab (**imprimante 3D** et **découpeuse laser**).

// conception_mécanique

Le défi majeur était d'évoluer de manière fluide dans un environnement très exigu (les couloirs du labyrinthe mesurant seulement 30 cm de large). Le mouvement omnidirectionnel s'est naturellement imposé. Pour minimiser l'encombrement tout en respectant les délais, le châssis a été inspiré de la plateforme open-source *Pico Mars Rover*. Nous avons également privilégié la conception de pièces pour la découpe laser, offrant un gain de temps d'usinage considérable face à l'impression 3D classique.

// conception_informatique

Notre mission logicielle consistait à déployer un environnement robuste pour anticiper les tests physiques. Cela a exigé une étude approfondie de la cinématique des roues Mecanum afin de calculer les sens de rotation exacts des servomoteurs pour chaque déplacement. En parallèle, nous avons développé un système de récupération des données LiDAR permettant au robot d'interpréter la disposition des murs, d'anticiper les obstacles et de prendre des décisions de navigation en temps réel.

// bilan_et_résultats

Bien qu'ambitieux, le projet s'est heurté à des contraintes de temps. Les délais de fabrication ayant été sous-estimés, l'équipe mécanique n'a pu livrer le châssis assez tôt pour permettre à l'équipe informatique de finaliser les tests d'intégration en conditions réelles. Néanmoins, cette expérience s'est révélée extrêmement formatrice. Elle nous a permis de maîtriser des technologies totalement nouvelles pour nous (LiDAR, cinématique Mecanum), tout en nous offrant une véritable leçon sur l'importance cruciale de la gestion du temps et de la synchronisation entre les équipes.

