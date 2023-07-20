// switching between images
const images = [
"http://drive.google.com/uc?export=view&id=1Do9YDl86AetVcQtgyK5i_dfsbQiIu6L0",
"http://drive.google.com/uc?export=view&id=1wulbYuBD7-Dy5Ac9158NTNDtunXmiuJn",
"http://drive.google.com/uc?export=view&id=1TzcM3fSu0_Xwh_rHsLlqutjcsdOfIiD9",
"http://drive.google.com/uc?export=view&id=1-H9ngRa7FhIW15rkzKawILP-f8eYYAKh"
];
let currentIndex = 0;
let  currentText = document.getElementById("text-area");

function showImage() {
    let currentImage = document.querySelector(".container-image img");
    currentImage.src = images[currentIndex];

    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
}

function changeText(){
    currentText.val = " ";
    
}

document.getElementById("btn").addEventListener("click", function() {
    showImage();
    changeText();
})

