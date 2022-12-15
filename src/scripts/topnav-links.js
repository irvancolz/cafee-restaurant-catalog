const links = document.querySelectorAll('#topnav .links');
links.forEach((list, i) => {
  const link = list;
  link.style.transitionDelay = `.${i}s`;
});
