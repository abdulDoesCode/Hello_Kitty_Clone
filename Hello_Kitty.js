const images = [
"http://drive.google.com/uc?export=view&id=1Do9YDl86AetVcQtgyK5i_dfsbQiIu6L0",
"http://drive.google.com/uc?export=view&id=1wulbYuBD7-Dy5Ac9158NTNDtunXmiuJn",
"http://drive.google.com/uc?export=view&id=1TzcM3fSu0_Xwh_rHsLlqutjcsdOfIiD9",
"http://drive.google.com/uc?export=view&id=1-H9ngRa7FhIW15rkzKawILP-f8eYYAKh"
];
var currentIndex = 0;

function showImage() {
    var currentImage = document.querySelector(".container-image img");
    currentImage.src = images[currentIndex];
}

document.getElementById("btn").addEventListener("click", function() {
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    showImage();
})