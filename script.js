// Add smooth scroll to links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});
