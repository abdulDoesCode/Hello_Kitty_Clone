// switching between images
const images = [
"http://drive.google.com/uc?export=view&id=1Do9YDl86AetVcQtgyK5i_dfsbQiIu6L0",
"http://drive.google.com/uc?export=view&id=1wulbYuBD7-Dy5Ac9158NTNDtunXmiuJn",
"http://drive.google.com/uc?export=view&id=1TzcM3fSu0_Xwh_rHsLlqutjcsdOfIiD9",
"http://drive.google.com/uc?export=view&id=1-H9ngRa7FhIW15rkzKawILP-f8eYYAKh"
];

const quotes = [
"You can never have too many friends",
"Friendship is the purr-fect gift that warms the heart and makes every day meow-gical.",
"With a smile and a bow, I'll sprinkle kindness everywhere I go, bringing happiness to all!",
"Love and kindness bloom like flowers in a Hello Kitty world, spreading joy to everyone!",
"Embrace your uniqueness like I embrace my bow; it's what makes you special and shines from within!",
"Let's share hugs, laughter, and dreams, making the world a cuddly and cheerful place!"
]
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

const changeText = () => {
    currentText.value = quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById("btn").addEventListener("click", function() {
    showImage();
    changeText();
})

