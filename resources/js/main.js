/* eslint-disable no-restricted-syntax */
import axios from 'axios';

// const url = new URL(document.location.href);
const container = document.querySelector('.container');
console.log(container);
const apiRoot = 'https://character-database.becode.xyz';

function error(message) {
    console.error(`Error: ${message} `);
}

function makeImageSource(base64) {
    return `data:image/gif;base64,${base64}`;
}

async function getChars() {
    console.log('now async ....');
    let response;
    try {
        console.log('trying ....');
        response = await axios.get(`${apiRoot}/characters`);
        for (const el of response.data) {
            console.log(el);
            const card = document.createElement('div');
            console.log(card);
            card.setAttribute('class', 'card');
            const title = document.createTextNode(el.name);
            console.log(title);
            const desc = document.createTextNode(el.description);
            const p = document.createElement('p');
            p.setAttribute('class', 'description');
            p.appendChild(desc);

            const short = document.createTextNode(el.shortDescription);
            const shortDsec = document.createElement('p');
            shortDsec.setAttribute('class', 'shortDescription');
            shortDsec.appendChild(short);

            const image = document.createElement('img');
            image.setAttribute('src', makeImageSource(el.image));
            image.setAttribute('class', 'profilePicture');

            const h2 = document.createElement('h2');
            h2.setAttribute('class', 'name');
            h2.appendChild(title);
            console.log(h2);

            const btnMore = document.createElement('a');
            btnMore.setAttribute('class', 'btnMore');
            // TODO create url with id as parameter
            btnMore.setAttribute('href', `singlechar.html?id=${el.id}`);
            const btnMoreText = document.createTextNode('See Character');
            btnMore.appendChild(btnMoreText);

            card.appendChild(image);
            card.appendChild(h2);
            card.appendChild(shortDsec);
            card.appendChild(p);
            card.appendChild(btnMore);

            container.appendChild(card);
        }
    } catch (err) {
        console.log('catch ....');
        error(err);
    }
}

console.log('getting chars...');

getChars();

// convert to object character
console.log('END');
