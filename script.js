// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '0.7rem 0';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.padding = '1rem 0';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert(`Thank you for your message, ${name}! I will get back to you soon.`);

    // Reset form
    contactForm.reset();
  });
}

// Add animation to skill bars
function animateSkills() {
  const skillLevels = document.querySelectorAll('.skill-level');

  skillLevels.forEach(skill => {
    const width = skill.style.width;
    skill.style.width = '0';

    setTimeout(() => {
      skill.style.width = width;
    }, 300);
  });
}

// Animate skills when skills section is in viewport
const skillsSection = document.querySelector('.skills');
let animated = false;

window.addEventListener('scroll', () => {
  if (isInViewport(skillsSection) && !animated) {
    animateSkills();
    animated = true;
  }
});

// Helper function to check if element is in viewport
function isInViewport(element) {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Initialize animations on page load
window.addEventListener('load', () => {
  // If skills section is already in viewport on page load
  if (isInViewport(skillsSection)) {
    animateSkills();
    animated = true;
  }

  // Initialize scroll reveal
  revealSections();
});

// Scroll reveal function
function revealSections() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(section => {
    const revealPoint = 150;
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add('active');
    }
  });
}

// Add event listener for scroll reveal
window.addEventListener('scroll', revealSections);

// Set skill level widths using CSS variables
document.querySelectorAll('.skill-level').forEach(skill => {
  const width = skill.style.width;
  skill.style.setProperty('--width', width);
});
