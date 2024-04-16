let docTitle = document.querySelector('h1');
docTitle.innerText = "Modify the DOM";
docTitle.style.backgroundColor = "#FF69B4"
console.log(docTitle);

let body = document.querySelector('body');
for(let child of body.children){
    console.log(child);
}