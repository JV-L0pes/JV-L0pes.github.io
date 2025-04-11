// Menu Mobile
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
    navbar.classList.remove('scroll-up');
    navbar.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
    navbar.classList.remove('scroll-down');
    navbar.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// Typing Effect
const typingText = document.querySelector('.typing-text');
const words = ['Desenvolvedor em Formação', 'Estudante de DSM', 'Apaixonado por Tecnologia'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

// Iniciar o efeito de digitação
type();

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Fechar menu mobile se estiver aberto
      navLinks.classList.remove('active');
      menuBtn.classList.remove('active');
    }
  });
});

// Animação de entrada dos elementos
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Formulário de Contato
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por exemplo, usando fetch para enviar para um backend
    
    // Por enquanto, apenas mostra uma mensagem de sucesso
    alert('Mensagem enviada com sucesso!');
    contactForm.reset();
  });
}

// Efeito Parallax no Hero
const heroSection = document.querySelector('.hero-section');
const heroContent = document.querySelector('.hero-content');
const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;
  
  if (heroSection) {
    heroContent.style.transform = `translateY(${scroll * 0.5}px)`;
    heroImage.style.transform = `translateY(${scroll * -0.3}px)`;
  }
});

// Animação de scroll para elementos
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.skill-item, .about-content');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    
    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add('animate');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Animações com GSAP
window.onload = function() {
  gsap.from('.hero-content h1', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' });
  gsap.from('.hero-content h2', { duration: 1, y: 50, opacity: 0, ease: 'power2.out', delay: 0.5 });
  gsap.from('.hero-image img', { duration: 1, scale: 0.8, opacity: 0, ease: 'power2.out', delay: 1 });
};

// Aprimorar o uso do AOS
AOS.init({
  duration: 1200,
  once: true,
  mirror: false
});
