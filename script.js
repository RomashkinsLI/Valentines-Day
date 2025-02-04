import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const valentineQuestion = document.getElementById('valentineQuestion');
const imgsContainer = document.getElementById('imgs_container');
const textContainer = document.getElementById('text_container');
const displayImgs = document.getElementById('display_imgs')
const imgsPaths = [
    "./imgs/sad-gif-1.gif",
    "./imgs/sad-gif-2.gif",
    "./imgs/sad-gif-3.gif",
    "./imgs/sad-gif-4.gif",
];


let buttonWidth = 100;
let buttonHeight = 65;
let fontSize = 25;
let clickCount = 0;
let noButtonWidth = 100;
let noButtonHeight = 65;
let noFontSize = 25;


yesButton.addEventListener('click',() => {
    displayImgs.src = "./imgs/happy.gif"
    valentineQuestion.textContent = "Woohoo <3 🎉";
    document.getElementById("btns_container").style.display = "none";
    imgsContainer.style.width = "320px"
    valentineQuestion.style.fontSize = '40px'
    textContainer.style.bottom = "220px"
    confetti();
})

noButton.addEventListener('click', () => {
    if (clickCount < 4){
        
        clickCount++;

        displayImgs.src = imgsPaths[clickCount-1];

        buttonWidth += 50;
        buttonHeight += 50;
        fontSize += 30;
        yesButton.style.height = `${buttonHeight}px`;
        yesButton.style.width = `${buttonWidth}px`;
        yesButton.style.fontSize = `${fontSize}px`;
        
        noButtonWidth -= 5;
        noButtonHeight -= 5;
        noFontSize -= 3;
        noButton.style.height = `${noButtonHeight}px`;
        noButton.style.width = `${noButtonWidth}px`;
        noButton.style.fontSize = `${noFontSize}px`;

        if (clickCount == 4){
            noButton.style.height = "0px";
            noButton.style.width = "0px";
            noButton.style.fontSize = "0px";
            noButton.style.margin = "-10px"

            yesButton.style.height = "105%";
            yesButton.style.width = "105%";
            yesButton.style.fontSize = `${fontSize}px`;
            yesButton.style.animation = 'none'
        };
    }
    
})

