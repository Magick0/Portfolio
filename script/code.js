

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



const burgerBtn = document.getElementById('burgerBtn');
const burgerCont = document.getElementById('burgerCont');

function toggleMenu() {
  const isOpen = burgerBtn.classList.toggle('open');

  if (isOpen) {
    burgerCont.classList.add("open");
  } else {
    burgerCont.classList.remove("open");
  }
}

burgerBtn.addEventListener('click', toggleMenu);

burgerCont.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && window.innerWidth < 768) {
    burgerBtn.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerCont.setAttribute('hidden', '');
    burgerBtn.setAttribute('aria-label', 'Ouvrir le menu');
  }
});
