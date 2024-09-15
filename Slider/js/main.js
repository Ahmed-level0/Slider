var imgs = Array.from(document.querySelectorAll(".image img"));
var mainImgBox = document.querySelector("#mainImgBox")
var imgSrc;
var index;
var mainImg = document.querySelector("#mainImg")
var closeButton = document.querySelector("#closeButton");
var nextButton = document.querySelector("#nextButton");
var previousButton = document.querySelector("#previousButton");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (event) {
        imgSrc = event.target.getAttribute("src")
        mainImg.style.backgroundImage = `url(${imgSrc})`;
        mainImgBox.classList.replace("d-none", "d-flex");
        index = imgs.indexOf(event.target);
    })
}

nextButton.addEventListener("click", showNext)
previousButton.addEventListener("click", showPrevious)
closeButton.addEventListener("click", closeImg)
mainImgBox.addEventListener("click", function (event) {
    if (event.target != mainImg && event.target != previousButton && event.target != nextButton) {
        closeImg();
    }
})

function closeImg() {
    mainImgBox.classList.replace("d-flex", "d-none");
}

function showNext() {
    index += 1;
    if (index >= imgs.length) {
        index = 0;
    }
    imgSrc = imgs[index].getAttribute("src")
    mainImg.style.backgroundImage = `url(${imgSrc})`;
}

function showPrevious() {
    index -= 1;
    if (index < 0) {
        index = imgs.length - 1;
    }
    imgSrc = imgs[index].getAttribute("src")
    mainImg.style.backgroundImage = `url(${imgSrc})`;
}

document.addEventListener("keyup", function (event) {
    if (mainImgBox.classList.contains("d-flex")) {
        switch (event.key) {
            case "Escape":
                closeImg();
                break;
            case "ArrowRight":
                showNext();
                break;
            case "ArrowLeft":
                showPrevious();
                break;
            default:
                break;
        }
    }
});