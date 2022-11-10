/* eslint-disable no-console */
import axios from 'axios';
import { makeImageSource, error } from './helpers';

const apiRoot = 'https://character-database.becode.xyz';
const url = new URL(document.location.href);
console.log(url);
const pageTitle = document.querySelector('title');
const profilePicture = document.querySelector('.profilePicture');
const charName = document.querySelector('.name');
const shortDesc = document.querySelector('.shortDescription');
const description = document.querySelector('.description');
const updateBtn = document.querySelector('.updateBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const charId = url.searchParams.get('id');

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

        profilePicture.appendChild(image);
        charName.appendChild(cname);
        shortDesc.appendChild(short);
        description.appendChild(desc);
    } catch {
        error('Nothing here');
    }
}

getSingleChar(charId);
