
/*Here is the what we do function */
$(document).ready(function () {
  $(".icons").click(function () {
    $(this).children(".hide").slideToggle("slow");
    $(this).children(".show").toggle("slow");
  });
});


/*Here is the portfolio hover function */
$(document).ready(function () {
  $(".card").hover(function () {
    $(this).children(".portfolio").fadeToggle("slow");
  });
});


/*Here is the form input and validation function */
$(document).ready(function() {
  $("form#formValidation").submit(function() {
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();
    if(name && email){
      alert(  " Dear " + name + " we have warmly received your message. " + " Thank you for reaching out to us " + ". We are looking forward to replay to you soon.");
    } else{
      alert(" The field form is Incomplete.");
    }
  });
});