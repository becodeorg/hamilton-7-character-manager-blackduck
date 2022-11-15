/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import axios from 'axios';
import { makeImageSource, error } from './helpers';

const apiRoot = 'https://character-database.becode.xyz';
const container = document.querySelector('.container');
// Loading Spinner
const loader = document.querySelector('.loading');
const btnAdd = document.querySelector('.btnAdd');
btnAdd.style.display = 'none';

console.log(loader);

async function getChars() {
    // console.log('now async ....');
    let response;
    try {
        // console.log('trying ....');
        response = await axios.get(`${apiRoot}/characters`);
        // Loading Spinner
        if (response === true) {
            loader.style.display = 'block';
        } else {
            loader.style.display = 'none';
            btnAdd.style.display = 'block';
        }
        // Cards Display
        for (const el of response.data) {
            // console.log(el);
            const card = document.createElement('div');
            // console.log(card);
            card.className =
                'card flex flex-col justify-between bg-black/30 w-60 h-80 rounded-xl text-white';
            const title = document.createTextNode(el.name);
            // console.log(title);
            const desc = document.createTextNode(el.description);
            const p = document.createElement('p');
            p.className = 'description hidden';
            p.appendChild(desc);

            const short = document.createTextNode(el.shortDescription);
            const shortDsec = document.createElement('p');
            shortDsec.className =
                'shortDescription text-justify text-xs text-white';
            shortDsec.appendChild(short);

            const image = document.createElement('img');
            image.setAttribute('src', makeImageSource(el.image));
            image.className =
                'profilePicture rounded-full grayscale w-2/4 self-center';

            const h2 = document.createElement('h2');
            h2.appendChild(title);
            // console.log(h2);
            h2.className =
                'name text-center font-blackOps text-sm left text-white';

            const btnMore = document.createElement('a');
            btnMore.className =
                'btnMore cursor-pointer	w-max self-end text-xs text-white p-2 bg-slate-500 rounded-lg italic hover:bg-white hover:text-slate-500';
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
        // console.log('catch ....');
        error(err);
    }
}

getChars();
