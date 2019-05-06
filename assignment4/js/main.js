var images = [],
  x = 0;
images[0] = "images/image1.jpg";
images[1] = "images/image2.jpg";
images[2] = "images/image3.jpg";
images[3] = "images/image4.jpg";

// Editable Text

$("#body-text, #body-text-2").dblclick(function() {
  $(this).attr("contenteditable", "true");
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
