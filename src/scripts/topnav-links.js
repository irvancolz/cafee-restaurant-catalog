const links = document.querySelectorAll("#topnav .links");
links.forEach((link, i) => {
  link.style.transitionDelay = `.${i}s`;
});
