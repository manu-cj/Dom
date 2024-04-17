let textColor = "black";
function randomColor() {
    let blue = Math.floor(Math.random() * 256);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    let backgroundColor = 'rgb(' + red + ',' +green + ',' + blue + ')';
    

    

    return backgroundColor;
}


const becodeurs =  [
    {nom: 'Lyne'},
    {nom: 'Dj3y'},
    {nom: 'Zara'},
    {nom: 'Manu le goat'},
    {nom: 'Adrien'},
    {nom: 'NathAmd'},
    {nom: 'Xeless le goat'},
    {nom: 'Caroline'},
    {nom: 'Arnaud'},
    {nom: 'Stacy'},
    {nom: 'Justine'},
    {nom: 'Angel'},
    {nom: 'Dylan'},
    {nom: 'Adca'},
    {nom: 'isabelle'},
    {nom: 'doblaria'},
    {nom: 'Youri'},
    {nom: 'Giovanni le goat de la finance'},
    {nom: 'Iliess le goat'},
    {nom: 'Justine L'},
    {nom: 'Denis'},
    {nom: 'Mohamed'},
    {nom: 'ludovic'},
    {nom: 'Maryam'},
    {nom: 'Julie'},
    {nom: 'Jordan'},
    {nom: 'Tasha'},
    ];

const body = document.querySelector('body');
const article = document.querySelector('article');
for (let i = 0; i < becodeurs.length; i++) {
    let blue = Math.floor(Math.random() * 256);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    let backgroundColor = 'rgb(' + red + ',' +green + ',' + blue + ')';

    if(blue < 125 && red < 125 && green < 125){
        textColor = "white";
    }
    else {
        textColor = "black";
    }


    article.appendChild(document.createElement("section"));
    let allSections = document.querySelectorAll('section');

    let numberRandom = Math.floor(Math.random() * becodeurs.length);
    
    const section = allSections[i];
    
    section.appendChild(document.createElement("p"));
    section.style.backgroundColor = backgroundColor;
    
    let p = document.querySelectorAll('p')
    p[i].innerText = becodeurs[numberRandom].nom
    becodeurs.splice(numberRandom, 1);
    console.log(becodeurs.length);
    p[i].style.color = textColor;
    
}









