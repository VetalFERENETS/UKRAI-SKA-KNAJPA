
document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector(".header");
    const images = [
        "url(./html/photo_2024-12-11_13-53-13.png)",
        "url(./html/photo_2024-12-11_13-53-0.png)"
    ];
    let currentIndex = 0;

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        element.style.backgroundImage = images[currentIndex];
    }

    setInterval(changeBackgroundImage, 7000);
});

document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById("photo");
    const images = [
        "./html/IMG_5681 1.jpg",
        "./html/piwoo.png"
    ];
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }

    setInterval(changeImage, 8000);
});

document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById("phot");
    const images = [
        "./html/IMG_5684 2.jpg",
        "./html/menuu.png"
    ];
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }

    setInterval(changeImage, 8000);
});

