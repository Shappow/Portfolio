export interface ProjectDetails {
  context?: string;
  objectives?: string[];
  technical?: string[];
  results?: string[];
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
      context: 'Projet académique réalisé dans le cadre du Diplôme Universitaire en Robotique à l\'IUT de Bordeaux. Inspiré de la plateforme open-source Pico Mars Rover.',
      objectives: [
        'Concevoir un robot holonome capable de naviguer de manière autonome',
        'Sortir d\'un labyrinthe inconnu sans intervention humaine',
        'Éviter les obstacles en temps réel grâce à un capteur LIDAR',
        'Assurer la conception mécanique, électronique et logicielle complète',
      ],
      technical: [
        'Architecture holonome avec roues mécanums (déplacement omnidirectionnel)',
        'Capteur LIDAR RPLidar A1 pour la cartographie de l\'environnement',
        'Raspberry Pi comme unité centrale de traitement',
        '4 moteurs CC pilotés via pont en H',
        'Algorithme de navigation par suivi de paroi (wall-following)',
        'Développement en Python / C++ sous Linux',
        'Alimentation par batterie LiPo',
      ],
      results: [
        'Robot fonctionnel capable de naviguer dans un labyrinthe physique',
        'Temps de résolution de labyrinthe < 3 minutes',
        'Détection et évitement d\'obstacles en temps réel validés',
        'Architecture mécanique légère et compacte réalisée avec succès',
      ],
      docs: [
        { label: 'Documentation technique', href: '/Le robot THESEE.pdf' },
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
      context: 'Projet réalisé pour l\'ARGG (Association Radio Goniométrie Gironde) dans le cadre d\'un challenge de radiogoniométrie sur le campus. L\'objectif est de localiser des balises radio cachées.',
      objectives: [
        'Concevoir une antenne HB9CV directionnelle pour 144 MHz',
        'Obtenir une impédance de 50 Ω pour une adaptation optimale',
        'Réaliser un diagramme de rayonnement directionnel pour la goniométrie',
        'Développer un outil logiciel d\'aide à la localisation des balises',
      ],
      technical: [
        'Antenne type HB9CV (2 éléments : radiateur + réflecteur sur boom)',
        'Fréquence centrale : 144 MHz (bande amateur 2m)',
        'Adaptation d\'impédance par condensateur série (8,7 pF)',
        'Simulation RF avec MMANA-GALBasic et uSimmick',
        'Mesure avec analyseur réseau vectoriel (VNA) pour validation',
        'RTL-SDR pour réception et vérification du signal',
        'Interface Gradio développée en Python pour l\'aide à la goniométrie',
        'Précision directionnelle mesurée : 3 directives à 5°',
      ],
      results: [
        'Antenne résonant précisément à 144 MHz (conforme CDC)',
        'Adaptation d\'impédance à 50 Ω validée sur analyseur réseau',
        'Diagramme de rayonnement directionnel confirmé',
        'Vérifications mécaniques conformes (masse, rigidité, équilibre)',
        'Interface logicielle opérationnelle pour l\'équipe terrain',
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
