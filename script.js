
const hamburger=document.querySelector('.hamburger');
const menu=document.querySelector('.menu');

hamburger.addEventListener('click',()=>{
    menu.classList.toggle('open');
});

$('.navbar a').on('click',function(){ /*tıkladığımız zaman toggle menu kapanacak*/
  $('.menu').removeClass('active')
 /* $(".menu").hide(1000); */
})
