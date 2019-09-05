document.querySelectorAll('.container').forEach($button => {
  $button.addEventListener('click', event => {
    const target = event.target;
    const classes = target.classList;
    if (classes.contains('ripple')) classes.remove('ripple');
    const { offsetX, offsetY } = event;
    target.style.setProperty('--posX', `calc(${offsetX}px - 40px)`);
    target.style.setProperty('--posY', `calc(${offsetY}px - 40px)`);
    classes.add('ripple');
  });

  $button.addEventListener('animationend', event => {
    const classes = event.target.classList;
    classes.remove('ripple');
  });
});
