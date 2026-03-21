
const translations = {

    fr: {
        // Navigation
        competences:        "COMPÉTENCES",
        diplomes:           "PARCOURS",
        projets:            "PROJETS",

        // Section présentation
        aboutme:            "Étudiant en 2ème année de BUT Informatique <br> à la recherche d'un stage de 8-12 semaines et d'une alternance de 12 mois",
        telechargementCV:   "Télécharger mon CV",

        // Section à propos
        aboutmeTitle:       "À propos de moi",
        aboutmeText:        "Je m'appelle Titouan, j'ai 19 ans et je suis actuellement étudiant en 2ème année de BUT Informatique à l'IUT de Lannion. Je m'intéresse à un peu tout mais j'aime par-dessus tout découvrir de nouvelles choses. Je m'intéresse à la musique, l'astronomie, les jeux vidéos et l'escalade. J'apprécie également la psychologie, la physique, la 3D et le dessin.",

        // Section compétences
        devWeb:             "Développement web",
        devWebCont:         "Je suis capable de développer des sites web en utilisant des langages tels que HTML, CSS et PHP ainsi que le framework Bootstrap.",

        devLog:             "Développement Logiciel",
        devLogCont:         "Je suis capable de développer des logiciels en utilisant des langages tels que Java 17, Python, C et JavaFX, ainsi que l'outil JavaFX Scene Builder.",

        bdd:                "Base de données",
        bddCont:            "Je possède des connaissances en base de données et sais utiliser des logiciels tels que MySQL et Oracle. Je suis capable de créer des schémas de base de données et de les peupler.",

        systeme:            "Système",
        systemeCont:        "Je possède des connaissances en maintenance système et sais utiliser des langages tels que PHP et Bash.",

        reseau:             "Service Réseau",
        reseauCont:         "Je possède des connaissances en maintenance et en installation de réseaux et sais utiliser le logiciel Cisco Packet Tracer.",

        compAlgo:           "Comparaison Algorithmique",
        compAlgoCont:       "Je suis capable d'adopter une approche algorithmique pour tout type de problèmes.",

        // Section parcours
        BAC:                "Baccalauréat général",
        BACCont:            "Obtention du baccalauréat général spécialités Mathématiques et NSI (Numérique et Sciences Informatiques) au lycée Saint-Paul à Vannes (56).",

        ete2024:            "Été 2024",
        Moulin:             "Chargé d'encadrement | Réceptionniste",
        MoulinCont:         "J'ai été chargé d'encadrement d'une équipe d'ouvriers en situation de handicap chez Hovia à Arzon, où j'ai encadré et participé aux tâches d'entretien de logements hôteliers, à l'accueil des clients, à la gestion des factures ainsi qu'au service en salle. Cette expérience m'a permis de développer mes compétences en travail d'équipe, d'améliorer ma communication et fut une agréable expérience sociale.",

        IUT:                "2ème année de BUT Informatique",
        IUTCont:            "Je suis actuellement en cours d'apprentissage à l'IUT de Lannion (22).",

        // Section projets — titres cartes
        TitreProjets:       "Mes Projets",
        Snake:              "Jeu du Snake",
        InstPoste:          "Installation d'un poste",
        CreatBDD:           "Création d'une base de données",
        JO2024:             "Création d'un site web",
        devApp:             "Développement d'une<br>app",
        ServRes:            "Installation de services réseau",
        ExpBDD:             "Exploitation d'une base de données",
        GProj:              "Gestion d'un projet",

        // Tags compétences cartes
        ImpBesoin:          "Implémentation d'un besoin",
        ImpBesoinCli:       "Implémentation d'un besoin client",
        Dév:                "Développement",
        AptTE:              "Aptitudes travail d'équipe",

        // Modals — labels génériques
        Obj:                "Objectifs",
        "Déroul":           "Déroulement",

        // Modal 1 — Snake
        SnakeObjCont:       "Conceptualiser et développer un jeu de Snake en langage C à partir d'un cahier des charges. Remplir des batteries de tests.",
        SnakeDéroul:        "étape 1 : maquette <br> étape 2 : cahier de tests <br> étape 3 : algorithme et décomposition <br> étape 4 : code source <br> étape 5 : traces d'exécution",

        // Modal 2 — Installation poste
        InstPosDev:         "Installation d'un poste de développement",
        InstPosDevObj:      "Exploitation de conteneurs Docker « utilitaires » et création d'un workflow chaînant ces conteneurs. L'objectif était la mise en place de briques logicielles s'intégrant à un environnement de développement complexe. Ces briques logicielles conteneurisées formaient un mécanisme quasi-automatique redéployable, à peu de frais (temps et compétences), ultérieurement et/ou par d'autres développeurs. Le projet permettait de générer des PDF de rapports commerciaux régionaux d'une entreprise.",
        InstPosDevDéroul:   "Installation d'un poste pour le développement : mise en œuvre d'une chaîne de processus (workflow) s'intégrant dans un environnement de développement.<br>étape 1 : Identifier les outils nécessaires<br>étape 2 : Préparation des fichiers de test (données et configs)<br>étape 3 : Proposition d'un workflow enchaînant les outils<br>étape 4 : Production finale et « scriptage » du workflow",

        // Modal 3 — BDD Football
        CreatBDDFoot:       "Création d'une base de données de Football",
        CreatBDDFootObj:    "Création d'une base de données simulant le fonctionnement de ligues et de saisons de Football.",
        CreatBDDFootDéroul: "étape 1 : critique de la base de données existante + proposition d'un nouveau modèle (incluant les corrections) et sa transformation en modèle relationnel (script SQL)<br>étape 2 : répondre aux différentes requêtes (livrable sous forme de script SQL)<br>étape 3 : extension de la base de données (diagramme de classe + implémentation SQL) + proposition d'un jeu de données test pour peupler la nouvelle base de données",

        // Modal 4 — Site JO 2024
        CreatWEB:           "Création d'un site web pour les J.O. 2024",
        CreatWEBObj:        "Création d'un site web pour les J.O. 2024 sur un sport en particulier. Maquettage et développement HTML, CSS et JavaScript.",
        CreatWEBDéroul:     "étape 1 : Organisation d'équipe : répartition du travail, rôles...<br>étape 2 : Compréhension et rédaction des besoins<br>étape 3 : Réalisation de l'arborescence<br>étape 4 : Création de la charte graphique<br>étape 5 : Maquettage<br>étape 6 : Programmation avec outil de versionnage<br>étape 7 : Présentation orale en équipe",

        // Modal 5 — App danse
        DévAPP:             "Développement d'une application de gestion d'une association de danse",
        DévAPPObj:          "Conception, gestion et développement d'un logiciel de gestion d'une association de danse.",
        DévAPPDéroul:       "étape 1 : Rédaction SEL<br>étape 2 : Organigramme des tâches<br>étape 3 : Matrice RACI<br>étape 4 : Estimation des charges<br>étape 5 : Maquettage<br>étape 6 : Développement",

        // Modal 6 — Services réseau
        InstServRes:        "Installation de services réseau",
        InstServResObj:     "Création et configuration d'un environnement Apache pour mettre en œuvre un site et l'automatiser.",
        InstServResDéroul:  "étape 1 : création du serveur<br>étape 2 : configuration Apache<br>étape 3 : création de scripts d'automatisation",

        // Modal 7 — Exploitation BDD
        ExplBDD:            "Exploitation d'une base de données",
        ExplBDDObj:         "Implémentation et peuplement d'un schéma relationnel. Exploitation et analyse des données.",
        ExplBDDDéroul:      "étape 1 : Traduction/implantation d'un schéma relationnel<br>étape 2 : Peuplement de la base de données<br>étape 3 : Exploitation de la base de données<br>étape 4 : Analyse statistique des données",

        // Modal 8 — Gestion de projet
        GestProj:           "Gestion d'un projet et mise en œuvre d'un team building",
        GestProjObj:        "Tournage et montage d'une vidéo de promotion d'un team building sur l'Île de Bréhat.",
        GestProjDéroul:     "étape 1 : Rédaction d'un rapport d'organisation<br>étape 2 : Création d'une infographie<br>étape 3 : Tournage d'une vidéo de promotion<br>étape 4 : Montage d'une vidéo de promotion",

        // Footer
        tel:                "Téléphone : ",
        copyright:          "© 2025 Titouan Louis-Renault — Tous droits réservés",
    },


    en: {
        // Navigation
        competences:        "SKILLS",
        diplomes:           "BACKGROUND",
        projets:            "PROJECTS",

        // Presentation section
        aboutme:            "2nd-year Computer Science student (BUT) <br> looking for an 8-12 week internship and a 12-month apprenticeship",
        telechargementCV:   "Download my CV",

        // About section
        aboutmeTitle:       "About me",
        aboutmeText:        "My name is Titouan, I am 19 years old and currently a 2nd-year Computer Science student at IUT de Lannion. I am curious about almost everything, but above all I love discovering new things. I am interested in music, astronomy, video games and rock climbing. I also enjoy psychology, physics, 3D and drawing.",

        // Skills section
        devWeb:             "Web Development",
        devWebCont:         "I am able to build websites using languages such as HTML, CSS and PHP, as well as the Bootstrap framework.",

        devLog:             "Software Development",
        devLogCont:         "I am able to develop software using languages such as Java 17, Python, C and JavaFX, as well as the JavaFX Scene Builder tool.",

        bdd:                "Databases",
        bddCont:            "I have solid knowledge of databases and am able to use tools such as MySQL and Oracle. I can design database schemas and populate them with data.",

        systeme:            "Systems",
        systemeCont:        "I have knowledge in system administration and maintenance, and can work with languages such as PHP and Bash.",

        reseau:             "Network Services",
        reseauCont:         "I have knowledge in network maintenance and installation, and can use Cisco Packet Tracer.",

        compAlgo:           "Algorithmic Thinking",
        compAlgoCont:       "I am able to apply an algorithmic approach to any kind of problem.",

        // Background section
        BAC:                "General Baccalaureate",
        BACCont:            "Awarded the general baccalaureate with specialisations in Mathematics and NSI (Digital Technology and Computer Science) at Lycée Saint-Paul in Vannes (56).",

        ete2024:            "Summer 2024",
        Moulin:             "Supervision Officer | Receptionist",
        MoulinCont:         "I was in charge of supervising a team of workers with disabilities at Hovia in Arzon, where I oversaw and participated in hotel accommodation maintenance tasks, guest reception, invoice management and dining room service. This experience helped me develop my teamwork skills, improve my communication and was a rewarding social experience.",

        IUT:                "2nd year of Computer Science degree (BUT)",
        IUTCont:            "I am currently studying at IUT de Lannion (22).",

        // Projects section — card titles
        TitreProjets:       "My Projects",
        Snake:              "Snake Game",
        InstPoste:          "Workstation Setup",
        CreatBDD:           "Database Creation",
        JO2024:             "Website Creation",
        devApp:             "App<br>Development",
        ServRes:            "Network Services Setup",
        ExpBDD:             "Database Exploitation",
        GProj:              "Project Management",

        // Skills tags on cards
        ImpBesoin:          "Requirements Implementation",
        ImpBesoinCli:       "Client Requirements Implementation",
        Dév:                "Development",
        AptTE:              "Teamwork Skills",

        // Modals — generic labels
        Obj:                "Objectives",
        "Déroul":           "Process",

        // Modal 1 — Snake
        SnakeObjCont:       "Conceptualise and develop a Snake game in C based on a specification document. Complete test suites.",
        SnakeDéroul:        "step 1: wireframe <br> step 2: test plan <br> step 3: algorithm and decomposition <br> step 4: source code <br> step 5: execution traces",

        // Modal 2 — Workstation setup
        InstPosDev:         "Development Workstation Setup",
        InstPosDevObj:      "Using utility Docker containers and creating a workflow chaining them together. The goal was to set up software components integrating into a complex development environment. These containerised components formed a near-automatic, redeployable mechanism, at low cost (time and skills), for future use and/or by other developers. The project generated PDF reports of regional sales data for a company.",
        InstPosDevDéroul:   "Setting up a development workstation: implementing a process chain (workflow) integrated into a development environment.<br>step 1: Identify the required tools<br>step 2: Prepare test files (data and configs)<br>step 3: Propose a workflow chaining the tools<br>step 4: Final production and scripting of the workflow",

        // Modal 3 — Football DB
        CreatBDDFoot:       "Football Database Creation",
        CreatBDDFootObj:    "Creating a database simulating the functioning of football leagues and seasons.",
        CreatBDDFootDéroul: "step 1: review of the existing database + proposal of a new model (including corrections) and its transformation into a relational model (SQL script)<br>step 2: answer the various queries (deliverable as an SQL script)<br>step 3: database extension (class diagram + SQL implementation) + proposal of a test dataset to populate the new database",

        // Modal 4 — 2024 Olympics website
        CreatWEB:           "Website Creation for the 2024 Olympic Games",
        CreatWEBObj:        "Creation of a website about the 2024 Olympic Games focusing on a specific sport. Wireframing and development in HTML, CSS and JavaScript.",
        CreatWEBDéroul:     "step 1: Team organisation: task allocation, roles...<br>step 2: Understanding and writing requirements<br>step 3: Defining the site map<br>step 4: Creating the visual identity<br>step 5: Wireframing<br>step 6: Development with version control<br>step 7: Oral team presentation",

        // Modal 5 — Dance app
        DévAPP:             "Development of a Dance Association Management Application",
        DévAPPObj:          "Design, management and development of a management software for a dance association.",
        DévAPPDéroul:       "step 1: SEL drafting<br>step 2: Task organigram<br>step 3: RACI matrix<br>step 4: Effort estimation<br>step 5: Wireframing<br>step 6: Development",

        // Modal 6 — Network services
        InstServRes:        "Network Services Setup",
        InstServResObj:     "Creation and configuration of an Apache environment to deploy and automate a website.",
        InstServResDéroul:  "step 1: server creation<br>step 2: Apache configuration<br>step 3: creation of automation scripts",

        // Modal 7 — DB exploitation
        ExplBDD:            "Database Exploitation",
        ExplBDDObj:         "Implementation and population of a relational schema. Data exploitation and analysis.",
        ExplBDDDéroul:      "step 1: Translation/implementation of a relational schema<br>step 2: Populating the database<br>step 3: Exploiting the database<br>step 4: Statistical data analysis",

        // Modal 8 — Project management
        GestProj:           "Project Management and Team-Building Event",
        GestProjObj:        "Filming and editing a promotional video for a team-building event on the Île de Bréhat.",
        GestProjDéroul:     "step 1: Writing an organisation report<br>step 2: Creating an infographic<br>step 3: Filming a promotional video<br>step 4: Editing the promotional video",

        // Footer
        tel:                "Phone: ",
        copyright:          "© 2025 Titouan Louis-Renault — All rights reserved",
    },

};

function setLanguage(lang) {
document.querySelectorAll("[data-trad]").forEach((el) => {
    const key = el.getAttribute("data-trad");
    if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
    }
});
}

$(document).ready(function() {
    $(".translate").change(function() {
        if ($(this).is(":checked")) {
            setLanguage('en');
        } else {
            setLanguage('fr');
        }
    });
});
