import axios from 'axios';

const body = document.querySelector("body");
const apiRoot = "https://character-database.becode.xyz";

// GET 
async function getChars() {
    console.log("now async ....");
    let response;
    try {
        console.log("trying ....");
        response = await axios.get(apiRoot + "/characters");

        for (let el of response.data) {
            // console.log(el);

            let card = document.createElement("div");
            console.log(card);
            card.setAttribute("class", "card");

            let title = document.createTextNode(el.name);
            console.log(title);

            let desc = document.createTextNode(el.description);
            let p = document.createElement("p");
            p.setAttribute("class", "description");
            p.appendChild(desc);

            let short = document.createTextNode(el.shortDescription);
            let h3 = document.createElement("h3");
            h3.setAttribute("class", "shortDescription");
            h3.appendChild(short);

            let picture = "data:image/gif;base64," + el.image;

            let image = document.createElement("img");
            image.setAttribute("src", picture);
            image.setAttribute("class", "profilePicture");

            let h2 = document.createElement("h2");
            h2.setAttribute("class", "name");
            h2.appendChild(title);
            console.log(h2);

            let btn_more = document.createElement("a");
            btn_more.setAttribute("class", "btnMore");
            // TODO create url with id as parameter
            btn_more.setAttribute("href", "singleCharacter.html");
            let btn_moreText = document.createTextNode("See Character");
            btn_more.appendChild(btn_moreText);

            card.appendChild(image);
            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(p);
            card.appendChild(btn_more);

            body.appendChild(card);
        }
    } catch (err) {
        console.log("catch ....");
        error(err);
    }
}

console.log("getting chars...");

await getChars();

//convert to object character
console.log("END");

function cardDesign() {

    const section = document.querySelector(".container");

    const card = document.querySelector(".card");
    console.log(card);
    card.classList.add('h-72');
}






/*

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
*/

