/**
 * HOUSSEM REZGUI — PORTFOLIO JAVASCRIPT
 * Interactive Animations, Neural Canvas, Terminal, Filters & Bilingual System (FR/EN)
 */

// Global state for current language
let currentLang = localStorage.getItem('portfolio_lang') || 'fr';

// Bilingual translations dictionary
const i18n = {
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.work': 'Projets',
    'nav.experience': 'Parcours',
    'nav.skills': 'Compétences',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contactez-moi ↗',

    // Hero Section
    'hero.badge': 'DISPONIBLE POUR STAGES & PROJETS AMBITIEUX',
    'hero.kicker': 'Bonjour, je suis',
    'hero.prefix': 'Je conçois',
    'hero.intro': 'Étudiant en <strong>2ᵉ année du cycle ingénieur, spécialité Ingénierie du Développement Logiciel (IDL), à l’Institut Supérieur d’Informatique (ISI – Université de Tunis El Manar)</strong>, je m’intéresse particulièrement au <strong>développement logiciel, à l’intelligence artificielle et aux pratiques DevOps</strong>.<br><br>À travers mes projets académiques et personnels, je développe des solutions combinant <strong>développement Full Stack, intégration de modèles d’IA et Computer Vision</strong>. Je mets également en pratique les approches modernes de l’ingénierie logicielle, notamment la <strong>conteneurisation avec Docker, l’intégration et le déploiement continus (CI/CD) ainsi que l’automatisation des processus de développement</strong>.<br><br>Curieux et motivé par les nouvelles technologies, je souhaite mettre mes compétences au service de projets concrets dans les domaines du <strong>Software Engineering, de l’Intelligence Artificielle et du DevOps</strong>, tout en continuant à développer mon expertise.',
    'hero.btnProjects': 'Explorer mes projets ↘',
    'hero.btnContact': 'Prendre contact ↗',
    'hero.metaLoc': 'TUNIS, TUNISIE',
    'hero.metaMobility': 'MOBILITÉ INTERNATIONALE & DISTANCIEL',
    'hero.metaMajor': 'MAJOR DE PROMOTION FSB',
    'hero.profileTitle': 'Étudiant-Ingénieur en Génie Logiciel',
    'hero.profileFocus': 'Spécialisation IA Appliquée & Systèmes DevOps',
    'hero.badgeUs': '🇺🇸 Université US Accréditée',
    'hero.badgeMajor': 'Major Promo (Très Bien)',
    'hero.scroll': 'DÉFILER POUR DÉCOUVRIR',

    // About Section
    'about.subtitle': '01 / À PROPOS',
    'about.title': 'Allier systèmes intelligents<br>et <em>infrastructures scalables.</em>',
    'about.p1': 'Actuellement en cycle ingénieur en <strong>Génie Logiciel (IDL) à l\'Institut Supérieur d\'Informatique (ISI)</strong>, j\'ai obtenu ma Licence en Informatique à la Faculté des Sciences de Bizerte avec la <strong>mention Très Bien en tant que Major de promotion</strong>.',
    'about.p2': 'Ma passion se situe au carrefour de la <strong>Vision par Ordinateur (Deep Learning, YOLOv8, PyTorch)</strong> et de l\'<strong>ingénierie DevOps</strong>. Je m\'attache à extraire les modèles IA des carnets de recherche pour les déployer en microservices conteneurisés fiables.',
    'about.p3': 'De la mise en place d\'une chaîne de suivi d\'objets en temps réel (FreshTrack) au système de traçabilité industrielle automatisé chez <strong>SEBN (Sumitomo Electric)</strong> avec des robots PINTO, j\'accorde une grande rigueur à l\'architecture logicielle.',
    'about.statMajor': 'MAJOR DE PROMOTION<br>FSB INFORMATIQUE',
    'about.statGrad': 'DIPLÔME D\'INGÉNIEUR<br>ISI TUNISIE',
    'about.statItems': '500+ ARTICLES CONNECTÉS<br>IOT INDUSTRIEL (SEBN)',
    'about.statLang': 'ANGLAIS TECHNIQUE B2+<br>FRANÇAIS & ARABE COURANTS',

    // Projects Section
    'work.subtitle': '02 / PROJETS SÉLECTIONNÉS',
    'work.title': 'Conçus pour la<br><em>performance & l\'impact.</em>',
    'work.note': 'Une sélection de projets académiques, personnels et industriels en IA et génie logiciel.',
    'work.filterAll': 'Tous les projets',
    'work.filterAi': 'IA & Vision par Ordinateur',
    'work.filterDevops': 'DevOps & Systèmes',
    'work.filterFullstack': 'Full-Stack & Web',

    'p0.badge': '01 — IA · HTR · CLEAN ARCHITECTURE',
    'p0.meta': 'IA · HTR · FULL-STACK · DEVSECOPS',
    'p0.sub': 'Carnet de notes numérique intelligent et auto-apprenant',
    'p0.desc': 'Notely est une application Web et Mobile de prise de notes manuscrites augmentée par l\'IA. Elle permet d\'écrire naturellement au stylet ou au doigt, puis convertit automatiquement les tracés en texte structuré et éditable en quatre langues (français, anglais, arabe, allemand). Les schémas dessinés à main levée sont reconnus et transformés en formes géométriques parfaites, et les notes peuvent être exportées en PDF professionnel, y compris en arabe (écriture de droite à gauche).<br><br>Sa particularité : l\'application apprend de l\'écriture de chaque utilisateur. À chaque correction apportée, Notely mémorise la signature visuelle du tracé et enrichit un dictionnaire personnel, ce qui améliore la reconnaissance au fil de l\'usage. Un filtre de sécurité empêche toute correction abusive de corrompre l\'apprentissage.<br><br>Côté technique, le backend repose sur une architecture logicielle propre (Clean Architecture + DDD), un moteur de reconnaissance basé sur TrOCR (Vision Transformer de Microsoft) optimisé GPU, et une sécurité de niveau bancaire (Argon2id, rotation des jetons JWT). L\'ensemble est conteneurisé avec Docker et prêt à être déployé.',
    'p0.link': 'Dépôt Notely GitHub ↗',

    'p_cafe.badge': '02 — VISION IOT · AGENT IA (LLM LoRA) · ANGULAR 21',
    'p_cafe.meta': 'IA · VISION PAR ORDINATEUR · IOT',
    'p_cafe.sub': 'Système Intelligent de Gestion de Café | IA, Vision par Ordinateur & IoT',
    'p_cafe.desc': 'CaféSense est une solution intelligente de gestion de café combinant la vision par ordinateur en temps réel et un assistant conversationnel IA local pour optimiser les opérations de restauration et l\'expérience client.<br><br>Le système surveille automatiquement l\'occupation des tables via des flux de caméras, en identifiant les tables libres, occupées et sur le point d\'être libérées. Il intègre également un assistant IA bilingue, spécialisé en français et en arabe tunisien, qui aide les clients à explorer le menu, consulter les prix et allergènes, et obtenir la disponibilité des tables en temps réel.<br><br>Conçue autour de modèles IA adaptés (Fine-Tuning), la solution intègre <strong>YOLOv8</strong> pour la détection d\'objets et <strong>Qwen2.5</strong> optimisé avec <strong>LoRA</strong> couplé à un moteur <strong>RAG déterministe</strong> pour des réponses conversationnelles fiables, le tout s\'exécutant localement sans API commerciale.',
    'p_cafe.link': 'Dépôt CaféSense GitHub ↗',

    'p1.badge': '03 — VISION PAR ORDINATEUR · IOT · DOCKER',
    'p1.meta': 'IA · IOT · BACKEND CLOUD',
    'p1.sub': 'Système Intelligent de Reconnaissance des Fruits & Légumes et de Gestion Automatisée des Stocks',
    'p1.desc': 'Développement d\'une solution intelligente destinée aux commerçants de fruits et légumes, permettant d\'automatiser la gestion des stocks grâce à la vision par ordinateur. Une caméra détecte et identifie en temps réel les différents produits qui passent dans une zone de détection. Un modèle YOLOv8 personnalisé reconnaît et classe automatiquement chaque fruit et légume parmi 35 catégories, tandis que le tracking multi-objets permet de suivre les produits et d\'éviter les doubles comptages. Chaque détection valide déclenche une mise à jour automatique des quantités en stock.<br><br>La solution comprend également une application mobile Flutter dédiée aux vendeurs et aux clients, ainsi qu\'un système IoT basé sur ESP8266 et des capteurs de température et d\'humidité pour le suivi des conditions de conservation. Backend Python/Flask exposé via une API REST et conteneurisé avec Docker.',
    'p1.link': 'Dépôt Smart Fruit System GitHub ↗',

    'p5.badge': '04 — APPLICATION D\'ENTREPRISE · FULL-STACK',
    'p5.meta': 'REACT 19 · SPRING BOOT · POSTGRESQL',
    'p5.sub': 'Plateforme Web de Gestion et de Digitalisation du Processus de Recrutement',
    'p5.desc': 'Conception et développement d\'une plateforme web centralisant l\'ensemble du processus de recrutement, depuis la soumission des candidatures jusqu\'à la gestion et au suivi des décisions RH. La solution propose deux espaces dédiés : un portail candidat permettant de consulter les offres, soumettre des candidatures et suivre leur évolution, et une interface RH pour gérer les offres, examiner les profils, consulter les CV et piloter les différentes étapes du recrutement.<br><br>Le système intègre un processus de candidature structuré en plusieurs étapes, la gestion sécurisée des CV au format PDF, un tableau de bord analytique pour le suivi des candidatures et des notifications automatiques par email lors des changements de statut. Le projet comprend également la conception des interfaces sur Figma et le développement d\'une architecture Full-Stack séparant le frontend React et le backend Spring Boot, avec PostgreSQL pour la persistance des données.',
    'p5.link': 'Dépôt Recruitment System GitHub ↗',

    'p2.badge': '06 — ALGORITHMIQUE & STRUCTURES AVANCÉES',
    'p2.meta': 'BACKEND · COMPLEXITÉ ALGORITHMIQUE',
    'p2.sub': 'Moteur de Morphologie Computationnelle Arabe — Analyse des racines, classification verbale et génération morphologique',
    'p2.desc': 'Conception et développement d’un moteur linguistique dédié à l’analyse morphologique de la langue arabe. Le système identifie les structures radicales et traite différentes catégories de verbes — <strong>Sahih, Mithal, Ajwaf, Naqis et Lafif</strong> — afin d’analyser leurs particularités morphologiques et leurs règles de dérivation.<br><br>La solution repose sur l’implémentation de <strong>structures de données optimisées</strong>, notamment des <strong>arbres AVL auto-équilibrés</strong> pour garantir des recherches en O(log n), ainsi qu’une <strong>table de hachage développée manuellement</strong> pour accélérer l’accès aux données avec une complexité moyenne en O(1). Cette approche met l’accent sur la maîtrise des algorithmes, l’organisation des données linguistiques et l’efficacité des opérations de recherche.<br><br>Le moteur est exposé à travers une architecture <strong>Spring Boot</strong>, avec une interface interactive développée en <strong>React et TypeScript</strong>, permettant de manipuler et visualiser les résultats de l’analyse morphologique.',
    'p2.link': 'Dépôt Application GitHub ↗',

    'p3.badge': '07 — SYSTÈMES INDUSTRIELS · ROBOTIQUE · PFE',
    'p3.meta': 'PFE INDUSTRIEL · SUMITOMO ELECTRIC',
    'p3.title': 'Système de Traçabilité Industrielle',
    'p3.sub': 'Plateforme intelligente de gestion logistique et de suivi des flux industriels avec robots autonomes PINTO',
    'p3.desc': 'Projet de fin d\'études réalisé dans un environnement industriel du secteur automobile. Conception et développement d\'une solution de digitalisation des opérations d\'entrepôt permettant de gérer et de suivre en temps réel plus de <strong>500 articles industriels</strong>.<br><br>L\'architecture repose sur des <strong>micro-frontends Angular</strong> et des <strong>microservices .NET Core</strong>, avec une base de données <strong>PostgreSQL</strong> pour centraliser les données logistiques. La solution intègre également les robots autonomes <strong>PINTO</strong> via des échanges SOAP, ainsi que des communications REST sécurisées par JWT et le protocole MQTT pour la synchronisation des événements.<br><br>Le système couvre notamment le suivi des articles, la gestion de leur emplacement et la coordination des flux logistiques avec les équipements robotisés, afin d\'améliorer la visibilité et la fiabilité des opérations d\'entrepôt.<br><br><strong>Projet de Fin d\'Études — Licence Génie Logiciel et Systèmes d\'Information · Mention Très Bien</strong>',
    'p3.link': 'Projet de Fin d\'Études — Mention Très Bien',

    'p4.badge': '08 — APPLICATION D\'ENTREPRISE',
    'p4.meta': 'SOLUTIONS D\'ENTREPRISE · DÉVELOPPEMENT FULL-STACK',
    'p4.title': 'Gestion des Congés RH',
    'p4.sub': 'Plateforme de gestion des absences et d\'automatisation des circuits de validation',
    'p4.desc': 'Conception et développement d\'un portail RH permettant de <strong>digitaliser et centraliser la gestion des congés</strong> au sein d\'une organisation. La solution simplifie le dépôt des demandes, leur traitement selon les niveaux hiérarchiques et le suivi des absences à travers des calendriers d\'équipe.<br><br>L\'application repose sur une architecture séparant le <strong>frontend Angular</strong> de l\'<strong>API REST ASP.NET</strong>, avec une base de données <strong>SQL Server</strong> pour la persistance des informations. Un système de contrôle d\'accès basé sur les rôles (<strong>RBAC</strong>) encadre les autorisations et garantit que chaque utilisateur accède aux fonctionnalités correspondant à ses responsabilités.<br><br>Le projet vise à fluidifier les échanges entre collaborateurs et responsables RH, à structurer les workflows d\'approbation et à améliorer la visibilité sur la planification des absences.',
    'p4.link': 'Dépôt Frontend GitHub ↗',
    'p4.linkBack': 'Dépôt Backend ASP.NET ↗',
    'p4.linkFront': 'Dépôt Frontend Angular ↗',
    'work.viewAll': 'Voir tous les dépôts sur GitHub ↗',

    // Timeline
    'timeline.subtitle': '03 / EXPÉRIENCE & FORMATION',
    'timeline.title': 'Le parcours qui a<br><em>forgé mon savoir-faire.</em>',
    'timeline.expTitle': 'EXPÉRIENCE PROFESSIONNELLE',
    'timeline.eduTitle': 'FORMATION & DIPLÔMES',
    'exp1.role': 'Stagiaire Développeur Full-Stack (PFE)',
    'exp1.desc': 'Développement de la plateforme de traçabilité industrielle chez SEBN Sumitomo Electric. Microservices .NET Core, base PostgreSQL, interface Angular et interfaçage robotique SOAP.',
    'exp1.badge': 'MAJOR DE PROMOTION PFE',
    'exp2.role': 'Stagiaire Développeur Web',
    'exp2.desc': 'Participation à la création de modules applicatifs web réactifs et intégration d\'APIs RESTful avec les frameworks JavaScript modernes.',
    'exp3.role': 'Stagiaire Support & Infrastructure IT',
    'exp3.desc': 'Immersion au sein des infrastructures réseaux, maintenance de serveurs, assistance technique et diagnostic matériel en environnement industriel.',
    'edu1.role': 'Diplôme d\'Ingénieur · Génie Logiciel (IDL)',
    'edu1.place': 'Institut Supérieur d\'Informatique (ISI), Tunisie',
    'edu1.desc': 'Cursus d\'ingénierie avancée axé sur l\'architecture logicielle, les systèmes distribués, le Cloud, l\'IA appliquée et les pratiques DevOps.',
    'edu1.badge': 'CYCLE INGÉNIEUR EN COURS',
    'edu2.role': 'Licence en Sciences de l\'Informatique',
    'edu2.place': 'Faculté des Sciences de Bizerte · Université de Carthage',
    'edu2.desc': 'Spécialité Génie Logiciel et Systèmes d\'Information. Diplômé avec la <strong>Mention Très Bien et Classé 1er (Major de promotion)</strong>.',
    'edu2.badge': 'MAJOR DE PROMOTION · MENTION TRÈS BIEN',
    'edu3.role': 'Baccalauréat Mathématiques',
    'edu3.place': 'Lycée Bougatfa',
    'edu3.desc': 'Diplôme national du Baccalauréat avec la <strong>Mention Bien</strong>.',

    // Skills
    'skills.subtitle': '04 / TOOLKIT TECHNIQUE',
    'skills.title': 'Conçu pour les<br><em>systèmes modernes.</em>',
    'skills.note': 'Technologies, frameworks et pratiques DevOps mis en œuvre au quotidien.',
    'skills.cat1': 'IA & Vision par Ordinateur',
    'skills.cat2': 'DevOps & Infrastructure',
    'skills.cat3': 'Architecture & Backend',
    'skills.cat4': 'Frontend & Mobile',
    'skills.cat5': 'Bases de Données & Stockage',
    'skills.cat6': 'Langages Principaux',
    'skills.langLabel': 'LANGUES MAÎTRISÉES :',
    'skills.langAr': 'Arabe <i>Maternelle</i>',
    'skills.langFr': 'Français <i>Courant</i>',
    'skills.langEn': 'Anglais <i>B2 · Technique</i>',
    'skills.langDe': 'Allemand <i>A2</i>',

    // Certifications
    'cert.subtitle': '05 / CERTIFICATIONS VÉRIFIÉES',
    'cert.title': 'Qualifications & diplômes<br><em>spécialisés.</em>',
    'cert.note': 'Certifications vérifiées auprès d\'universités américaines et d\'institutions mondiales (IBM, Google, Cisco, WQU).',
    'cert.wquUsBanner': '🇺🇸 UNIVERSITÉ AMÉRICAINE ACCRÉDITÉE (DEAC / CHEA)',
    'cert.wquDesc': 'Laboratoire avancé de 6 projets PyTorch de bout en bout : classification faune par pièges photo, détection de maladies agricoles par CNN, suivi de trafic temps réel au Bangladesh, reconnaissance faciale MTCNN/Inception-ResNet sous Flask, génération d\'images médicales par GAN sous Streamlit et déploiement de modèles de diffusion.',
    'cert.verifyCredly': 'Vérifier sur Credly ↗',
    'cert.verifyCoursera': 'Vérifier sur Coursera ↗',
    'cert.btnLinkedin': 'Voir toutes les certifications sur LinkedIn ↗',

    // Contact
    'contact.subtitle': '06 / ENTRER EN CONTACT',
    'contact.title': 'Donnons vie à vos<br><em>projets innovants.</em>',
    'contact.desc': 'Que vous ayez une opportunité de stage ingénieur, un défi en vision par ordinateur/IA, ou une architecture Cloud/DevOps à bâtir, je suis à votre écoute.',
    'contact.phone': 'TÉLÉPHONE',
    'contact.location': 'LOCALISATION',
    'contact.locVal': 'Tunis, Tunisie · Ouvert à l\'international & remote',
    'contact.profiles': 'PROFILS & CODE',
    'contact.toast': 'Adresse email copiée dans le presse-papier !',
    'footer.built': 'ARCHITECTURÉ AVEC PASSION ET INTENTION.'
  },

  en: {
    // Navigation
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Let\'s talk ↗',

    // Hero Section
    'hero.badge': 'AVAILABLE FOR HIGH-IMPACT ROLES & COLLABORATION',
    'hero.kicker': 'Hello, I\'m',
    'hero.prefix': 'I engineer',
    'hero.intro': 'A <strong>2nd-year Software Engineering student specializing in Software Development Engineering (IDL) at the Higher Institute of Computer Science (ISI – University of Tunis El Manar)</strong>, I have a deep passion for <strong>software development, artificial intelligence, and DevOps practices</strong>.<br><br>Through my academic and personal projects, I design solutions combining <strong>Full Stack development, AI model integration, and Computer Vision</strong>. I also apply modern software engineering methodologies, including <strong>containerization with Docker, Continuous Integration and Deployment (CI/CD), and development workflow automation</strong>.<br><br>Driven by curiosity and a commitment to cutting-edge technologies, I am eager to contribute my skills to impactful projects in <strong>Software Engineering, Artificial Intelligence, and DevOps</strong> while continuing to expand my expertise.',
    'hero.btnProjects': 'Explore Projects ↘',
    'hero.btnContact': 'Get in Touch ↗',
    'hero.metaLoc': 'TUNIS, TUNISIA',
    'hero.metaMobility': 'OPEN TO INTERNATIONAL & REMOTE',
    'hero.metaMajor': 'CLASS VALEDICTORIAN (MAJOR)',
    'hero.profileTitle': 'Software Engineering Student',
    'hero.profileFocus': 'Applied AI & DevOps Practitioner',
    'hero.badgeUs': '🇺🇸 U.S. Accredited University',
    'hero.badgeMajor': 'Major de Promo (Honors)',
    'hero.scroll': 'SCROLL TO EXPLORE',

    // About Section
    'about.subtitle': '01 / ABOUT ME',
    'about.title': 'Bridging intelligent systems<br>with <em>scalable infrastructure.</em>',
    'about.p1': 'Currently pursuing an Engineering Degree in <strong>Software Development (IDL) at the Higher Institute of Computer Science (ISI), Tunisia</strong>, following a Bachelor\'s Degree in Computer Science with <strong>Très Bien honors as Class Major</strong>.',
    'about.p2': 'My passion sits at the crossroads of <strong>Applied Artificial Intelligence (Computer Vision, PyTorch, YOLOv8)</strong> and <strong>DevOps Engineering</strong>. I focus on taking algorithmic models out of notebooks and turning them into production-ready, containerized microservices and intuitive user interfaces.',
    'about.p3': 'From deploying real-time object tracking pipelines (FreshTrack) to engineering industrial automation software at <strong>SEBN (Sumitomo Electric)</strong> with PINTO robotic systems, I thrive on solving complex engineering challenges with precision.',
    'about.statMajor': 'MAJOR DE PROMOTION<br>FSB COMPUTER SCIENCE',
    'about.statGrad': 'ENGINEERING DIPLOMA<br>ISI TUNISIA',
    'about.statItems': '500+ CONNECTED ITEMS<br>INDUSTRIAL IOT (SEBN)',
    'about.statLang': 'TECHNICAL ENGLISH B2+<br>FLUENT FRENCH & ARABIC',

    // Projects Section
    'work.subtitle': '02 / SELECTED WORK',
    'work.title': 'Engineered for<br><em>impact & performance.</em>',
    'work.note': 'A curated selection of industrial, AI and full-stack engineering projects.',
    'work.filterAll': 'All Projects',
    'work.filterAi': 'AI & Computer Vision',
    'work.filterDevops': 'DevOps & Systems',
    'work.filterFullstack': 'Full-Stack & Web',

    'p0.badge': '01 — AI · HTR · CLEAN ARCHITECTURE',
    'p0.meta': 'AI · HTR · FULL-STACK · DEVSECOPS',
    'p0.sub': 'Intelligent Self-Learning Digital Notebook & HTR Platform',
    'p0.desc': 'Notely is an AI-augmented cross-platform (Web & Mobile) handwritten note-taking application. It allows users to write naturally using a stylus or finger, then automatically converts handwriting into structured, editable text across four languages (French, English, Arabic, German). Freehand diagrams and sketches are recognized and converted into clean geometric shapes, with professional PDF export including full right-to-left (RTL) Arabic support.<br><br>Its standout feature: continuous personalization. With every user correction, Notely learns individual stroke signatures and enriches a personal lexicon, progressively refining recognition accuracy over time. A built-in security filter prevents malicious corrections from corrupting the model.<br><br>On the technical side, the backend is built on Clean Architecture and Domain-Driven Design (DDD), featuring Microsoft TrOCR (Vision Transformer) optimized for GPU inference, and banking-grade security (Argon2id, JWT family rotation). The entire system is fully containerized with Docker and ready for production deployment.',
    'p0.link': 'Explore Notely Repository ↗',

    'p_cafe.badge': '02 — IOT VISION · CONVERSATIONAL AI (LLM LoRA) · ANGULAR 21',
    'p_cafe.meta': 'AI · COMPUTER VISION · IOT',
    'p_cafe.sub': 'Smart Café Management System | AI, Computer Vision & IoT',
    'p_cafe.desc': 'CaféSense is an intelligent café management solution that combines real-time computer vision and a locally running AI conversational assistant to enhance restaurant operations and customer experience.<br><br>The system automatically monitors table occupancy through camera feeds, identifying available, occupied, and soon-to-be-released tables. It also features a bilingual AI assistant, specialized in French and Tunisian Arabic, that helps customers explore the menu, check prices and allergens, and obtain real-time table availability.<br><br>Built around custom fine-tuned AI models, the solution integrates <strong>YOLOv8</strong> for object detection and <strong>Qwen2.5</strong> enhanced with <strong>LoRA</strong> and a deterministic <strong>RAG</strong> engine for reliable conversational responses, all running locally without commercial AI APIs.',
    'p_cafe.link': 'Explore CaféSense Repository ↗',

    'p1.badge': '03 — COMPUTER VISION · IOT · DOCKER',
    'p1.meta': 'AI · IOT · CLOUD BACKEND',
    'p1.sub': 'Intelligent Fruit & Vegetable Recognition & Automated Inventory Management',
    'p1.desc': 'Development of an intelligent computer vision solution designed for produce retailers to automate inventory management. An overhead camera detects and identifies produce in real time within a designated scanning zone. A custom-trained YOLOv8 model recognizes and classifies fruits and vegetables across 35 categories, while multi-object tracking (ByteTrack) prevents duplicate counts. Each verified item dynamically updates stock quantities.<br><br>The solution features a companion Flutter mobile application for vendors and shoppers, coupled with an IoT telemetry node powered by ESP8266 and temperature/humidity sensors to continuously monitor storage conditions. The Python/Flask backend is exposed through a REST API and containerized with Docker.',
    'p1.link': 'Explore Smart Fruit System Repository ↗',

    'p5.badge': '04 — ENTERPRISE APPLICATION · FULL-STACK',
    'p5.meta': 'REACT 19 · SPRING BOOT · POSTGRESQL',
    'p5.sub': 'Web Platform for Recruitment Process Digitization & Candidate Management',
    'p5.desc': 'Design and development of a centralized web platform digitizing end-to-end recruitment workflows, from candidate application submissions to HR talent management and hiring decisions. The platform provides two dedicated portals: a candidate portal to browse openings, submit multi-stage applications, and track application status; and an HR management console to post openings, screen applicants, review embedded PDF resumes, and coordinate hiring pipelines.<br><br>Features include a guided application flow, secure PDF resume storage and validation, an analytical recruitment dashboard, and automated asynchronous email notifications (Spring Mail) on status transitions. Built with Figma UI/UX designs, React 19 frontend, Spring Boot 3.5 backend, and PostgreSQL 17 for persistent data storage.',
    'p5.link': 'Explore Recruitment System Repository ↗',

    'p2.badge': '06 — HIGH-PERFORMANCE ALGORITHMS',
    'p2.meta': 'BACKEND · ALGORITHMIC COMPLEXITY',
    'p2.sub': 'Arabic Computational Morphology Engine — Root Analysis, Verb Classification & Morphological Generation',
    'p2.desc': 'Design and implementation of a specialized computational linguistics engine for Arabic morphological analysis. The system extracts radical root structures and analyzes major Arabic verb classes — <strong>Sahih, Mithal, Ajwaf, Naqis, and Lafif</strong> — to dissect morpho-syntactic behaviors and derivation rules.<br><br>The architecture relies on <strong>custom-engineered, high-performance data structures</strong>, including <strong>self-balancing AVL Trees</strong> guaranteeing O(log n) search performance and a <strong>handcrafted Hash Table</strong> ensuring average O(1) lookup access. This methodology underscores algorithmic mastery, linguistic data indexing, and query efficiency.<br><br>The core engine is exposed through a robust <strong>Spring Boot</strong> backend coupled with an interactive <strong>React and TypeScript</strong> frontend for real-time visualization of morphological derivations.',
    'p2.link': 'Explore Application Repository ↗',

    'p3.badge': '07 — INDUSTRIAL SYSTEMS · ROBOTICS · PFE',
    'p3.meta': 'INDUSTRIAL PFE · SUMITOMO ELECTRIC',
    'p3.title': 'Industrial Warehouse Tracking',
    'p3.sub': 'Smart Industrial Logistics & Automated Material Flow Tracking with Autonomous PINTO Robots',
    'p3.desc': 'Capstone graduation project engineered within an automotive industrial manufacturing environment. Designed and developed a digital warehouse management platform to track and coordinate over <strong>500+ industrial parts and components</strong> in real time.<br><br>The system architecture utilizes <strong>Angular micro-frontends</strong> and <strong>.NET Core microservices</strong>, connected to a high-capacity <strong>PostgreSQL</strong> database for centralized logistics data. The platform interfaces with autonomous <strong>PINTO warehouse robots</strong> via SOAP protocols, alongside JWT-secured REST APIs and MQTT event brokers for real-time event synchronization.<br><br>Core capabilities include comprehensive inventory tracking, bin location management, and automated material dispatching with robotic machinery to maximize warehouse visibility and operational throughput.<br><br><strong>Graduation Capstone Project — Bachelor\'s in Software Engineering & Information Systems · Highest Honors (Mention Très Bien)</strong>',
    'p3.link': 'Graduation Project — Mention Très Bien',

    'p4.badge': '08 — ENTERPRISE WEB APPLICATION',
    'p4.meta': 'ENTERPRISE SOLUTIONS · FULL-STACK DEVELOPMENT',
    'p4.title': 'HR Leave Management',
    'p4.sub': 'Employee Leave Management Platform & Automated Approval Workflows',
    'p4.desc': 'Design and development of an enterprise HR portal to <strong>digitize and centralize leave management</strong> across the organization. The solution streamlines employee request submissions, multi-level hierarchical approval workflows, and vacation tracking via integrated team calendars.<br><br>Built on a decoupled architecture pairing an <strong>Angular frontend</strong> with an <strong>ASP.NET REST API</strong> and <strong>SQL Server</strong> for persistent data management. A granular Role-Based Access Control (<strong>RBAC</strong>) system enforces strict access policies, ensuring users only access features appropriate to their departmental role.<br><br>The platform accelerates coordination between team members and HR personnel, standardizes approval cycles, and provides clear visibility over organizational absence planning.',
    'p4.link': 'Frontend Repository ↗',
    'p4.linkBack': 'Backend ASP.NET Repository ↗',
    'p4.linkFront': 'Frontend Angular Repository ↗',
    'work.viewAll': 'View All GitHub Repositories ↗',

    // Timeline
    'timeline.subtitle': '03 / EXPERIENCE & EDUCATION',
    'timeline.title': 'The path that<br><em>shaped my craft.</em>',
    'timeline.expTitle': 'PROFESSIONAL EXPERIENCE',
    'timeline.eduTitle': 'EDUCATION & DIPLOMAS',
    'exp1.role': 'Full-Stack Developer Intern (PFE)',
    'exp1.desc': 'Built the core backend and UI for an industrial warehouse tracking system at SEBN Sumitomo Electric. Implemented .NET Core microservices, PostgreSQL indexing, Angular interfaces, and SOAP protocol communication with PINTO factory robots.',
    'exp1.badge': 'MAJOR DE PROMOTION PFE',
    'exp2.role': 'Web Development Intern',
    'exp2.desc': 'Collaborated in designing responsive web applications, consuming RESTful endpoints, and implementing UI components using modern JavaScript frameworks.',
    'exp3.role': 'IT Infrastructure & Support Intern',
    'exp3.desc': 'Gained direct exposure to enterprise IT networks, server monitoring, user assistance, hardware diagnostics, and industrial infrastructure operations.',
    'edu1.role': 'Engineering Degree · Software Development (IDL)',
    'edu1.place': 'Higher Institute of Computer Science (ISI), Tunisia',
    'edu1.desc': 'Advanced engineering curriculum focusing on Software Architecture, Distributed Systems, Cloud Computing, Applied AI and DevOps methodologies.',
    'edu1.badge': 'NATIONAL ENGINEERING CYCLE',
    'edu2.role': 'Bachelor\'s Degree in Computer Science',
    'edu2.place': 'Faculty of Sciences of Bizerte · University of Carthage',
    'edu2.desc': 'Software Engineering and Information Systems track. Graduated with <strong>Très Bien honors and Ranked 1st in Class (Major de promotion)</strong>.',
    'edu2.badge': 'MAJOR DE PROMOTION · MENTION TRÈS BIEN',
    'edu3.role': 'Mathematics Baccalaureate',
    'edu3.place': 'Lycée Bougatfa',
    'edu3.desc': 'Tunisian High School Diploma in Mathematics with <strong>Mention Bien</strong>.',

    // Skills
    'skills.subtitle': '04 / TECHNICAL TOOLKIT',
    'skills.title': 'Engineered for<br><em>modern systems.</em>',
    'skills.note': 'Core technologies, frameworks and DevOps practices I employ daily.',
    'skills.cat1': 'AI & Computer Vision',
    'skills.cat2': 'DevOps & Infrastructure',
    'skills.cat3': 'Backend Engineering',
    'skills.cat4': 'Frontend & Mobile',
    'skills.cat5': 'Databases & Storage',
    'skills.cat6': 'Core Languages',
    'skills.langLabel': 'SPOKEN LANGUAGES:',
    'skills.langAr': 'Arabic <i>Native</i>',
    'skills.langFr': 'French <i>Fluent</i>',
    'skills.langEn': 'English <i>B2 · Technical</i>',
    'skills.langDe': 'German <i>A2</i>',

    // Certifications
    'cert.subtitle': '05 / VERIFIED CREDENTIALS',
    'cert.title': 'Specializations & verified<br><em>credentials.</em>',
    'cert.note': 'Recognized credentials from accredited U.S. universities and global industry leaders (IBM, Google, Cisco, WQU).',
    'cert.wquUsBanner': '🇺🇸 ACCREDITED U.S. UNIVERSITY (DEAC / CHEA)',
    'cert.wquDesc': 'Advanced lab completing 6 end-to-end PyTorch projects: wildlife camera trap classification, crop disease detection via CNNs, real-time traffic monitoring in Bangladesh, MTCNN + Inception-ResNet face recognition under Flask, medical GAN imaging under Streamlit, and Stable Diffusion models.',
    'cert.verifyCredly': 'Verify on Credly ↗',
    'cert.verifyCoursera': 'Verify on Coursera ↗',
    'cert.btnLinkedin': 'Verify all credentials on LinkedIn ↗',

    // Contact
    'contact.subtitle': '06 / LET\'S CONNECT',
    'contact.title': 'Ready to build<br><em>intelligent systems?</em>',
    'contact.desc': 'Whether you have an engineering internship opportunity, an applied AI challenge to solve, or an ambitious software project to collaborate on, I would love to hear from you.',
    'contact.phone': 'PHONE',
    'contact.location': 'LOCATION',
    'contact.locVal': 'Tunis, Tunisia · Open to Global Relocation & Remote',
    'contact.profiles': 'PROFILES & CODE',
    'contact.toast': 'Email address copied to clipboard!',
    'footer.built': 'ARCHITECTED WITH PASSION & INTENTION.'
  }
};

