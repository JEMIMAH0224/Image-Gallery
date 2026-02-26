console.log("Ici votre code");

// Select the main image
// const mainImage = document.querySelector(".img-prime img");

// // Select all images inside the list
// const listImages = document.querySelectorAll(".img-list img");

// // Loop through each small image
// listImages.forEach(image => {

//     image.addEventListener("click", function () {

//         // Save current main image source
//         const currentMainSrc = mainImage.src;
//         const currentMainAlt = mainImage.alt;

//         // Replace main image with clicked image
//         mainImage.src = this.src;
//         mainImage.alt = this.alt;

//         // Replace clicked image with old main image
//         this.src = currentMainSrc;
//         this.alt = currentMainAlt;
//     });

// });


// Select the main image
const mainImage = document.querySelector(".img-prime img");

// Select all images inside the list
const thumbnails = document.querySelectorAll(".img-list img");

// Loop through each small image
thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener("click", function () {

        // Get the src and the alt of the image clicked on
        const newSrc = this.src;
        const newAlt = this.alt;

        // Modify the principle image
        mainImage.src = newSrc;
        mainImage.alt = newAlt;
    });

});