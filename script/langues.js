
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

