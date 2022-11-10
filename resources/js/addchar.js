import axios from 'axios';
import { makeImageSource, error } from './helpers';

const apiRoot = 'https://character-database.becode.xyz';
const url = new URL(document.location.href);

const pictureBox = document.querySelector('.profilePicture');
const nameBox = document.querySelector('charname');
const shortBox = document.querySelector('.short');
const longBox = document.querySelector('.description');
const resetBtn = document.querySelector('.reset');

const charId = url.searchParams.get('id');
console.log(charId);

function resetInput() {
    pictureBox.value = null;
    nameBox.value = null;
    shortBox.value = null;
    longBox.value = null;
    // for some reason this reloads the page with no parameters
}

async function getEditChar(characterId) {
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
    } catch {
        error('somethin Wong');
    }
}

resetBtn.addEventListener('click', () => {
    resetInput();
});

switch (charId) {
    case 'newchar':
        break;

    case null:
        alert('no char specified');
        break;
    default:
        getEditChar(charId);
}
