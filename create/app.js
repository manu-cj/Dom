function randomExaColor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    return color;
}
let randomColor = randomExaColor();

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
    article.appendChild(document.createElement("section"));
    let allSections = document.querySelectorAll('section');

    let numberRandom = Math.floor(Math.random() * becodeurs.length);
    
    const section = allSections[i];
    
    section.appendChild(document.createElement("p"));
    section.style.backgroundColor = randomExaColor();
    
    let p = document.querySelectorAll('p')
    p[i].innerText = becodeurs[numberRandom].nom
    becodeurs.splice(numberRandom, 1);
    console.log(becodeurs.length);
    
    
}









