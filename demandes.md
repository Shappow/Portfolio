
Rempli le projet "bras robot telopere" par ces donnees

// contexte

Le laboratoire Tanaka au Japon mène des recherches à la croisée de la robotique et de l'intelligence artificielle. Dans le cadre du projet HAMSTER, l'objectif est d'implémenter un système d'apprentissage par imitation (*Imitation Learning*) sur un bras robotique **WidowX AI**. Initialement, les démonstrations étaient enregistrées en manipulant directement le robot à la main, ce qui polluait le champ de vision des caméras et réduisait la qualité des jeux de données d'entraînement. Pour résoudre ce problème, on m'a confié la mise en place d'un système de **téléopération**. Le principe est d'utiliser un bras maître (pilote) possédant la même cinématique (6 axes) pour contrôler le bras esclave (WidowX AI) à distance, garantissant ainsi des enregistrements vidéo propres, sans présence humaine à l'image.

// base_du_projet

Pour mener à bien cette mission, je me suis appuyé sur l'architecture du projet open-source **GELLO**. Ce framework a été spécifiquement pensé pour simplifier l'intégration logicielle et matérielle de systèmes de téléopération entre deux bras robotiques. L'avantage majeur de GELLO réside dans les configurations de bras de référence déjà implémentées, fournissant une excellente base de départ qui a grandement accéléré le lancement du projet.

// défis_à_accomplir

Bien que GELLO propose plusieurs modèles par défaut, le WidowX AI ne faisait pas partie des robots préconfigurés. Le principal défi a donc consisté à intégrer une architecture matérielle sur-mesure dans l'écosystème. Cela impliquait la modélisation complète d'un bras pilote compatible, ainsi que la configuration de la bibliothèque de contrôle logicielle pour assurer une liaison parfaite avec le bras suiveur.

// solutions_trouvées

Côté mécanique, j'ai identifié sur Onshape un modèle 3D possédant une cinématique très proche de celle du WidowX AI, que j'ai ensuite entièrement redimensionné pour l'adapter à notre échelle. Côté logiciel, l'intégration nécessitait de **coder une liste de méthodes spécifiques** permettant au framework GELLO de communiquer avec notre robot. Heureusement, le WidowX AI dispose nativement de **fonctions de haut niveau très intuitives**, facilitant grandement son positionnement dans l'espace. Il m'a donc suffi d'étendre la classe Robot de GELLO en faisant le pont avec ces commandes préexistantes. Le framework se chargeant de lire les positions du bras pilote, mon travail s'est concentré sur le calcul et la configuration des offsets (décalages) afin de garantir une synchronisation fluide et précise entre les deux bras.

// limites_rencontrées

Lors de l'inventaire matériel du laboratoire, j'ai constaté que certains servomoteurs **Dynamixel** prévus dans ma modélisation 3D étaient indisponibles à l'achat. Nous disposions de modèles alternatifs capables de remplir la même fonction, mais leur encombrement était nettement supérieur. Pour ne pas fausser la cinématique indispensable à la téléopération, j'ai dû revoir et modifier en profondeur la conception 3D du châssis afin d'y intégrer ces nouveaux moteurs sans altérer la liberté de mouvement du bras.

// état_actuel_et_conclusion

Le projet est aujourd'hui à un stade de développement très avancé. Il me reste à finaliser de légers ajustements dimensionnels sur la structure mécanique. Une fois cette étape validée, je pourrai me concentrer sur l'étalonnage définitif des offsets logiciels, avant de procéder aux tests finaux de téléopération en conditions réelles sur le robot WidowX AI.