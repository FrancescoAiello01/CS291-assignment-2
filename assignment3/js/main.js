var images = [], x = 0;
images[0] = "images/image1.jpg";
images[1] = "images/image2.jpg";
images[2] = "images/image3.jpg";
images[3] = "images/image4.jpg";

function listenForDoubleClick(element) {
    element.contentEditable = true;
}

function startTimer() {
    setInterval(nextImage, 3000);
}

function nextImage() {
    if (x <= 2) {
        ++x;
        document.getElementById("article-picture").src = images[x];
    } else {
        x = 0;
        document.getElementById("article-picture").src = images[x];
    }
}

function disappear(){
	var off=document.getElementsByClassName('li');
	var thing = 1;
		off[thing].display = "none";
}

var ele = document.getElementsByClassName("xbutton");
var elenum = ele.length;
//for(var i = 0; i < elenum; i++){
//	ele[i].addEventListener("click",disappear(), false)
//}
ele[1].addEventListener('blur', alert("you did something"), false)