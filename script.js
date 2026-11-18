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
    'p0.desc': 'Plateforme multiplateforme (Web & Mobile) de prise de notes manuscrites augmentée par IA. Pipeline HTR multilingue (FR/EN/AR/DE) basé sur <strong>TrOCR (Vision Transformer de Microsoft)</strong> avec inférence FP16 sur GPU CUDA. Backend <strong>FastAPI</strong> en <strong>Clean Architecture + DDD</strong>, apprentissage continu à 3 niveaux (Ink Hash + Hamming, dictionnaire personnel PostgreSQL, fine-tuning LoRA/PEFT), filtre anti-poisoning, export PDF vectoriel avec moteur arabe RTL/Bidi, et sécurité <strong>Argon2id + JWT rotation par famille</strong>.',
    'p0.link': 'Dépôt Notely GitHub ↗',

    'p_cafe.badge': '02 — VISION IOT · AGENT IA (LLM LoRA) · ANGULAR 21',
    'p_cafe.meta': 'VISION PAR ORDINATEUR · LLM LoRA · CLEAN ARCHITECTURE',
    'p_cafe.sub': 'Système Autonome de Restauration Intelligente & Agent Conversationnel IA',
    'p_cafe.desc': 'Solution complète déployée pour le café-restaurant <em>Coffee House Lac</em> (Tunis), alliant <strong>Vision par Ordinateur IoT</strong> et <strong>Agent Conversationnel IA 100% local</strong> (zéro API commerciale). Pipeline vidéo <strong>YOLOv8n</strong> avec filtrage géométrique strict bord-à-bord (d<sub>edge</sub> ≤ 30 px) pour la détection temps réel de l\'occupation des tables (🟢 Libre, 🔴 Occupée avec chronomètre, 🟠 En départ) sur 4 sources caméras (DirectShow). Cerveau conversationnel bilingue (Français & Dialecte Tunisien / <em>Derja</em>) propulsé par <strong>Qwen2.5-1.5B affiné par LoRA (PEFT)</strong> couplé à un moteur <strong>RAG déterministe</strong> (catalogue 68 articles, prix officiels en DT, gestion des allergènes). Backend <strong>Flask en Clean Architecture</strong> avec streaming MJPEG et frontend réactif <strong>Angular 21 (Reactive Signals)</strong>.',
    'p_cafe.link': 'Dépôt CaféSense GitHub ↗',

    'p1.badge': '03 — VISION PAR ORDINATEUR · IOT · DOCKER',
    'p1.meta': 'IA · IOT · BACKEND CLOUD',
    'p1.sub': 'Surveillance intelligente de fraîcheur et gestion de stock',
    'p1.desc': 'Pipeline de traçabilité combinant vision par ordinateur et télémétrie IoT. Intègre un modèle <strong>YOLOv8</strong> personnalisé avec l\'algorithme de tracking <strong>ByteTrack</strong>, conteneurisé avec <strong>Docker</strong>, exposé via une <strong>API Flask</strong> et relié à des capteurs ESP32 et une application mobile <strong>Flutter</strong>.',
    'p1.link': 'Dépôt Backend GitHub ↗',

    'p2.badge': '06 — ALGORITHMIQUE & STRUCTURES AVANCÉES',
    'p2.meta': 'BACKEND · COMPLEXITÉ ALGORITHMIQUE',
    'p2.sub': 'Moteur d\'analyse morphologique et décomposition de racines arabes',
    'p2.desc': 'Moteur linguistique haute performance analysant les racines arabes et dérivations morpho-syntaxiques. Exploitation d\'<strong>Arbres AVL auto-équilibrés</strong> et de <strong>Tables de Hachage</strong> pour des recherches en O(log n). Architecture microservice <strong>Spring Boot</strong> et interface réactive <strong>React + TypeScript</strong>.',
    'p2.link': 'Dépôt Application GitHub ↗',

    'p3.badge': '07 — SYSTÈMES INDUSTRIELS · ROBOTIQUE · PFE',
    'p3.meta': 'PFE INDUSTRIEL · SUMITOMO ELECTRIC',
    'p3.title': 'Système de Traçabilité Industrielle',
    'p3.sub': 'Gestion logistique automatisée avec robots autonomes PINTO',
    'p3.desc': 'Projet de fin d\'études (Licence) : Conception d\'une solution de suivi temps réel pour plus de <strong>500+ articles industriels</strong> dans les entrepôts de câblage automobile. Intégration de micro-frontends <strong>Angular</strong>, microservices <strong>.NET Core</strong>, base <strong>PostgreSQL</strong> et protocole bidirectionnel <strong>SOAP</strong> pour le guidage de robots PINTO.',
    'p3.link': 'Projet de Fin d\'Études — Mention Très Bien',

    'p4.badge': '08 — APPLICATION D\'ENTREPRISE',
    'p4.meta': 'SOLUTIONS D\'ENTREPRISE',
    'p4.title': 'Gestion des Congés RH',
    'p4.sub': 'Portail de gouvernance et circuits d\'approbation numériques',
    'p4.desc': 'Portail d\'entreprise fluidifiant les demandes de congés, circuits de validation hiérarchiques et calendriers d\'équipe. Séparation nette entre frontend <strong>Angular</strong>, API REST <strong>.NET</strong> et stockage <strong>SQL Server</strong> avec gestion stricte des autorisations RBAC.',
    'p4.link': 'Dépôt Frontend GitHub ↗',
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
    'p0.sub': 'Self-Learning Intelligent Digital Notebook & HTR Platform',
    'p0.desc': 'A cross-platform (Web & Mobile) handwritten digital notebook augmented by artificial intelligence. Features a multilingual HTR pipeline (FR/EN/AR/DE) built on <strong>Microsoft TrOCR (Vision Transformer)</strong> with FP16 inference on CUDA GPU. The <strong>FastAPI</strong> backend implements <strong>Clean Architecture + DDD</strong>, 3-tier continuous learning (Ink Hash + Hamming, user dictionary in PostgreSQL, LoRA/PEFT fine-tuning), anti-poisoning filter, vector PDF export with Arabic RTL/Bidi engine, and <strong>Argon2id + JWT family rotation security</strong>.',
    'p0.link': 'Explore Notely Repository ↗',

    'p_cafe.badge': '02 — IOT VISION · CONVERSATIONAL AI (LLM LoRA) · ANGULAR 21',
    'p_cafe.meta': 'COMPUTER VISION · LLM LoRA · CLEAN ARCHITECTURE',
    'p_cafe.sub': 'Autonomous Smart Café Management & Conversational AI Agent',
    'p_cafe.desc': 'An end-to-end hospitality intelligence platform deployed for the <em>Coffee House Lac</em> café-restaurant in Tunis, seamlessly bridging <strong>IoT Computer Vision</strong> with a <strong>100% localized Conversational AI agent</strong> (zero commercial third-party APIs). Powered by a fine-tuned <strong>YOLOv8n</strong> pipeline with strict edge-to-edge spatial filtering (d<sub>edge</sub> ≤ 30 px) for real-time table occupancy tracking (🟢 Free, 🔴 Occupied with live timers, 🟠 Leaving grace period) across 4 live camera feeds (DirectShow). Backed by a bilingual French & Tunisian Derja conversational brain powered by a <strong>LoRA fine-tuned Qwen2.5-1.5B model (PEFT)</strong> coupled with a <strong>deterministic RAG engine</strong> (68-item menu, official DT pricing, zero hallucinations, allergen safety). Architected with a <strong>Clean Architecture Flask backend</strong> with MJPEG streaming and a responsive <strong>Angular 21 (Reactive Signals)</strong> interface.',
    'p_cafe.link': 'Explore CaféSense Repository ↗',

    'p1.badge': '03 — COMPUTER VISION · IOT · DOCKER',
    'p1.meta': 'AI · IOT · CLOUD BACKEND',
    'p1.sub': 'Intelligent Fresh Produce Quality & Inventory Monitoring',
    'p1.desc': 'An end-to-end connected inventory pipeline integrating real-time computer vision and IoT telemetry. Combines a custom fine-tuned <strong>YOLOv8</strong> object detection model with <strong>ByteTrack</strong> multi-object tracking, containerized with <strong>Docker</strong>, exposed through a <strong>Flask API</strong>, and linked to ESP32 environmental sensors and a <strong>Flutter</strong> mobile app.',
    'p1.link': 'Explore Backend Repository ↗',

    'p2.badge': '06 — HIGH-PERFORMANCE ALGORITHMS',
    'p2.meta': 'BACKEND · ALGORITHMIC COMPLEXITY',
    'p2.sub': 'Arabic Morphological Analysis & Root Decomposition',
    'p2.desc': 'A high-efficiency linguistic processing engine analyzing Arabic root patterns and morpho-syntactic transformations. Implemented using self-balancing <strong>AVL Trees</strong> and customized <strong>Hash Tables</strong> to achieve O(log n) lookups over extensive lexicons. Built with a <strong>Spring Boot</strong> microservice architecture and a reactive <strong>React + TypeScript</strong> interface.',
    'p2.link': 'Explore Application Repository ↗',

    'p3.badge': '07 — INDUSTRIAL SYSTEMS · ROBOTICS · PFE',
    'p3.meta': 'INDUSTRIAL PFE · SUMITOMO ELECTRIC',
    'p3.title': 'Industrial Warehouse Tracking',
    'p3.sub': 'Automated Real-Time Logistics with PINTO Robots',
    'p3.desc': 'Bachelor End-of-Studies project: Designed and engineered a real-time tracking architecture for over <strong>500+ connected industrial items</strong> in automotive harness warehouses. Integrated <strong>Angular</strong> micro-frontends with <strong>.NET Core</strong> microservices, a <strong>PostgreSQL</strong> relational layer, and bidirectional <strong>SOAP</strong> protocol handling for autonomous PINTO robotic placement.',
    'p3.link': 'Graduation Project — Mention Très Bien',

    'p4.badge': '08 — ENTERPRISE WEB APPLICATION',
    'p4.meta': 'ENTERPRISE SOLUTIONS',
    'p4.title': 'HR Leave Management',
    'p4.sub': 'Digital Governance & Employee Request Pipelines',
    'p4.desc': 'A web-based enterprise portal streamlining employee leave requests, multi-tier manager approvals, and calendar synchronization. Designed with clean architectural separation between an <strong>Angular</strong> frontend, a <strong>.NET</strong> REST API, and <strong>SQL Server</strong> storage with role-based access control (RBAC).',
    'p4.link': 'Frontend Repository ↗',
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
