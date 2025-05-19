$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");            
        }
        // Scroll
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");            
        }
        else{
            $('.scroll-up-btn').removeClass("show");            
        }
    });
    // Scrip para el Slider
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar, script para el menu hamburguesa
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }); 

    // Script del typing animation
    var typed=new Typed(".typing",{
        strings:["Desarrollador web","Desarrollador Full Stack"],
        typeSpeed: 100,
        backSpace: 60,
        loop: true
    });
    var typed=new Typed(".typing-2",{
        strings:["Desarrollador web","Desarrollador Full Stack"],
        typeSpeed: 100,
        backSpace: 60,
        loop: true
    });

    // SCRIP de OWL carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});