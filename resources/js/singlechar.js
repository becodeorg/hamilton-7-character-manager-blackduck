/* eslint-disable no-console */
import axios from 'axios';
import { makeImageSource, error } from './helpers';

const apiRoot = 'https://character-database.becode.xyz';
const url = new URL(document.location.href);
// returns URL object of the loaded page
console.log(url);
// const pageTitle = document.querySelector('title');
const profilePicture = document.querySelector('.profilePicture');
const charName = document.querySelector('.name');
const shortDesc = document.querySelector('.shortDescription');
const description = document.querySelector('.description');
const updateBtn = document.querySelector('.updateBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const charId = url.searchParams.get('id');
// searchParams gets the url parameter with the specified key(id)

// Grab components

async function getSingleChar(characterId) {
    let response;
    try {
        console.log('trying ....');
        response = await axios.get(`${apiRoot}/characters/${characterId}`);
        console.log(response);

        const cname = document.createTextNode(response.data.name);
        const desc = document.createTextNode(response.data.description);
        const short = document.createTextNode(response.data.shortDescription);

        const image = document.createElement('img');
        image.setAttribute('src', makeImageSource(response.data.image));
        image.className = 'rounded-full self-center';

        updateBtn.setAttribute('href', `addchar.html?id=${characterId}`);

        profilePicture.appendChild(image);
        charName.appendChild(cname);
        shortDesc.appendChild(short);
        description.appendChild(desc);
        deleteBtn.addEventListener('click', () => {
            axios
                .delete(`${apiRoot}/characters/${characterId}`)
                .then(() => alert('deleted'));
        });
    } catch {
        error('Nothing here');
    }
}

getSingleChar(charId);
