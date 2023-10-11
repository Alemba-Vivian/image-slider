import { plusSlides } from "./work";

export function createDom(){
const container = document.querySelector(".slideshow-container");

const tag1 = document.createElement('a');
tag1.classList.add("prev");
tag1.innerHTML =`<`;
tag1.addEventListener('click', (e)=>{
    console.log("hello there");
    plusSlides(-1);
})

const tag2 = document.createElement('a');
tag2.classList.add("next");
tag2.innerHTML =`>`;
tag2.addEventListener('click', (e)=>{
    console.log("hello there");
    plusSlides(1);
})

container.appendChild(tag1);
container.appendChild(tag2);

}

