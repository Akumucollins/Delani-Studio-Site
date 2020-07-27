$(document).ready(function () {
  $(".icons").click(function () {
    $(this).children(".hide").slideToggle("slow");
    $(this).children(".show").toggle("slow");
  });
});
$(document).ready(function () {
  $(".card").hover(function () {
    $(this).children(".portfolio").fadeToggle("slow");
  });
});

$(document).ready(function () {
  $("#formInput").submit(function (event) {
    var name = "input#name".val();
    console.log(name);
  });
  $("#formInput").submit(function (event) {
    var email = $("input#email").val();
    console.log(email);
  });
  $("#formInput").submit(function (event) {
    var message = $("textarea#message").val();
    console.log(message);
  });
  $("button").on("click", function () {
    $("form").each(function () {
      this.reset();
    });
  });

  event.preventDefault();
});

// $(document).ready(function () {
$("button").click(function (event) {
  var customer = document.getElementById("name").value;
  alert(
    " Dear " +
      customer +
      " we have warmly received your message. " +
      " Thank you for reaching out to us " +
      " We are looking forward to replay to you soon."
  );
  event.preventDefault();
});

// });
