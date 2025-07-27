let current = 0;
const testimonials = document.querySelectorAll('.testimonial');

setInterval(() => {
  testimonials[current].classList.remove('active');
  current = (current + 1) % testimonials.length;
  testimonials[current].classList.add('active');
}, 4000);
