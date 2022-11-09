import axios from 'axios';

const base = "https://character-database.becode.xyz/";

// GET 
async function getCharacter() {
    let response = await axios.get(base + "characters")
    const data = await response.data;

    console.log(data.length)
    console.log(data)
}

async function fectData() {
    getCharacter();

    const image = document.querySelector('.profilePicture');
    const name = document.querySelector('.name');
    const shortDescription = document.querySelector('.shortDescription');
    const description = document.querySelector('.description');

    let findIndex = chars.findIndex(elements => elements.id === '301bc33c-62fe-4060-8047-45ca196019da');

    image.setAttribute('src', `data:image;base64,${chars[findIndex].image}`)
    name.innerText = chars[findIndex].name;
    shortDescription.innerText = chars[findIndex].shortDescription;
    description.innerText = chars[findIndex].description;
}

console.log('script ok')
document.querySelector('#readMore_button').addEventListener('click', fectData());

/* --> POUR L'INDEX 
for (let i = 0; i < arr.length; i++) {
    card();
}

function card() {
    const section = document.querySelector(".container");

    let div = document.createElement("div");
    section.appendChild(div);
    div.classList.add('card');
    //adding content
    const img = document.createElement("img");
    div.appendChild(img);
    const name = document.createElement("h2");
    div.appendChild(name);
    const shortDes = document.createElement("p");
    div.appendChild(shortDes);
    const charBtn = document.createElement("button");
    div.appendChild(charBtn);
}
*/






import axios from "axios";

