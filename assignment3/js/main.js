var images = [], x = 0;
images[0] = "images/image1.jpg";
images[1] = "images/image2.jpg";
images[2] = "images/image3.jpg";

function listenForDoubleClick(element) {
    element.contentEditable = true;
}

function startTimer() {
    setInterval(nextImage, 3000);
}

function nextImage() {
    if (x <= 1) {
    	++x;
        document.getElementById("article-picture").src = images[x];
        console.log("X: ", x)
    } else {
        x = 0;
        document.getElementById("article-picture").src = images[x];
    }
}