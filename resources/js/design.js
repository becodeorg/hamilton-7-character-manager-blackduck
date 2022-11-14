/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import axios from 'axios';

const body = document.querySelector('body');
body.className =
    'p-8 bg-gradient-to-b from-gray-900 via-gray-400 to-teal-100 flex-col items-center';

// HEADER
const header = document.querySelector('header');
header.className = 'w-full pb-10';
const heading = document.querySelector('.headerContainer');
heading.className =
    'flex items-center justify-center pb-4 text-center flex-col lg:justify-between lg:flex-row';
const h1 = document.querySelector('h1');
h1.className = 'font-blackOps pb-4';
const line = document.querySelector('.seperation__bar');
line.className = 'h-1 bg-white m-auto';

const container = document.querySelector('.container');
console.log(container);

// const url = new URL(document.location.href);
const apiRoot = 'https://character-database.becode.xyz';

function error(message) {
    console.error(`Error: ${message} `);
}

function makeImageSource(base64) {
    return `data:image/gif;base64,${base64}`;
}

// cards design

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
                'card flex flex-col justify-between bg-black/30 w-60 h-80 rounded-xl';

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
                'btnMore cursor-pointer	w-max self-end text-xs p-2 bg-slate-500 rounded-lg italic hover:bg-white hover:text-slate-500';

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
