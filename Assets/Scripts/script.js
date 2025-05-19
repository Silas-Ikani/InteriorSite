// reveal effect
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
  
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

//   Reveal zoom effect
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
  
    reveals.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); 

