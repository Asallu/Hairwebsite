console.log("test");
var images = document.getElementsByClassName("image");
console.log(images);



for (i = 0; i < images.length; i++){
    images[i].addEventListener("load", () => { 
        console.log("one");
        images[i].classList.add("animate");
    })
};