// Typewriter dynamic strings per language
const typewriterRoles = {
  fr: [
    'des modèles d\'IA et de Vision par Ordinateur.',
    'des pipelines DevOps et architectures Cloud.',
    'des microservices distribués haute performance.',
    'des systèmes intelligents temps réel.',
    'des applications Full-Stack conteneurisées.'
  ],
  en: [
    'Applied AI & Computer Vision Pipelines.',
    'DevOps & Cloud Architectures.',
    'Scalable Backend Microservices.',
    'Real-time Computer Vision & Edge AI.',
    'Intelligent Full-Stack Systems.'
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initCursorGlow();
  initNeuralCanvas();
  initTypewriter();
  initTerminalMetrics();
  initProjectFilters();
  initScrollEffects();
  initCardTilt();
  initCopyEmail();
  initMobileMenu();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* --------------------------------------------------------------------------
   1. BILINGUAL LANGUAGE SWITCHER (FR / EN)
   -------------------------------------------------------------------------- */
function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  applyLanguage(currentLang);

  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.lang;
      if (selected === currentLang) return;
      currentLang = selected;
      localStorage.setItem('portfolio_lang', currentLang);
      applyLanguage(currentLang);
    });
  });
}

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.fr;

  // Update active state on buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    if (btn.dataset.lang === lang) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  // Replace text in elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

