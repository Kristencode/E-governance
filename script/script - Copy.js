document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
  
    menuBtn.addEventListener('click', function() {
      navbar.classList.toggle('open');

      const close = document.querySelector('.close');
      close.addEventListener('click', function(){
        navbar.classList.toggle('close')


      });
      

    });

   
  });
  