const marquees = document.querySelectorAll('.animate-marquee');

marquees.forEach(marquee => {
  marquee.addEventListener('mouseenter', () => {
    // Pause semua marquee
    marquees.forEach(m => {
      m.style.animationPlayState = 'paused';
    });
  });

  marquee.addEventListener('mouseleave', () => {
    // Jalankan semua marquee
    marquees.forEach(m => {
      m.style.animationPlayState = 'running';
    });
  });
});
