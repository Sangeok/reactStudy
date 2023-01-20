function showImage() {
    var arrayImage = new Array();
    arrayImage[0] = require('.././images/모델1.jpg');
    arrayImage[1] = require('.././images/모델2.jpg');
    arrayImage[2] = require('.././images/모델3.jpg');
  
    var imageNumber = Math.round(Math.random*3);
    var objImage = document.getElementById("id__main__image");
    objImage.src = arrayImage[imageNumber];
    setTimeout(showImage,5000);
  }