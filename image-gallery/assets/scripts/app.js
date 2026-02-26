console.log("Ici votre code");

// Select the main image
const mainImage = document.querySelector(".img-prime img");

// Select all images inside the list
const listImages = document.querySelectorAll(".img-list img");

// Loop through each small image
listImages.forEach(image => {

    image.addEventListener("click", function () {

        // Save current main image source
        const currentMainSrc = mainImage.src;
        const currentMainAlt = mainImage.alt;

        // Replace main image with clicked image
        mainImage.src = this.src;
        mainImage.alt = this.alt;

        // Replace clicked image with old main image
        this.src = currentMainSrc;
        this.alt = currentMainAlt;
    });

});