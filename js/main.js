// Configuração do ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 400
});

// Aplicando animações
sr.reveal('.hero-content', {});
sr.reveal('.hero-3d', { delay: 600 });
sr.reveal('.social-links', { delay: 800, origin: 'top' });

// Efeito de digitação no título
const title = document.querySelector('.glitch');
title.addEventListener('mouseover', () => {
    title.style.animation = 'none';
    void title.offsetWidth; // Trigger reflow
    title.style.animation = 'glitch 1s infinite';
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação do botão CTA
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    gsap.to(ctaButton, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
    });
});

ctaButton.addEventListener('mouseout', () => {
    gsap.to(ctaButton, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
    });
});

// Header animado no scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scroll down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Inicializa o efeito tilt nos cards
VanillaTilt.init(document.querySelectorAll(".char-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});

// Função para animar as barras de progresso
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-line span');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
    });
}

// Função para verificar se um elemento está visível na viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Observer para animar as barras de progresso quando visíveis
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observa a seção de skills
const skillsSection = document.querySelector('.tech-skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Configuração do ScrollReveal para os novos elementos
sr.reveal('.char-card', { 
    interval: 200,
    distance: '20px'
});

sr.reveal('.skills-group', {
    interval: 200,
    distance: '40px'
});

sr.reveal('.expertise-card', {
    interval: 200,
    distance: '20px'
});

// VanillaTilt para os cards de projeto
VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 12,
    speed: 400,
    glare: true,
    "max-glare": 0.18
});

// ScrollReveal para animação dos projetos
sr.reveal('.project-card', {
    interval: 120,
    distance: '40px',
    origin: 'bottom',
    duration: 900,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

// VanillaTilt para botão flutuante do WhatsApp
VanillaTilt.init(document.querySelectorAll(".whatsapp-float"), {
    max: 18,
    speed: 500,
    glare: true,
    "max-glare": 0.25
});

// ScrollReveal para a seção de contato
sr.reveal('.contact-section .container', {
    distance: '60px',
    origin: 'bottom',
    duration: 1200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
}); 