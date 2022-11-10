/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import axios from 'axios';

const body = document.querySelector('body');
body.className =
    'p-6 bg-gradient-to-b from-gray-900 via-gray-400 to-teal-100 flex-col items-center';

const addButton = document.querySelector('.btnAdd');
addButton.className =
    'm-20 w-20 h-20 bg-slate-500 rounded-full pt-4 text-white text-center text-5xl font-bold m-auto drop-shadow-lg';

// const url = new URL(document.location.href);
const container = document.querySelector('.container');
container.className = 'flex flex-wrap m-auto justify-center md:justify-between';
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
            // CARD
            const card = document.createElement('div');
            console.log(card);
            // adding classes
            card.className =
                'card flex flex-col justify-between bg-black/30 w-60 h-80 rounded-xl p-2';

            // IMAGE
            const image = document.createElement('img');
            image.setAttribute('src', makeImageSource(el.image));
            image.className =
                'profilePicture rounded-full grayscale w-2/4 self-center';

            // TITLE
            const h2 = document.createElement('h2');
            const title = document.createTextNode(el.name);
            h2.appendChild(title);
            // adding classes
            h2.className = 'name text-center font-blackOps text-sm left';

            // SHORT DESCRIPTION
            const shortDsec = document.createElement('p');
            const short = document.createTextNode(el.shortDescription);
            shortDsec.appendChild(short);
            // adding classes
            shortDsec.className = 'shortDescription text-justify text-xs';

            // DESCRIPTION
            const desc = document.createTextNode(el.description);
            const p = document.createElement('p');
            p.appendChild(desc);
            // adding classes
            p.className = 'description hidden';

            // BUTTON
            const btnMore = document.createElement('a');
            // TODO create url with id as parameter
            btnMore.setAttribute('href', `singlechar.html?id=${el.id}`);
            const btnMoreText = document.createTextNode('See Character');
            btnMore.appendChild(btnMoreText);
            btnMore.className =
                'btnMore cursor-pointer	w-max text-white self-end text-xs p-1 border border-solid border-white rounded-lg italic';

            container.appendChild(card);

            card.appendChild(image);
            card.appendChild(h2);
            card.appendChild(shortDsec);
            card.appendChild(p);
            card.appendChild(btnMore);
        }
    } catch (err) {
        console.log('catch ....');
        error(err);
    }
}
getChars();
