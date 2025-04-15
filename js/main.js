// Menu Mobile
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.classList.toggle('active');
  
  // Impedir rolagem quando o menu mobile está aberto
  if (navLinks.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});

// Fechar menu quando clicar fora
document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('active') && 
      !e.target.closest('.nav-links') && 
      !e.target.closest('.menu-btn')) {
    navLinks.classList.remove('active');
    menuBtn.classList.remove('active');
    body.style.overflow = '';
  }
});

// Fechar menu quando a janela for redimensionada para tamanho desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    menuBtn.classList.remove('active');
    body.style.overflow = '';
  }
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
      // Adicionar offset para compensar a altura do navbar fixo
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Fechar menu mobile se estiver aberto
      navLinks.classList.remove('active');
      menuBtn.classList.remove('active');
      body.style.overflow = '';
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
  
  if (heroContent && heroImage && window.innerWidth > 768) {
    heroContent.style.transform = `translateY(${scroll * 0.25}px)`;
    heroImage.style.transform = `translateY(${scroll * -0.15}px)`;
  } else if (heroContent && heroImage) {
    // Reduzir ou remover o efeito em dispositivos móveis
    heroContent.style.transform = '';
    heroImage.style.transform = '';
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

// Detecção de toque para melhorar a experiência em dispositivos móveis
function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
  document.body.classList.add('touch-device');
  
  // Aumentar a área de clique para elementos interativos em telas touch
  const touchElements = document.querySelectorAll('.btn, .nav-links a, .contact-item a, .skill-item');
  touchElements.forEach(el => {
    el.style.padding = '0.8rem 1.2rem';
    el.style.minHeight = '44px'; // Altura mínima recomendada para alvos de toque
  });
}

// Animações com GSAP
window.onload = function() {
  gsap.from('.hero-content h1', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' });
  gsap.from('.hero-content h2', { duration: 1, y: 50, opacity: 0, ease: 'power2.out', delay: 0.5 });
  gsap.from('.hero-image img', { duration: 1, scale: 0.8, opacity: 0, ease: 'power2.out', delay: 1 });
};

// Inicializar AOS com configurações melhoradas para mobile
AOS.init({
  duration: 800,
  once: true,
  mirror: false,
  disable: window.innerWidth < 768 ? 'phone' : false // Desabilitar em telefones para melhor performance
});
