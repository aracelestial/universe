//when clicking the button, make an eyeball appear

$("#eye-button").click(function () {

   
   $("#eye-button").html("I SEE YOU!");

   $("body").append("<img width=100px src='eye.png'>");

});

//change background color after 10 times clicking the button

