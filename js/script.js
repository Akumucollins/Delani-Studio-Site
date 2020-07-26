$(document).ready(function(){
$(".icons").click(function(){
    $(this).children(".hide").slideToggle('slow');
    $(this).children(".show").toggle('slow');
});
});