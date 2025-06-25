
const translations = {
fr: {
    competences: "COMPETENCES",
    diplomes: "PARCOURS",
    projets: "PROJETS",

    
    aboutme: "Étudiant en informatique spécialisé en développement logiciel <br> à la recherche d'une alternance de 12 mois",
    telechargementCV: "Télécharger mon CV",
    aboutmeTitle: "À propos de moi",
    aboutmeText: "Je m'appelle Titouan, j'ai 18 ans et actuellement ​étudiant en 1ère année d'informatique a l'IUT de Lannion. Je m'intéresse a un peu tout mais j'aime par dessus tout le développement logiciel. Je suis passionné par l'astronomie, les jeux vidéos, l'escalade et la physique. Mais j'apprécie également la psychologie, la 3D, la physique et la musique.",
    
    
    devWeb: "Développement web",
    devWebCont: "Je possède une base de connaissances en développement Web et je sais utiliser plusieurs langages de programmation tels que HTML et CSS ainsi que la framework Bootstrap.",
    
    devLog: "Développement Logiciel",
    devLogCont: "Je suis capable de développer des logiciels en utilisant des langages tels que Java17, Python, C, javaFx ainsi que l'utilisation de Javafx Scene Builder.",
    
    bdd: "Base de données",
    bddCont: "Je possède une base de connaissances en base de données, je sais utiliser plusieurs logiciels tels que MySQL et Oracle. Je sais donc créer des schémas de base de données et les peupler.",
    
    systeme: "Système",
    systemeCont: "Je possède une base de connaissances en maintenance Système et je sais utiliser plusieurs langages tels que PHP et Bash.",
    
    reseau:"Service Réseau",
    reseauCont:"Je possède une base de connaissances en maintenance et en instalation de réseaux et je sais utiliser le logiciel Sisco Packet Tracer.",
    
    compAlgo: "Comparaison Alghorithmique",
    compAlgoCont: "Je suis capable d'avoir une approche alghorithmique pour tout type de problèmes.",

    // devWeb: "Implémentation d'un besoin client",
    // devWebCont: "Je peux développer des applications informatiques simples tels qu'un jeu de snake.",
    
    // devLog: "Comparaison d'algorithmes",
    // devLogCont: "Je suis capable d'appréhender et de construire des algorithmes.",
    
    // bdd: "Installation de poste",
    // bddCont: "Je possède une base de connaissances pour installer et configurer un poste de travail.",
    
    // systeme: "Création de bases de données",
    // systemeCont: "Je suis capable de concevoir et mettre en place une base de données à partir d'un cahier des charges client.",
    
    // reseau:"Recueil de besoins",
    // reseauCont:"Je possède une base de connaissances pour identifier les besoins métiers des clients et des utilisateurs.",
    
    // compAlgo: "Environnement économique",
    // compAlgoCont: "Je peux identifier mes aptitudes pour travailler dans une équipe.",


 
    BAC : "Baccalauréat général",
    BACCont : "Obtention du baccalauréat général spécialité Mathématique et NSI (Numérique et Science de l'informatique) au lycée Saint-Paul à Vannes (56).",

    ete2024 : "Été 2024",
    Moulin : "Chargé d'encadrement | Réceptioniste",
    MoulinCont : "J'ai été chargé d'encadrement d'une équipe d'ouvrier en situation de handicap chez Hovia à Arzon où j'ai encadré et participé aux taches d'entretient de logements hôteliers, à l'accueil des clients, à la gestion des factures ainssi qu'au service en salles. Cette expérience m'a permis de développer mes compétences en travail d'équipe, améliorer ma communication et fut une agréable éxperience sociale.",

    IUT : "1ére année de BUT Informatique",
    IUTCont : "Je suis en cours d'apprentissage à l'IUT de Lannion (22).",


    TitreProjets : "Mes Projets",


    Snake : "Jeu du Snake",
    InstPoste : "Instalation d'un poste",
    CreatBDD : "Création d'une base de données",
    JO2024 : "Création d'un site web",
    devApp : "Développement d'une<br>app",
    ServRes : "Instalation de services réseau",
    ExpBDD : "Exploitation d'une base de donnée",
    GProj : "Gestion d'un projet",


    ImpBesoin : "Implémentation d'un besoin",
    ImpBesoinCli : "Implémentation d'un besoin client",
    Dév : "Développement",
    AptTE : "Aptitudes travail d'équipe",


    Obj : "Objectifs",
    Déroul : "Déroulement",


    SnakeObjCont : "Conceptualiser et développer un jeu de snake en langage C a partir d'un cahier des charges. Remplire des batteries de tests.",
    SnakeDéroul : "étape 1 : maquette <br> étape 2 : cahier de tests <br> étape 3 : algorithme et décomposition <br> étape 4 : code source <br> étape 5 : traces d'exécution",
    
    InstPosDev : "Instalation d'un poste de développement",
    InstPosDevObj : "Exploitation de conteneurs Docker 'utilitaires' et création d'un Workflow chaînant ces conteneurs. L'objectif était la mise en place de briques logicielles s'intégrant à un environnement de développement complexe. Ces briques logicielles conteneurisées formaient un mécanisme quasi-automatique redéployable, à peu de frais (temps et compétences), ultérieurement et/ou par d'autres développeurs. Le projet permettait de générer des PDF de rapports commerciaux régionaux d'une entreprise.",
    InstPosDevDéroul : "Installation d'un poste pour le développement : mise en œuvre d'une chaîne de processus (workflow) s'intégrant dans un environnement de développement.<br>étape 1 : Identifier les outils nécessaires<br>étape 2 : Préparation des fichiers de test (donnés et configs)<br>étape 3 : Proposition d'un workflow enchaînant les outils<br>étape 4 : Production finale et 'scriptage' du workflow",

    CreatBDDFoot : "Création d'une base de donnée de Football",
    CreatBDDFootObj : "Création d'une base de donnée simulant le fonctionnement de ligues et de saisons du Football.",
    CreatBDDFootDéroul : "étape 1 : critique de la base de données existante + proposition d'un nouveau modèle (incluant les correstions) et sa transformation en modèle relationnel (script SQL)<br>étape 2 : répondre aux différentes requêtes (livrable sous forme de script SQL)<br>étape 3 : extension de la base de données (diagramme de classe + implémentation SQL) + proposition d'un jeu de données test pour peupler la nouvelle base de données",

    CreatWEB : "Création d'un site web pour les J-O 2024",
    CreatWEBObj : "Création d'un site web pour les J-O 2024 sur un sport en particulier. Maquettage et développement HTML, CSS et JavaScript.",
    CreatWEBDéroul : "étape 1 : Organisation d'équipe : répartition du travail, rôles....<br>étape 1 : Compréhension et rédaction des besoins<br>étape 1 : Réalisation de l'arborescence<br>étape 1 : Création de la charte graphique<br>étape 1 : Maquettage<br>étape 1 : Programmation avec outil de versionning<br>étape 1 : Présentation orale en équipe",

    DévAPP : "Développement d'une application de gestion d'une association de dance",
    DévAPPObj : "Conception, gestion et développement d'un logiciel de gestion d'une association de dance.",
    DévAPPDéroul : "étape 1 : Rédaction SEL <br>étape 2 : Organigrame tâches <br> étape 3 : Matrice RACI <br> étape 4 : Estimation des charges <br> étape 5 : Maquettage <br> étape 6 : Développement",

    InstServRes : "Instalation de services réseau",
    InstServResObj : "Création et configuration d'un environnement appache pour mettre en oeuvre un site et l'automatiser.",
    InstServResDéroul : "étape 1 : création serveur <br> étape 2 : configuration apache <br> étape 3 : création de scripts d'automatisation",

    ExplBDD : "Exploitation d'une base de donnée",
    ExplBDDObj : "Implémentation et peuplement d'un shéma relationel. Exploitation et analyse des données.",
    ExplBDDCont : "étape 1 : Traduction/implantation d'un schéma relationnel <br> étape 2 : Peuplement de la base de données <br> étape 3 : Exploitation de la base de données<br> étape 4 : Analyse statistique des données",

    GestProj : "Gestion d'un projet et mise en oeuvre d'un team building",
    GestProjObj : "Tournage et montage d'une vidéo de promotion d'un team building sur l'Ile de Bréhat.",
    GestProjDéroul : "étape 1 : Rédaction d'un rapport d'organisation <br> étape 2 : Création d'une infographie <br> étape 3 : Tournage d'une vidéo de promotion <br> étape 4 : Montage d'une vidéo de promotion",
    
    tel: "Téléphone :",
    copyright: "© 2025 Titouan Louis Renault — Tous droits réservés",


},
en: {
    competences: "SKILLS",
    diplomes: "CAREER",
    projets: "PROJECTS",
    
    
    aboutme: "Computer science student specialized in software development<br> looking for a 12-month internship",
    telechargementCV: "Download my CV",
    aboutmeTitle: "About Me",
    aboutmeText: "My name is Titouan, I am 18 years old and currently a first-year computer science student at the IUT of Lannion. I'm curious about many things, but what I love most is software development. I'm passionate about astronomy, video games, climbing and physics. I also enjoy psychology, 3D graphics, and music.",
    
    
    devWeb: "Web Development",
    devWebCont: "I have a foundational knowledge of web development and can use various programming languages like HTML and CSS as well as the Bootstrap framework.",
    
    devLog: "Software Development",
    devLogCont: "I am capable of developing software using languages such as Java17, Python, C, and JavaFX, including the use of JavaFX Scene Builder.",
    
    bdd: "DataBases",
    bddCont: "I have basic knowledge of databases, and I can use tools like MySQL and Oracle. I can design and populate database schemas.",
    
    systeme: "Systems",
    systemeCont: "I have some experience in system maintenance and can work with languages like PHP and Bash.",
    
    reseau:"Network Services",
    reseauCont:"I have basic knowledge in network installation and maintenance, and I am familiar with Cisco Packet Tracer.",
    
    compAlgo: "Algorithmic Thinking",
    compAlgoCont: "I can approach a wide range of problems using algorithmic thinking.",

    // devWeb: "Implementation of a client requirement",
    // devWebCont: "I can develop simple software applications such as a snake game.",

    // devLog: "Algorithm comparison",
    // devLogCont: "I am able to understand and construct algorithms.",

    // bdd: "Workstation setup",
    // bddCont: "I have basic knowledge to install and configure a workstation.",

    // systeme: "Database creation",
    // systemeCont: "I am capable of designing and implementing a database based on client specifications.",

    // reseau: "Requirements gathering",
    // reseauCont: "I have basic knowledge to identify business needs of clients and users.",

    // compAlgo: "Economic environment",
    // compAlgoCont: "I can identify my skills for working in a team.",

    

    BAC: "General Baccalaureate",
    BACCont: "Obtained the general baccalaureate with a specialization in Mathematics and NSI (Digital and Computer Science) at Saint-Paul High School in Vannes (56).",

    ete2024: "Summer 2024",
    Moulin: "Team Leader | Receptionist",
    MoulinCont: "I was in charge of supervising a team of workers with disabilities at Hovia in Arzon, where I oversaw and participated in the maintenance of hotel accommodations, welcomed guests, managed invoices, and served in the dining area. This experience allowed me to develop my teamwork skills, improve my communication, and was an enjoyable social experience.",

    IUT: "1st year of Bachelor's in Computer Science",
    IUTCont: "I am currently studying at the IUT of Lannion (22).",

    TitreProjets: "My Projects",

    Snake: "Snake Game",
    InstPoste: "Development Station Setup",
    CreatBDD: "Database Creation",
    JO2024: "Website Creation",
    devApp: "App<br>Development",
    ServRes: "Network Services Setup",
    ExpBDD: "Database Exploitation",
    GProj: "Project Management",

    ImpBesoin: "Need Implementation",
    ImpBesoinCli: "Client Need Implementation",
    Dév: "Development",
    AptTE: "Teamwork Skills",

    Obj: "Objectives",
    Déroul: "Steps",

    SnakeObjCont: "Design and develop a snake game in C language based on a specifications document. Complete a battery of tests.",
    SnakeDéroul: "step 1: mock-up <br> step 2: test sheet <br> step 3: algorithm and decomposition <br> step 4: source code <br> step 5: execution traces",

    InstPosDev: "Development Station Setup",
    InstPosDevObj: "Use of utility Docker containers and creation of a workflow chaining these containers. The goal was to set up software building blocks integrated into a complex development environment. These containerized software blocks formed a quasi-automatic mechanism that could be redeployed later and/or by other developers with minimal time and skill requirements. The project generated PDF reports of regional company data.",
    InstPosDevDéroul: "Setting up a development station: implementing a process chain (workflow) integrated into a development environment.<br>step 1: Identify the required tools<br>step 2: Prepare test files (data and configs)<br>step 3: Propose a workflow chaining the tools<br>step 4: Final production and workflow scripting",

    CreatBDDFoot: "Football Database Creation",
    CreatBDDFootObj: "Creation of a database simulating the operation of football leagues and seasons.",
    CreatBDDFootDéroul: "step 1: review of the existing database + proposal of a new model (including corrections) and its transformation into a relational model (SQL script)<br>step 2: respond to various queries (deliverable as an SQL script)<br>step 3: database extension (class diagram + SQL implementation) + proposal of a test data set to populate the new database",

    CreatWEB: "Website Creation for the 2024 Olympics",
    CreatWEBObj: "Creation of a website for the 2024 Olympics on a specific sport. Wireframing and development using HTML, CSS, and JavaScript.",
    CreatWEBDéroul: "step 1: Team organization: work distribution, roles...<br>step 1: Understanding and writing of requirements<br>step 1: Structure design<br>step 1: Creation of the graphic charter<br>step 1: Wireframing<br>step 1: Programming with version control<br>step 1: Oral team presentation",

    DévAPP: "Development of a management application for a dance association",
    DévAPPObj: "Design, management, and development of software for managing a dance association.",
    DévAPPDéroul: "step 1: SEL writing <br>step 2: Task flowchart <br> step 3: RACI matrix <br> step 4: Workload estimation <br> step 5: Wireframing <br> step 6: Development",

    InstServRes: "Network Services Setup",
    InstServResObj: "Creation and configuration of an Apache environment to deploy and automate a website.",
    InstServResDéroul: "step 1: server creation <br> step 2: Apache configuration <br> step 3: creation of automation scripts",

    ExplBDD: "Database Exploitation",
    ExplBDDObj: "Implementation and population of a relational schema. Data exploitation and analysis.",
    ExplBDDDéroul: "step 1: Translate/implement a relational schema <br> step 2: Populate the database <br> step 3: Exploit the database<br> step 4: Statistical data analysis",

    GestProj: "Project Management and Team Building Implementation",
    GestProjObj: "Filming and editing a promotional video for a team-building event on the island of Bréhat.",
    GestProjDéroul: "step 1: Write an organizational report <br> step 2: Create an infographic <br> step 3: Shoot a promotional video <br> step 4: Edit the promotional video",


    tel: "Phone :",
    copyright: "© 2025 Titouan Louis Renault — All rights reserved",
}
};


function setLanguage(lang) {
document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
    el.innerHTML = translations[lang][key];
    }
});
}


function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Fermer si clic en dehors de la modale
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};


function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("show");
  
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$(document).ready(function() {
    $(".checkbox").change(function() {
        if ($(this).is(":checked")) {
            setLanguage('en');
        } else {
            setLanguage('fr');
        }
    });
});


