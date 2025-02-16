$(document).ready(function(){
    var num = $(".navbar").offset().top; 
    console.log(num);
    $(window).bind('scroll', function() { 
        if ($(window).scrollTop() > 100) {  
        $('.navbar').addClass('fixed');
        } 
        else {  
        $('.navbar').removeClass('fixed');    
        } 
    });
});