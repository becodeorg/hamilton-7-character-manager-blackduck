import axios from 'axios';
import { makeImageSource, error } from './helpers';

const apiRoot = 'https://character-database.becode.xyz';
const url = new URL(document.location.href);

const charForm = document.getElementsByClassName('.charForm');
const pictureBox = document.querySelector('.profilePicture');
const nameBox = document.querySelector('.charname');
const shortBox = document.querySelector('.short');
const longBox = document.querySelector('.description');
const resetBtn = document.querySelector('.reset');

const charId = url.searchParams.get('id');
console.log(charId);

async function getEditChar(characterId) {
    let response;
    try {
        console.log('trying ....');
        response = await axios.get(`${apiRoot}/characters/${characterId}`);
        console.log(response);

        nameBox.setAttribute('value', response.data.name);
        shortBox.setAttribute('value', response.data.shortDescription);
        longBox.setAttribute('value', response.data.description);

        pictureBox.setAttribute('src', makeImageSource(response.data.image));
    } catch {
        error('somethin Wong');
    }
}

// // Theres a reset button build into html forms
switch (charId) {
    case 'newchar':
        break;

    case null:
        alert('no char specified');
        break;
    default:
        getEditChar(charId);
}