/* --------------------------------------------------------------------------
   2. AMBIENT CURSOR GLOW
   -------------------------------------------------------------------------- */
function initCursorGlow() {
  const cursor = document.getElementById('cursorGlow');
  if (!cursor || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();
}

/* --------------------------------------------------------------------------
   3. NEURAL AI & CYBER PARTICLE CANVAS
   -------------------------------------------------------------------------- */
function initNeuralCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor(window.innerWidth / 22), 65);
  const particles = [];
  const mouse = { x: null, y: null, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.4 ? '#a476ff' : '#00f0ff';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2.5;
          this.y -= (dy / dist) * force * 2.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const alpha = 1 - dist / 130;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(164, 118, 255, ${alpha * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    connectParticles();
    requestAnimationFrame(animate);
  }
  animate();
}

/* --------------------------------------------------------------------------
   4. DYNAMIC TYPEWRITER WITH LANGUAGE SUPPORT
   -------------------------------------------------------------------------- */
let typewriterTimer = null;
function initTypewriter() {
  const target = document.getElementById('typedRole');
  if (!target) return;

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 75;

  function type() {
    const list = typewriterRoles[currentLang] || typewriterRoles.fr;
    const current = list[roleIdx % list.length];

    if (isDeleting) {
      target.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      target.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIdx === current.length) {
      typingSpeed = 1900;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % list.length;
      typingSpeed = 400;
    }

    typewriterTimer = setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   5. LIVE TERMINAL DYNAMIC METRICS
   -------------------------------------------------------------------------- */
function initTerminalMetrics() {
  const fpsEl = document.getElementById('liveFps');
  const latencyEl = document.getElementById('liveLatency');
  if (!fpsEl || !latencyEl) return;

  setInterval(() => {
    const fps = (58 + Math.random() * 4).toFixed(1);
    const latency = (11 + Math.random() * 2.5).toFixed(1);
    fpsEl.textContent = `${fps} FPS`;
    latencyEl.textContent = `${latency} ms`;
  }, 2200);
}

/* --------------------------------------------------------------------------
   6. PROJECT CATEGORY FILTERS
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach((card) => {
        const categories = (card.dataset.category || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'grid';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. SCROLL REVEAL & HEADER SHRINK
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const header = document.querySelector('.site-header');
  const progressBar = document.getElementById('scrollProgress');
  const reveals = document.querySelectorAll('.reveal');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    if (progressBar) progressBar.style.width = `${progress}%`;

    if (header) {
      if (scrollTop > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('section[id]');
    let currentId = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 150;
      if (scrollTop >= top) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  reveals.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   8. 3D TILT EFFECT
   -------------------------------------------------------------------------- */
function initCardTilt() {
  const tiltCards = document.querySelectorAll('.terminal-card, .project-card, .fact, .skill-group, .hero-profile-card');
  if (window.matchMedia('(pointer: coarse)').matches) return;

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* --------------------------------------------------------------------------
   9. COPY EMAIL WITH TOAST
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('copyToast');
  const emailText = 'rezguihoussem67@gmail.com';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailText).then(() => {
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
      }
    }).catch(() => {
      window.location.href = `mailto:${emailText}`;
    });
  });
}

/* --------------------------------------------------------------------------
   10. MOBILE NAVIGATION MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
