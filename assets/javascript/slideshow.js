var i = 0;
var slider = document.querySelector('#slider');
var innerTextHeading = document.querySelector('.slide-text-heading');
var innerTextDescription = document.querySelector('.text-description');

slider.style.backgroundImage = `url('https://www.w3schools.com/w3images/ny.jpg')`;
innerTextHeading.innerHTML = "New York";
innerTextDescription.innerHTML = "The atmosphere in New York is lorem ipsum.";

function sliderObject(img, textHeading, textDescription) {
    this.img = img,
    this.textHeading = textHeading,
    this.textDescription = textDescription
}


function slideShow(...imgList) {
    var count = imgList.length - 1;
    if (i <= count) {
        slideImgUrl = `url('${imgList[i].img}')`;
        innerTextHeading.innerHTML = imgList[i].textHeading;
        innerTextDescription.innerHTML = imgList[i].textDescription;
        slider.style.backgroundImage = slideImgUrl
        i++;
    } else {
        i = 0;
    }
}
setInterval(slideShow, 4000,
    new sliderObject('https://www.w3schools.com/w3images/la.jpg', 'Los Angeles', 'We had the best time playing at Venice Beach!'),
    new sliderObject('https://www.w3schools.com/w3images/chicago.jpg', 'Chicago', 'Thank you, Chicago - A night we won\'t forget.'),
    new sliderObject('https://www.w3schools.com/w3images/ny.jpg', 'New York', 'The atmosphere in New York is lorem ipsum.'),
);