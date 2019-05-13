$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        450:{
            item:3
        },
        992:{
            items:5
        },
        1201:{
            items:7
        }
    }
});

var menuButton = document.querySelector(".menu-toggler");
var menuBar = document.querySelector("nav");

var subMenuToggle = document.querySelectorAll(".drop-down");

menuButton.addEventListener("click", function(){
    menuBar.classList.toggle("menu-active");
});

//var subMenu1 = document.querySelector("#sub-menu-1");
//var dropDown1 = document.querySelector("#drop-menu-1");
//
//subMenu1.addEventListener("click", function(){
//    dropDown1.classList.toggle("sub-menu-active");

//});
//
//subMenuToggle.addEventListener("click", function(){
//   console.log("sub menu opened"); 
//});

for(var i =0; i<subMenuToggle.length; i++) {
  subMenuToggle[i].addEventListener("click", function(){
     this.classList.toggle("drop-menu");
  });
}