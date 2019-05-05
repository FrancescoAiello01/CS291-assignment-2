var images = [],
  x = 0;
images[0] = "images/image1.jpg";
images[1] = "images/image2.jpg";
images[2] = "images/image3.jpg";
images[3] = "images/image4.jpg";

function listenForDoubleClick(element) {
  element.contentEditable = true;
}

$("#body-text, #body-text-2").dblclick(function() {
  $(this).attr("contenteditable", "true");
});

$(document).ready(function() {
  setInterval(nextImage, 3000);
});

function nextImage() {
  if (x <= 2) {
    ++x;
    document.getElementById("article-picture").src = images[x];
  } else {
    x = 0;
    document.getElementById("article-picture").src = images[x];
  }
}

//tried to do this in a loop, but strings tripped me up
var clearing = document.getElementById("clear");
clearing.onclick = function() {
  var thingy = document.getElementById("container1").style;
  thingy.display = "none";
  var thingy = document.getElementById("container2").style;
  thingy.display = "none";
  var thingy = document.getElementById("container3").style;
  thingy.display = "none";
  var thingy = document.getElementById("container4").style;
  thingy.display = "none";
  var thingy = document.getElementById("container5").style;
  thingy.display = "none";
  var thingy = document.getElementById("container6").style;
  thingy.display = "none";
  var thingy = document.getElementById("container7").style;
  thingy.display = "none";
  var thingy = document.getElementById("container8").style;
  thingy.display = "none";
};
var resetting = document.getElementById("reset");
resetting.onclick = function() {
  var thingy = document.getElementById("container1").style;
  thingy.display = "block";
  var thingy = document.getElementById("container2").style;
  thingy.display = "block";
  var thingy = document.getElementById("container3").style;
  thingy.display = "block";
  var thingy = document.getElementById("container4").style;
  thingy.display = "block";
  var thingy = document.getElementById("container5").style;
  thingy.display = "block";
  var thingy = document.getElementById("container6").style;
  thingy.display = "block";
  var thingy = document.getElementById("container7").style;
  thingy.display = "block";
  var thingy = document.getElementById("container8").style;
  thingy.display = "block";
};

var ele1 = document.getElementById("box1");
var ele2 = document.getElementById("box2");
var ele3 = document.getElementById("box3");
var ele4 = document.getElementById("box4");
var ele5 = document.getElementById("box5");
var ele6 = document.getElementById("box6");
var ele7 = document.getElementById("box7");
var ele8 = document.getElementById("box8");
ele1.onclick = function() {
  var thingy = document.getElementById("container1").style;
  thingy.display = "none";
};
ele2.onclick = function() {
  var thingy = document.getElementById("container2").style;
  thingy.display = "none";
};
ele3.onclick = function() {
  var thingy = document.getElementById("container3").style;
  thingy.display = "none";
};
ele4.onclick = function() {
  var thingy = document.getElementById("container4").style;
  thingy.display = "none";
};
ele5.onclick = function() {
  var thingy = document.getElementById("container5").style;
  thingy.display = "none";
};
ele6.onclick = function() {
  var thingy = document.getElementById("container6").style;
  thingy.display = "none";
};
ele7.onclick = function() {
  var thingy = document.getElementById("container7").style;
  thingy.display = "none";
};
ele8.onclick = function() {
  var thingy = document.getElementById("container8").style;
  thingy.display = "none";
};
