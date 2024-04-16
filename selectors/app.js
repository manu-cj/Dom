let importantElement = document.querySelectorAll('.important');
console.log(importantElement);
for (let i = 0; i < importantElement.length; i++) {
    const element = importantElement[i];
    element.title = 'This is an important item';
    console.log(element);
}

allImg = document.querySelectorAll('img');
for (let j = 0; j < allImg.length; j++) {
    const element = allImg[j];
    if (!element.classList.contains('important')) {
        element.style.display = 'none';
        
    }
}


function randomColor() {
    let blue = Math.floor(Math.random() * 256);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    let color = 'rgb(' + red + ',' +green + ',' + blue + ')';

    return color;
}

let color = randomColor();
console.log(color);

allP = document.querySelectorAll('p');

for (let k = 0; k < allP.length; k++) {
    const element = allP[k];
    element.style.color = randomColor();
    
}