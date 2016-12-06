$(document).ready(function() {
    
    
    
    $(window).scroll(function () {
            //Make nav bar fixed once it gets
            //to the top of the browser page
            var img = document.getElementById('headerIMG');
            var height = img.clientHeight;
            console.log($(window).scrollTop());
        if ($(window).scrollTop() > height) {
            $('nav').addClass('navbar-fixed');
            $('#brandItem').removeClass('hide');
            $('#aboutMe').css('marginTop','50px');
        }
        if ($(window).scrollTop() < height + 1) {
            $('nav').removeClass('navbar-fixed');
            $('#brandItem').addClass('hide');
            $('#aboutMe').css('marginTop','0px');
        }
    });
});
//Make About the Active nav button
function changeActiveAbout(){
    $('.aboutMe').addClass('active');
    $('.projects').removeClass('active');
    $('.contactMe').removeClass('active');
}
//Make Projects the Active nav button
function changeActiveProj(){
    $('.aboutMe').removeClass('active');
    $('.projects').addClass('active');
    $('.contactMe').removeClass('active');
}
//Make Contact Me the Active nav button
function changeActiveContact(){
    $('.aboutMe').removeClass('active');
    $('.projects').removeClass('active');
    $('.contactMe').addClass('active');
}