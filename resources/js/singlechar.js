/* eslint-disable no-console */
import axios from 'axios';
import { makeImageSource, error } from './helpers';

const apiRoot = 'https://character-database.becode.xyz';
const url = new URL(document.location.href);
// returns URL object of the loaded page
// console.log(url);
// const pageTitle = document.querySelector('title');
const profilePicture = document.querySelector('.profilePicture');
const charName = document.querySelector('.name');
const shortDesc = document.querySelector('.shortDescription');
const description = document.querySelector('.description');
const updateBtn = document.querySelector('.updateBtn');
const deleteBtn = document.querySelector('.deleteBtn');

const delDiv = document.querySelector('.deleted');
delDiv.style.display = 'none';

const charId = url.searchParams.get('id');
// searchParams gets the url parameter with the specified key(id)

// Loading Spinner
const loader = document.querySelector('.loading');
const singleCard = document.querySelector('.singleCard');
singleCard.style.display = 'none';
// Grab components

async function getSingleChar(characterId) {
    let response;
    try {
        // console.log('trying ....');
        response = await axios.get(`${apiRoot}/characters/${characterId}`);
        // console.log(response);
        // Loading Spinner
        if (response === true) {
            loader.style.display = 'block';
        } else {
            loader.style.display = 'none';
            singleCard.style.display = 'block';
        }

        const cname = document.createTextNode(response.data.name);
        const desc = document.createTextNode(response.data.description);
        const short = document.createTextNode(response.data.shortDescription);

        const image = document.createElement('img');
        image.setAttribute('src', makeImageSource(response.data.image));
        image.className = 'rounded-full self-cente mb-5';

        updateBtn.setAttribute('href', `addchar.html?id=${characterId}`);

        profilePicture.appendChild(image);
        charName.appendChild(cname);
        shortDesc.appendChild(short);
        description.appendChild(desc);
        deleteBtn.addEventListener('click', () => {
            axios.delete(`${apiRoot}/characters/${characterId}`).then(() => {
                singleCard.style.display = 'none';
                delDiv.style.display = 'block';
            });
        });
    } catch {
        error('Nothing here');
    }
}

getSingleChar(charId);
