var images = [],
  x = 0;
images[0] = "images/image1.jpg";
images[1] = "images/image2.jpg";
images[2] = "images/image3.jpg";
images[3] = "images/image4.jpg";

// Editable Text

//paragraph 1
$("#body-text").dblclick(function() {
  $("#body-textarea").attr("style", "display:block");
  $("#submit-1").attr("style", "display:block");
  $(this).attr("style", "display:none");
});

$("#submit-1").click(function() {
  $(this).attr("style", "display:none");
  $("#body-textarea").attr("style", "display:none");
  var body_text_new = $("#body-textarea").val();
  $("#body-text").text(body_text_new);
  $("#body-text").attr("style", "display:block");
});

//paragaph 2
$("#body-text-2").dblclick(function() {
  $("#body-textarea2").attr("style", "display:block");
  $("#submit-2").attr("style", "display:block");
  $(this).attr("style", "display:none");
});

$("#submit-2").click(function() {
  $(this).attr("style", "display:none");
  $("#body-textarea2").attr("style", "display:none");
  var body_text_new = $("#body-textarea2").val();
  $("#body-text-2").text(body_text_new);
  $("#body-text-2").attr("style", "display:block");
});

// Carousel

$(document).ready(function() {
  setInterval(nextImage, 3000);
});

function nextImage() {
  if (x <= 2) {
    ++x;
    $("#article-picture").attr("src", images[x]);
  } else {
    x = 0;
    $("#article-picture").attr("src", images[x]);
  }
}

// Tiles

$(".xbutton").click(function() {
  $(this)
    .parent()
    .hide();
});

$("#clear").click(function() {
  for (var i = 0; i < 9; i++) {
    $("#container" + i).hide();
  }
});
$("#reset").click(function() {
  for (var i = 0; i < 9; i++) {
    $("#container" + i).show();
  }
  $(".container").show();
});
