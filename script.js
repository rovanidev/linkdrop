//Swiper JS

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //Buscar()


    let buscar = document.querySelector('.bx-search-alt')
    let meme = document.querySelector('.meme')

   buscar.onclick  = () => {
    meme.classList.toggle('show')
    buscar.classList.toggle('bx-x')
   }

   //Portfólio

   let portfolio = document.querySelector('.projetos-icons')

   portfolio.onclick = () => {
    alert(`Portfólio em desenvolvimento <3.`)
   }
  
