
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const close = document.querySelector('.close');

    menuBtn.addEventListener('click', function() {
      navbar.classList.add('open');

      close.addEventListener('click', function(){
        console.log('clicked');
        navbar.classList.remove('open')
      });
      });

      //end of hamburger function


  let time = document.getElementById("current_time")

setInterval(()=>{
    let d= new Date();
time.innerHTML= d.toLocaleTimeString();
    
}, 1000);

//end of time function


// const container = document.querySelector('.container');

// let timeNow = new Date().getHours();
// let greetings =
//   timeNow >= 5 && timeNow < 12
//     ? "Good Morning, Mr. Governor"
//     : timeNow >= 12 && timeNow < 18
//     ? "Good Afternoon, Mr. Governor"
//     : "Good Evening, Mr. Governor";

// container.innerHTML = `<h1>${greetings}</h1>`;
