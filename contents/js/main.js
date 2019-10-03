//************Font size script*************//
var root = document.querySelector(":root");
var increaseFontButton = document.querySelector("#font-inc");
var defaultFontButton = document.querySelector("#font-default");
var decreaseFontButton = document.querySelector("#font-dec");

increaseFontButton.addEventListener("click", function(){
    root.style.fontSize= "20px";
});

defaultFontButton.addEventListener("click", function(){
    root.style.fontSize= "16px";
});

decreaseFontButton.addEventListener("click", function(){
    root.style.fontSize= "12px";
});

// ***************custom search box  script*********///
var searchBtn = document.querySelector("#search-btn");
var searchBox = document.querySelector("#custom-search");

searchBtn.addEventListener("click", function(){
    searchBox.classList.toggle("search-box-on");
});

//***** NAVIGATION SCRIPT ******//
var menuButton = document.querySelector(".menu-toggler");
var menuBar = document.querySelector("nav");

var subMenuToggle = document.querySelectorAll(".drop-down");

var screenSize = window.innerWidth;

if (screenSize < "991") {
    for(var i =0; i<subMenuToggle.length; i++) {
      subMenuToggle[i].addEventListener("click", function(){
         this.classList.toggle("drop-menu");
});
}
}

menuButton.addEventListener("click", function(){
    menuBar.classList.toggle("menu-active");
});


//logo banner script //
$('.logo-carousel').owlCarousel({
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


// Hero slide script //
var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = 'contents/images/home-carousel/nvm-02.jpg';
backgrounds[1] = 'contents/images/home-carousel/nvm-01.jpg';
backgrounds[2] = 'contents/images/home-carousel/nvm-03.jpg';
backgrounds[3] = 'contents/images/home-carousel/nvm-04.jpg';
backgrounds[4] = 'contents/images/home-carousel/nvm-05.jpg';
backgrounds[5] = 'contents/images/home-carousel/nvm-06.jpg';
backgrounds[6] = 'contents/images/home-carousel/nvm-07.jpg';
backgrounds[7] = 'contents/images/home-carousel/nvm-08.jpg';
//backgrounds[8] = 'contents/images/home-carousel/09.jpg';
//backgrounds[9] = 'contents/images/home-carousel/10.jpg';
//backgrounds[10] = 'contents/images/home-carousel/11.jpg';
//backgrounds[11] = 'contents/images/home-carousel/12.jpg';
//backgrounds[12] = 'contents/images/home-carousel/13.jpg';
//backgrounds[13] = 'contents/images/home-carousel/14.jpg';
//backgrounds[14] = 'contents/images/home-carousel/15.jpg';
//backgrounds[15] = 'contents/images/home-carousel/16.jpg';
//backgrounds[16] = 'contents/images/home-carousel/17.jpg';
//backgrounds[17] = 'contents/images/home-carousel/18.jpg';
//backgrounds[18] = 'contents/images/home-carousel/19.jpg';
//backgrounds[19] = 'contents/images/home-carousel/20.jpg';
//backgrounds[20] = 'contents/images/home-carousel/21.jpg';

function changeBackground() {
    currentBackground++;
    if(currentBackground > 7) currentBackground = 0;

    $('.hero-slide').fadeOut(100,function() {
        $('.hero-slide').css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        $('.hero-slide').fadeIn(100);
    });


    setTimeout(changeBackground, 4000);
}

$(document).ready(function() {
    setTimeout(changeBackground, 50);        
});

//*******SCROL BUTTON SCRIPT******//
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}