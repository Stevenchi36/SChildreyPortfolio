$(document).ready(function() {
  
    $(window).scroll(function () {
            //if you hard code, then use console
            //.log to determine when you want the 
            //nav bar to stick.  
            var img = document.getElementById('headerIMG');
            var height = img.clientHeight;
            console.log($(window).scrollTop());
        if ($(window).scrollTop() > height) {
            $('nav').addClass('navbar-fixed');
            $('#brandItem').removeClass('hide');
        }
        if ($(window).scrollTop() < height + 1) {
            $('nav').removeClass('navbar-fixed');
            $('#brandItem').addClass('hide');
        }
    });
});

function changeActiveAbout(){
    $('.aboutMe').addClass('active');
    $('.projects').removeClass('active');
    $('.contactMe').removeClass('active');
}

function changeActiveProj(){
    $('.aboutMe').removeClass('active');
    $('.projects').addClass('active');
    $('.contactMe').removeClass('active');
}

function changeActiveContact(){
    $('.aboutMe').removeClass('active');
    $('.projects').removeClass('active');
    $('.contactMe').addClass('active');
}