export interface ProjectSection {
  title: string;
  body?: string;
  items?: string[];
  teams?: { name: string; role: string }[];
  image?: string;
  images?: string[];
  imageCaptions?: string[];
  docs?: { label: string; href: string }[];
}

export interface ProjectDetails {
  context?: string;
  objectives?: string[];
  technical?: string[];
  results?: string[];
  sections?: ProjectSection[];
  docs?: { label: string; href: string }[];
  links?: { label: string; href: string }[];
}

export interface Project {
  id: string;
  title: string;
  type: 'perso' | 'univ' | 'pro';
  description: string;
  stack: string[];
  status: 'stable' | 'wip' | 'archived';
  featured: boolean;
  github?: string;
  demo?: string;
  image?: string;
  details?: ProjectDetails;
}

export const projects: Project[] = [
  {
    id: 'proj-04',
    title: 'Réplique du Pip-Boy de Fallout',
    type: 'perso',
    description:
      'Conception d\'un système embarqué sur Raspberry Pi 5 intégrant électronique, interface Python et composants matériels (écran, radio, audio, potentiomètres) pour un prototype fonctionnel.',
    stack: ['Raspberry Pi 5', 'Python', 'Électronique', 'PCB', 'Modélisation 3D', 'Impression 3D'],
    status: 'wip',
    featured: true,
    image: '/pip_boy.jpg',
    details: {
      context: 'Ce projet personnel, actuellement au stade de prototype, est toujours en cours de développement. Mon objectif est de concevoir une réplique fonctionnelle du célèbre Pip-Boy — l\'emblématique terminal de poignet issu de la licence Fallout (Bethesda Softworks) — pilotée par une Raspberry Pi. L\'ambition est de développer une interface graphique fidèle à l\'originale et d\'y intégrer un véritable module de réception radio. Pour renforcer l\'immersion, la navigation à travers les menus s\'effectue via des commandes physiques volontairement rétro, à l\'aide de boutons et de potentiomètres.',
      sections: [
        {
          title: 'objectifs_et_motivations',
          body: 'Au-delà du défi amusant de recréer l\'un de mes objets de jeu vidéo favoris, ce projet constitue un excellent terrain de jeu pour consolider mes compétences de manière transversale, que ce soit en électronique, en modélisation 3D ou en programmation.',
          items: [
            'Interface graphique fidèle à l\'originale du Pip-Boy',
            'Réception radio réelle via un module RTL-SDR',
            'Navigation physique rétro — boutons et potentiomètres',
            'Enveloppe extérieure modélisée et imprimée en 3D',
          ],
        },
        {
          title: 'technologies_utilisées',
          items: [
            'Raspberry Pi 5 — cœur du prototype, unité centrale de traitement',
            'Petit écran dédié — affichage de l\'interface graphique',
            'Potentiomètres et boutons — interactions physiques rétro',
            'Module radio RTL-SDR — captation de véritables fréquences radio',
            'Carte de gestion audio + haut-parleurs — immersion sonore',
            'Modélisation et impression 3D — enveloppe extérieure et structure',
          ],
        },
      ],
    },
  },
  {
    id: 'proj-02',
    title: 'Robot autonome Thésée — Exploration de labyrinthe',
    type: 'univ',
    description:
      'Conception globale (mécanique, électronique, logiciel) d\'un robot holonome. Navigation et évitement d\'obstacles sur Raspberry Pi via un capteur LIDAR. L\'objectif du robot est qu\'il soit capable de sortir par lui-même d\'un labyrinthe.',
    stack: ['Raspberry Pi', 'Python', 'C++', 'LiDAR'],
    status: 'stable',
    featured: true,
    image: '/Robot Autonome.png',
    details: {
      context: 'Baptisé « Thésée », ce projet universitaire a été réalisé en équipe de quatre lors du deuxième semestre du Diplôme Universitaire en Robotique à l\'IUT de Bordeaux. L\'objectif était de concevoir de A à Z un robot capable de naviguer de manière autonome depuis l\'une des entrées d\'un labyrinthe jusqu\'à sa sortie. Mené en grande autonomie sur plusieurs semaines, tout en bénéficiant du soutien ponctuel de nos professeurs en cas de besoin, ce projet a abouti à une soutenance technique accompagnée d\'une démonstration fonctionnelle.',
      sections: [
        {
          title: 'répartition_équipe',
          teams: [
            {
              name: 'Équipe Mécanique',
              role: 'En charge de l\'intégralité de la structure : du design à la modélisation 3D, en passant par la fabrication (impression 3D et découpe laser) et l\'assemblage du châssis.',
            },
            {
              name: 'Équipe Informatique — Mon rôle',
              role: 'Responsable de l\'intelligence du robot : contrôle des servomoteurs Dynamixel, traitement des données du LiDAR, pilotage global et création de l\'algorithme de sortie du labyrinthe.',
            },
          ],
        },
        {
          title: 'matériel_et_technologies',
          items: [
            'Raspberry Pi — unité centrale de traitement',
            'Capteur LiDAR — analyse de l\'environnement et cartographie des murs',
            'Roues Mecanum — mobilité omnidirectionnelle dans les espaces exigus',
            'Batterie LiPo — alimentation embarquée autonome',
            'Fablab IUT — imprimante 3D et découpeuse laser pour le prototypage',
          ],
        },
        {
          title: 'conception_mécanique',
          body: 'Le défi majeur était d\'évoluer de manière fluide dans un environnement très exigu (les couloirs du labyrinthe mesurant seulement 30 cm de large). Le mouvement omnidirectionnel s\'est naturellement imposé. Pour minimiser l\'encombrement tout en respectant les délais, le châssis a été inspiré de la plateforme open-source Pico Mars Rover.',
          items: [
            'Pièces conçues prioritairement pour la découpe laser : gain de temps d\'usinage considérable face à l\'impression 3D classique',
          ],
        },
        {
          title: 'conception_informatique',
          body: 'Notre mission logicielle consistait à déployer un environnement robuste pour anticiper les tests physiques. Cela a exigé une étude approfondie de la cinématique des roues Mecanum afin de calculer les sens de rotation exacts des servomoteurs pour chaque déplacement. En parallèle, nous avons développé un système de récupération des données LiDAR permettant au robot d\'interpréter la disposition des murs, d\'anticiper les obstacles et de prendre des décisions de navigation en temps réel.',
        },
        {
          title: 'bilan_et_résultats',
          body: 'Bien qu\'ambitieux, le projet s\'est heurté à des contraintes de temps. Les délais de fabrication ayant été sous-estimés, l\'équipe mécanique n\'a pu livrer le châssis assez tôt pour permettre à l\'équipe informatique de finaliser les tests d\'intégration en conditions réelles. L\'équipe informatique a également rencontré des problèmes de surchauffe sur la Raspberry Pi, provoquant des redémarrages intempestifs qui ont ralenti le développement. Néanmoins, cette expérience s\'est révélée extrêmement formatrice.',
          items: [
            'Maîtrise de technologies nouvelles : LiDAR et cinématique des roues Mecanum',
            'Leçon sur la gestion du temps et la synchronisation entre équipes pluridisciplinaires',
            'Problème de surchauffe Raspberry Pi identifié — piste d\'amélioration pour un futur prototype',
          ],
        },
      ],
      docs: [
        { label: 'Documentation technique (PDF)', href: '/Le robot THESEE.pdf' },
      ],
    },
  },
  {
    id: 'proj-03',
    title: 'Robot Sumo',
    type: 'univ',
    description:
      'Création complète d\'un shield électronique sur mesure (KiCad), dimensionnement de l\'alimentation, interfaçage capteurs/moteurs et programmation embarquée des stratégies de combat. L\'objectif est d\'avoir un robot capable de pousser son adversaire hors du ring sans aucune intervention humaine.',
    stack: ['KiCad', 'C/C++', 'Arduino', 'PCB Design'],
    status: 'stable',
    featured: false,
    image: '/Robot Sumo.png',
    details: {
      context: 'Réalisé dans le cadre des SAE (Situations d\'Apprentissage et d\'Évaluation) du troisième semestre, ce projet consistait à concevoir et fabriquer un robot sumo qui doit par lui-même détecter son adversaire et le pousser hors d\'un ring circulaire noir à liseré blanc, tout en respectant le cahier des charges fourni. Au-delà de la réalisation technique, le défi incluait la production complète de la documentation associée (conception, fabrication et validation). Pour ce projet, nous avons réalisé un shield pour une carte électronique Arduino.',
      sections: [
        {
          title: 'organisation_du_projet',
          body: 'Ce projet a été mené au sein d\'une équipe de cinq personnes. Afin d\'optimiser notre efficacité, le travail a été divisé en quatre pôles d\'expertise : Énergie, Traitement, Action et Acquisition. J\'ai personnellement pris en charge le pôle Énergie (gestion de l\'alimentation du robot) ainsi que la partie Traitement (gestion des mouvements et traitement des données issues des capteurs).\n\nNous avons adopté une démarche en cycle en V : phase de conception (préliminaire et détaillée), phase de fabrication, puis phase de tests et d\'ajustements. Notre robot devait respecter des dimensions réglementaires maximales, une gestion précise de la sensibilité lumineuse, et des comportements autonomes spécifiques (ne pas sortir du ring par lui-même, foncer vers son adversaire).',
          image: '/Archi fonctionnelle.png',
          docs: [
            { label: 'Cahier des Charges (CDC)', href: '/Robot Sumo_CDC.pdf' },
          ],
        },
        {
          title: 'phase_de_conception_préliminaire',
          body: 'Cette première étape a été consacrée à la sélection des composants électroniques capables de répondre aux exigences du cahier des charges, ainsi qu\'à la préparation de l\'architecture logicielle de base.',
        },
        {
          title: 'phase_de_conception_détaillée',
          body: 'Le travail s\'est spécialisé selon les différents pôles :',
          items: [
            'Pôle Action : dimensionnement du pont en H pour la motorisation, développement des fonctions de contrôle, schéma électrique sous KiCad',
            'Pôle Acquisition : intégration et calibration des capteurs, création du schéma électrique dédié sous KiCad',
            'Pôle Énergie et Traitement (Mon rôle) : conception du système de séparation de l\'alimentation entre la partie puissance (moteurs) et la logique (Arduino Uno)',
          ],
          docs: [
            { label: 'Dossier de Conception (DDC)', href: '/Robot Sumo_DDC_EQ22.pdf' },
          ],
        },
        {
          title: 'centralisation_et_routage',
          body: 'À l\'issue de la répartition technique, j\'ai personnellement centralisé l\'ensemble des travaux en fusionnant les différents modules réalisés par mes coéquipiers avec les miens. J\'ai ainsi conçu le schéma électrique global et réalisé le routage complet de la carte. Chaque pôle a ensuite mené une série de tests théoriques pour valider la conformité de ses sous-systèmes.',
          images: ['/Schema Robot Sumo.png', '/Robot sumo 3D.png'],
        },
        {
          title: 'phase_de_fabrication',
          body: 'Durant cette phase, nous avons commencé par rédiger un dossier de fabrication complet. En nous appuyant sur les plans et le routage produits lors de la conception, nous avons suivi un protocole rigoureux pour fabriquer et assembler notre propre carte électronique, en utilisant des composants montés en surface (CMS / SMD).',
        },
        {
          title: 'phase_de_vérification',
          body: 'Cette étape cruciale nous a permis de confronter notre prototype aux exigences attendues. Nous avons vérifié l\'autonomie du robot par des mesures de consommation de courant, éprouvé sa logique de comportement en plaçant des obstacles face à lui, et testé la fiabilité de ses capteurs de ligne via des tests de luminosité (en saturant le sol de lumière avec des lampes torches pour simuler des conditions extrêmes).',
          docs: [
            { label: 'Dossier de Validation (DDV)', href: '/Robot Sumo_DDV.pdf' },
          ],
        },
        {
          title: 'résultat_final',
          body: 'Le projet s\'est conclu sur un bilan en demi-teinte. Bien que la majorité des fonctionnalités électroniques et logicielles aient été opérationnelles, le robot peinait parfois à détecter son adversaire et rencontrait des difficultés à rester dans les limites du ring. Un dépassement des dimensions réglementaires maximales a malheureusement entraîné sa disqualification pour la compétition officielle. Malgré cela, les compétences acquises en conception de cartes électroniques, en routage et en travail d\'équipe restent une véritable réussite.',
        },
      ],
      docs: [
        { label: 'Cahier des Charges (CDC)', href: '/Robot Sumo_CDC.pdf' },
        { label: 'Dossier de Conception (DDC)', href: '/Robot Sumo_DDC_EQ22.pdf' },
        { label: 'Dossier de Validation (DDV)', href: '/Robot Sumo_DDV.pdf' },
      ],
    },
  },
  {
    id: 'proj-05',
    title: 'HAMSTER — IA VLM de prédiction de trajectoire',
    type: 'pro',
    description:
      'Implémentation du projet HAMSTER, utilisant un VLM (Visual Language Model) pour tracer une trajectoire sur une image selon le texte renseigné par l\'utilisateur. Mise en place d\'outils facilitant l\'utilisation du modèle via des services d\'hébergement spécialisés pour l\'IA.',
    stack: ['Python', 'IA / VLM', 'RunPod', 'Linux', 'Git'],
    status: 'stable',
    featured: true,
    image: '/HAMSTER.png',
    details: {
      context: 'Stage R&D au Tanaka Lab (Japon). HAMSTER est un framework de machine learning hiérarchique pour la manipulation robotique utilisant des données off-domain (vidéos libres, simulations). À partir d\'une image et d\'une requête textuelle, le modèle trace une trajectoire à adopter pour réaliser l\'action demandée, servant de représentation intermédiaire pour guider le bras robotique.',
      objectives: [
        'Utiliser la trajectoire générée par HAMSTER pour faciliter la reconnaissance d\'image de l\'IA contrôlant le bras robotique',
        'Réduire le temps de traitement des images : plus l\'image est complexe, plus le temps de réponse augmente — problème critique en robotique où la latence est primordiale',
        'Déployer le modèle sur des infrastructures adaptées à ses besoins en ressources',
        'Développer des outils facilitant l\'utilisation du modèle pour l\'équipe de recherche',
      ],
      sections: [
        {
          title: 'contraintes_techniques',
          body: 'HAMSTER repose sur un VLM (LLaVA-1.5-13B) comptant environ 13 milliards de paramètres. Ce volume rend l\'inférence impossible sur la majorité des machines classiques et impose des solutions d\'infrastructure dédiées.',
        },
        {
          title: 'solutions_d\'infrastructure',
          teams: [
            {
              name: 'DGX Spark (laboratoire)',
              role: 'Station de calcul IA personnelle NVIDIA, largement capable de faire tourner HAMSTER. Disponible uniquement sur site et parfois réservée pour l\'entraînement d\'autres modèles.',
            },
            {
              name: 'RunPod (cloud)',
              role: 'Location de serveurs GPU spécialisés IA, accessibles depuis n\'importe où. Solution retenue pour les sessions hors laboratoire, malgré un coût d\'utilisation et des dépendances à réinstaller lors des changements de pod.',
            },
          ],
        },
        {
          title: 'mon_travail',
          body: 'J\'ai développé un script forkant le projet HAMSTER pour automatiser l\'intégralité de la configuration sous RunPod. Ce travail a nécessité de nombreux tests et corrections, de nombreuses librairies ne s\'installant pas correctement dans cet environnement.',
          items: [
            'Fork du projet HAMSTER avec script de configuration automatique pour RunPod',
            'Identification et correction des conflits de dépendances librairies',
            'Rédaction d\'un dépôt GitHub documentant la procédure d\'installation pas à pas',
          ],
        },
      ],
      results: [
        'Déploiement de HAMSTER sur RunPod fonctionnel et stable',
        'Script d\'installation automatisé : configuration complète en une seule commande',
        'Dépôt GitHub documenté, réutilisable par l\'ensemble de l\'équipe de recherche',
      ],
      docs: [
        { label: 'Paper HAMSTER (PDF)', href: '/HAMSTER paper.pdf' },
      ],
      links: [
        { label: 'Site officiel du projet', href: 'https://hamster-robot.github.io/' },
      ],
    },
  },
  {
    id: 'proj-06',
    title: 'Antenne radio pour la localisation de balises — Radiogoniométrie',
    type: 'univ',
    description:
      'Conception électronique et mécanique d\'une antenne portative pour la détection de balises parsemées dans le campus. Dimensionnement de l\'antenne, adaptation de l\'impédance et analyse du fonctionnement des signaux radio.',
    stack: ['Radiofréquence', 'Hyperfréquence', 'Python', 'Gradio', 'MMANA-GAL'],
    status: 'stable',
    featured: false,
    image: '/Antenne.jpg',
    details: {
      context: 'Réalisé dans le cadre des SAE (Situations d\'Apprentissage et d\'Évaluation) du quatrième semestre, ce projet consistait à concevoir et fabriquer une antenne fonctionnelle dans le strict respect d\'un cahier des charges. Au-delà de la réalisation technique matérielle, le défi incluait la production complète de la documentation associée (conception, fabrication et validation). L\'aboutissement de ce travail s\'est concrétisé par une mise en pratique sur le terrain : la participation à une chasse aux balises dispersées sur l\'ensemble du campus universitaire.',
      sections: [
        {
          title: 'organisation_du_projet',
          body: 'Plus condensé que nos autres projets de SAE, celui-ci a été mené en binôme dans un délai restreint. Pour nous organiser, nous avons suivi un planning de projet rigoureux. Pour garantir la rigueur de notre démarche, nous avons opté pour une méthodologie en cycle en V : une phase de conception (préliminaire et détaillée), une phase de fabrication, et une phase de tests et d\'ajustements, chaque jalon étant validé par une documentation spécifique.\n\nNotre travail devait répondre à un cahier des charges strict : plage de fréquence de 144 MHz (± 2 MHz), budget maximum de 50 € HT, et utilisation exclusive de l\'architecture d\'antenne HB9CV.',
          image: '/cycle en V Antenne.png',
          docs: [
            { label: 'Planning de Projet (PDP)', href: '/Antenne PDP v1-2.xlsx' },
            { label: 'Cahier des Charges (CDC)', href: '/Antenne CDC v1-4.pdf' },
          ],
        },
        {
          title: 'phase_de_conception',
          body: 'Conception préliminaire : cette étape a été consacrée à la recherche de solutions techniques viables respectant notre cahier des charges. Nous avons procédé à une analyse comparative des différents matériaux envisageables en évaluant plusieurs critères clés :',
          items: [
            'La conductivité électrique',
            'Les propriétés mécaniques (flexibilité, mémoire de forme)',
            'L\'impact sur le coût global pour respecter notre budget',
          ],
          docs: [
            { label: 'Dossier de Conception (DDC)', href: '/Antenne DDC v1-4.pdf' },
          ],
        },
        {
          title: 'phase_de_conception_détaillée',
          body: 'Lors de cette phase, nous avons réalisé l\'ensemble du dimensionnement de l\'antenne en nous appuyant sur des outils de modélisation :',
          items: [
            'Utilisation du logiciel MMANA-GAL pour calculer précisément la longueur des brins et optimiser la réception sur la fréquence cible',
            'Dimensionnement des composants passifs pour garantir une parfaite adaptation d\'impédance à 50 Ω',
          ],
        },
        {
          title: 'phase_de_fabrication',
          body: 'Afin de garantir un taux de réussite élevé, les matériaux et la forme globale de l\'antenne ont été standardisés pour tous les binômes. En revanche, les dimensions exactes dépendaient de nos calculs théoriques. Nous avons procédé à l\'assemblage et au montage en suivant rigoureusement les instructions dictées par nos propres documents de conception.',
        },
        {
          title: 'phase_de_vérification',
          body: 'Cette étape s\'est révélée être la plus cruciale du projet, la théorie se heurtant inévitablement aux contraintes physiques. Nous avons mené une série de tests rigoureux pour valider le bon fonctionnement de l\'antenne sur le terrain et l\'ajuster. C\'est également durant cette phase que nous avons programmé l\'application sur tablette chargée d\'interpréter les signaux captés par notre antenne.',
          docs: [
            { label: 'Dossier de Validation (DDV)', href: '/Antenne DDV v1-4.pdf' },
          ],
        },
        {
          title: 'résultat_final',
          body: 'Le projet s\'est conclu de manière très positive. Malgré quelques défis techniques inhérents au travail sur le terrain, nous avons participé à la chasse aux balises et réussi à en détecter plusieurs à travers le campus. Au-delà de l\'exercice, cette expérience m\'a apporté de solides connaissances pratiques et théoriques dans le domaine de la radiofréquence et de la conception d\'antennes.',
        },
      ],
      docs: [
        { label: 'Cahier des Charges (CDC)', href: '/Antenne CDC v1-4.pdf' },
        { label: 'Dossier de Conception (DDC)', href: '/Antenne DDC v1-4.pdf' },
        { label: 'Dossier de Validation (DDV)', href: '/Antenne DDV v1-4.pdf' },
      ],
    },
  },
  {
    id: 'proj-01',
    title: 'Bras robotique pour la téléopération',
    type: 'pro',
    description:
      'Création du code et de la modélisation 3D d\'un bras robotique pilote pour téléopérer un bras robotique WidowX AI. L\'objectif est d\'améliorer la qualité des enregistrements d\'apprentissage par imitation en supprimant l\'apparition des bras de l\'opérateur sur la vidéo.',
    stack: ['Modélisation 3D', 'Onshape', 'Python', 'Impression 3D', 'Linux'],
    status: 'wip',
    featured: true,
    image: '/Real_robot.jpg',
    details: {
      context: 'Stage R&D au Tanaka Lab (Japon). Dans le cadre du projet HAMSTER, l\'objectif est d\'implémenter un système d\'apprentissage par imitation (Imitation Learning) sur un bras robotique WidowX AI. Pour résoudre le problème de pollution visuelle lors des enregistrements, on m\'a confié la mise en place d\'un système de téléopération : un bras maître (pilote) à 6 axes contrôle le bras esclave à distance, garantissant des enregistrements vidéo propres, sans présence humaine à l\'image.',
      sections: [
        {
          title: 'base_du_projet',
          body: 'Pour mener à bien cette mission, je me suis appuyé sur l\'architecture du projet open-source GELLO. Ce framework a été spécifiquement pensé pour simplifier l\'intégration logicielle et matérielle de systèmes de téléopération entre deux bras robotiques. L\'avantage majeur de GELLO réside dans les configurations de bras de référence déjà implémentées, fournissant une excellente base de départ qui a grandement accéléré le lancement du projet.',
          items: [
            'Bras maître (pilote) — 6 axes, même cinématique que le bras esclave',
            'Bras esclave — WidowX AI de Trossen Robotics',
            'Framework GELLO — architecture logicielle et matérielle de référence',
          ],
        },
        {
          title: 'défis_à_accomplir',
          body: 'Bien que GELLO propose plusieurs modèles par défaut, le WidowX AI ne faisait pas partie des robots préconfigurés. Le principal défi a donc consisté à intégrer une architecture matérielle sur-mesure dans l\'écosystème, sur deux fronts simultanés :',
          items: [
            'Mécanique — modélisation complète d\'un bras pilote à 6 axes compatible avec la cinématique du WidowX AI',
            'Logiciel — configuration de la bibliothèque de contrôle GELLO pour assurer la liaison bras pilote ↔ bras suiveur',
          ],
        },
        {
          title: 'solutions_mécanique_/_logiciel',
          image: '/FACTR Assembly.png',
          teams: [
            {
              name: 'Côté mécanique',
              role: 'Identification sur Onshape d\'un modèle 3D à cinématique proche du WidowX AI, entièrement redimensionné à l\'échelle réelle, puis impression 3D des pièces sur mesure. Le laboratoire disposait déjà de servomoteurs récupérés sur un autre robot : 6 Dynamixel XC430-W150-T et 2 Dynamixel XC330-M288-T, directement réutilisés dans la conception.',
            },
            {
              name: 'Côté logiciel',
              role: 'Extension de la classe Robot de GELLO via les fonctions de haut niveau natives du WidowX AI. Calcul et configuration des offsets pour garantir une synchronisation fluide entre les deux bras.',
            },
          ],
        },
        {
          title: 'limites_rencontrées',
          body: 'Lors de l\'inventaire matériel, certains servomoteurs Dynamixel prévus dans la modélisation s\'avéraient indisponibles à l\'achat. Les modèles alternatifs disponibles étaient fonctionnellement équivalents, mais bien plus encombrants.',
          items: [
            'Modèle prévu : Dynamixel XC330-M288-T — indisponible à la commande',
            'Modèle retenu : Dynamixel XC430-W150-T — même fonction, encombrement nettement supérieur',
            'Refonte complète du châssis 3D pour intégrer les XC430-W150-T sans compromettre la cinématique',
          ],
          images: ['/Dynamixel XC330-M288-T.jpeg', '/Dynamixel XC430-W150-T.jpeg'],
          imageCaptions: ['XC330-M288-T — Modèle prévu (indisponible)', 'XC430-W150-T — Modèle retenu'],
        },
        {
          title: 'état_actuel_et_conclusion',
          body: 'Le projet est aujourd\'hui à un stade de développement très avancé. Les étapes restantes avant les tests finaux de téléopération en conditions réelles sont les suivantes :',
          items: [
            'Finalisation des ajustements dimensionnels sur la structure mécanique',
            'Étalonnage définitif des offsets logiciels entre les deux bras',
            'Tests finaux de téléopération sur le robot WidowX AI en conditions réelles',
          ],
        },
      ],
    },
  },
];
