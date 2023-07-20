function downloadImageAndBackground() {
    downloadBackgroundColor();
    preloadImage(images[currentIndex]).then(() => {
        downloadImage(images[currentIndex], "Hello_Kitty_Image.jpg");
    });
}

function downloadImage(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = filename;
            a.click();
            URL.revokeObjectURL(a.href); // Clean up the URL created by createObjectURL
        })
        .catch(error => console.error('Error downloading image:', error));
}

function downloadBackgroundColor() {
    const backgroundColor = document.body.style.backgroundColor;
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = "Hello_Kitty_Background.png";
        a.click();
        URL.revokeObjectURL(a.href); // Clean up the URL created by createObjectURL
    }, 'image/png');
}

function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
    });
}
