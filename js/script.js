$(".main").click(function(){
    $(this).children(".hide").slideToggle();
    $(this).children(".show img-fluid").toggle();
});