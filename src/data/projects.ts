export interface ProjectSection {
  title: string;
  body?: string;
  items?: string[];
  teams?: { name: string; role: string }[];
  image?: string;
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
    id: 'proj-01',
    title: 'Réplique du Pip-Boy de Fallout',
    type: 'perso',
    description:
      'Conception d\'un système embarqué sur Raspberry Pi 5 intégrant électronique, interface Python et composants matériels (écran, radio, audio, potentiomètres) pour un prototype fonctionnel.',
    stack: ['Raspberry Pi 5', 'Python', 'Électronique', 'PCB'],
    status: 'wip',
    featured: true,
    image: '/pip_boy.jpg',
    details: {
      context: 'Projet personnel inspiré de la saga Fallout de Bethesda. Le Pip-Boy est un terminal portatif emblématique porté au poignet par le joueur dans le jeu.',
      objectives: [
        'Reproduire fidèlement le Pip-Boy 3000 Mark IV de Fallout 4',
        'Intégrer un écran circulaire fonctionnel avec interface Python',
        'Ajouter des fonctionnalités réelles : radio FM, lecteur audio, horloge',
        'Concevoir un boîtier imprimé en 3D adapté au poignet',
      ],
      technical: [
        'Raspberry Pi 5 comme unité centrale de traitement',
        'Écran rond 240×240px piloté via SPI',
        'Module radio FM pour réception de stations réelles',
        'Amplificateur audio et haut-parleur intégrés',
        'Potentiomètres rotatifs pour navigation dans les menus',
        'Interface graphique développée en Python (Pygame)',
        'Alimentation par batterie LiPo rechargeable',
      ],
      results: [
        'Prototype fonctionnel avec affichage d\'interface rétro',
        'Navigation entre menus (STATS, INV, DATA, MAP, RADIO)',
        'Projet en cours de finalisation (boîtier + finitions)',
      ],
    },
  },
  {
    id: 'proj-02',
    title: 'Robot autonome — Exploration de labyrinthe',
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
          body: 'Bien qu\'ambitieux, le projet s\'est heurté à des contraintes de temps. Les délais de fabrication ayant été sous-estimés, l\'équipe mécanique n\'a pu livrer le châssis assez tôt pour permettre à l\'équipe informatique de finaliser les tests d\'intégration en conditions réelles. Néanmoins, cette expérience s\'est révélée extrêmement formatrice. Elle nous a permis de maîtriser des technologies totalement nouvelles pour nous (LiDAR, cinématique Mecanum), tout en nous offrant une véritable leçon sur l\'importance cruciale de la gestion du temps et de la synchronisation entre les équipes.',
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
      context: 'Projet académique conforme aux règles TNRS (Tournoi National de Robotique Sumo). Le robot doit détecter et pousser son adversaire hors d\'un ring circulaire noir à liseré blanc.',
      objectives: [
        'Concevoir un robot mini-sumo dans les dimensions 100×100 mm max',
        'Détecter l\'adversaire et le bord du ring de manière autonome',
        'Implémenter des stratégies de combat efficaces',
        'Concevoir un shield PCB sur mesure intégrant tous les composants',
      ],
      technical: [
        'Microcontrôleur ATMEGA328P (compatible Arduino)',
        'Capteurs IR frontaux pour détection adversaire',
        'Capteurs de réflectance pour détection du bord blanc du ring',
        'Pont en H L298N pour le contrôle des deux moteurs DC',
        'PCB shield custom conçu sur KiCad et fabriqué',
        'Alimentation LiPo 7.4V avec régulateur 5V',
        'Programmation en C/C++ avec Arduino IDE',
        'Dimensions finales validées : 99.88 × 99.99 mm',
      ],
      results: [
        'PCB shield fonctionnel fabriqué et soudé',
        'Dimensions conformes au cahier des charges TNRS (< 100mm)',
        'Détection adversaire et bord du ring opérationnels',
        'Stratégies de combat autonomes implémentées et testées',
        'Autonomie énergétique validée pour la durée d\'un match',
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
      context: 'Stage R&D au Tanaka Lab (Japon). HAMSTER est un framework de machine learning hiérarchique pour la manipulation robotique utilisant des données off-domain (vidéos libres, simulations).',
      objectives: [
        'Implémenter et déployer le modèle HAMSTER (VLM hiérarchique)',
        'Développer une interface utilisateur pour faciliter l\'utilisation du modèle',
        'Déployer le modèle sur des services GPU cloud spécialisés (RunPod)',
        'Améliorer la généralisation des robots en utilisant des données non-robot',
      ],
      technical: [
        'Architecture hiérarchique à 2 niveaux : VLM haut-niveau + politique 3D bas-niveau',
        'Vision-Language Model (LLaVA-1.5-13B) fine-tuné pour la robotique',
        'Prédiction de trajectoires 2D comme représentation intermédiaire robuste',
        'Interface web développée avec Gradio pour l\'utilisation du modèle',
        'Déploiement GPU sur RunPod pour l\'inférence à la demande',
        'Imitation Learning + données off-domain (vidéos, simulations, croquis)',
        'Validation sur robot réel WidowX 250',
      ],
      results: [
        'Amélioration de 20% du taux de succès sur 7 axes de généralisation',
        'Gain relatif de 50% par rapport à OpenVLA (baseline monolithique)',
        'Généralisation validée sim-to-real et sur nouvelles scènes visuelles',
        'Interface de déploiement opérationnelle pour l\'équipe de recherche',
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
    id: 'proj-07',
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
    id: 'proj-06',
    title: 'Bras robotique pour la téléopération',
    type: 'pro',
    description:
      'Création du code et de la modélisation 3D d\'un bras robotique pilote pour téléopérer un bras robotique WidowX AI. L\'objectif est d\'améliorer la qualité des enregistrements d\'apprentissage par imitation en supprimant l\'apparition des bras de l\'opérateur sur la vidéo.',
    stack: ['Modélisation 3D', 'Onshape', 'Python', 'Impression 3D', 'Linux'],
    status: 'wip',
    featured: true,
    image: '/FACTR Assembly.png',
    details: {
      context: 'Stage R&D au Tanaka Lab (Japon). Le bras pilote est une interface de contrôle ergonomique permettant à un opérateur de téléopérer un bras WidowX AI tout en restant hors du champ de la caméra.',
      objectives: [
        'Modéliser un bras robotique maître ergonomique sur Onshape',
        'Imprimer et assembler le bras en 3D avec les servomoteurs Dynamixel',
        'Développer le code de téléopération en Python (lecture + envoi positions)',
        'Permettre l\'acquisition de données haute-fidélité pour l\'Imitation Learning',
        'Supprimer l\'apparition des bras de l\'opérateur dans le champ de la caméra',
      ],
      technical: [
        'Modélisation 3D complète sur Onshape (assemblage + pièces customs)',
        'Servomoteurs Dynamixel XH430 pour retour de position précis',
        'Impression 3D FDM des pièces sur mesure (PLA/PETG)',
        'Python pour la communication avec les servos via SDK Dynamixel',
        'Protocole FACTR (Follower Arm Control for Teleoperation Research)',
        'Bras esclave : WidowX 250 AI de Trossen Robotics',
        'ROS2 pour la communication inter-processus',
      ],
      results: [
        'Modèle 3D complet du bras maître validé (assemblage FACTR)',
        'Premières pièces imprimées et testées mécaniquement',
        'Code de téléopération en développement actif',
        'Projet en cours — stage avril à juin 2026',
      ],
    },
  },
  {
    id: 'proj-04',
    title: 'Kart à Hélice — Véhicule télécommandé par infrarouge',
    type: 'univ',
    description:
      'Création complète de 2 cartes électroniques émettrice et réceptrice d\'un Kart à Hélice télécommandé par infrarouge. Design de l\'électronique et programmation des cartes.',
    stack: ['Électronique', 'Arduino', 'PCB Design', 'Infrarouge', 'Proteus'],
    status: 'stable',
    featured: false,
    image: '/Kart a helice.jpg',
    details: {
      context: 'Projet académique commandé par Toy Corporation. Conception d\'un kart jouet télécommandé par infrarouge, avec deux cartes électroniques distinctes : un émetteur (télécommande) et un récepteur (embarqué sur le kart).',
      objectives: [
        'Concevoir la carte émetteur infrarouge (télécommande)',
        'Concevoir la carte récepteur embarquée sur le kart',
        'Mettre en place un protocole de communication IR fiable',
        'Dimensionner l\'électronique de puissance pour le moteur de l\'hélice',
      ],
      technical: [
        'Microcontrôleur ATmega sur chaque carte (émetteur + récepteur)',
        'LED IR émettrice 940 nm et photodiode réceptrice',
        'Protocole IR custom encodé (modulation 38 kHz)',
        'Simulation du circuit sur Proteus avant fabrication',
        'PCB double couche conçu et fabriqué pour les deux cartes',
        'Driver moteur pour contrôle de la vitesse de l\'hélice (PWM)',
        'Alimentation par pile 9V avec régulation 5V intégrée',
      ],
      results: [
        'Les deux cartes PCB conçues, fabriquées et soudées',
        'Communication infrarouge émetteur ↔ récepteur validée',
        'Contrôle de la vitesse de l\'hélice fonctionnel',
        'Dimensions des cartes conformes au cahier des charges',
        'Autonomie énergétique testée et validée',
      ],
      docs: [
        { label: 'Cahier des Charges (CDC)', href: '/Kart a helice_CDC.pdf' },
        { label: 'Dossier de Conception (DDC)', href: '/Kart a helice_DDC.pdf' },
        { label: 'Dossier de Validation (DDV)', href: '/Kart a helice_DDV.pdf' },
      ],
    },
  },
];
