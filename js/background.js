const images = [
    "꼬부기.png",
    "메타몽.png",
    "이브이.png",
    "이상해씨.png",
    "잠만보.png",
    "파이리.png",
    "푸린.png",
    "피카츄.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);