import axios from 'axios';
import { makeImageSource, error, Character } from './helpers';

const apiRoot = 'https://character-database.becode.xyz';
const url = new URL(document.location.href);
let newImage;
// const charForm = document.getElementsByClassName('.charForm');
const pictureBox = document.querySelector('.profilePicture');
const fileUpload = document.querySelector('.uploadImage');
const nameBox = document.querySelector('.charname');
const shortBox = document.querySelector('.short');
const longBox = document.querySelector('.description');
// console.log(longBox);
// const resetBtn = document.querySelector('.reset');
const submit = document.querySelector('.add');
// console.log(submit);
const character = new Character();
const charId = url.searchParams.get('id');
// console.log(charId);
// console.log(character);

async function getEditChar(characterId) {
    let response;
    try {
        // console.log(character.name);
        // console.log('trying ....');
        response = await axios.get(`${apiRoot}/characters/${characterId}`);
        // console.log(response);
        character.name = response.data.name;
        character.description = response.data.description;
        character.shortDescription = response.data.shortDescription;
        character.id = response.data.id;
        character.image = response.data.image;

        nameBox.value = character.name;
        shortBox.value = character.shortDescription;
        longBox.value = character.description;

        // I stole this here https://pqina.nl/blog/convert-a-file-to-a-base64-string-with-javascript/
        fileUpload.addEventListener('change', (e) => {
            // Get a reference to the file
            const file = e.target.files[0];

            // Encode the file using the FileReader API
            const reader = new FileReader();
            reader.onloadend = () => {
                // Use a regex to remove data url part
                const base64String = reader.result
                    .replace('data:', '')
                    .replace(/^.+,/, '');

                // console.log(base64String);
                newImage = base64String;
            };
            reader.readAsDataURL(file);
        });

        pictureBox.setAttribute('src', makeImageSource(character.image));
        submit.addEventListener('click', async () => {
            // console.log(nameBox.value);
            character.name = nameBox.value;
            character.description = longBox.value;
            character.shortDescription = shortBox.value;
            if (newImage) {
                character.image = newImage;
            }
            // character.image = convert to base64;
            await axios.put(`${apiRoot}/characters/${character.id}`, character);
            window.location.href = '/';
        });
    } catch (event) {
        error(event);
    }
}

// Theres a reset button build into html forms
if (charId) {
    getEditChar(charId);
} else {
    try {
        fileUpload.addEventListener('change', (e) => {
            // Get a reference to the file
            const file = e.target.files[0];

            // Encode the file using the FileReader API
            const reader = new FileReader();
            reader.onloadend = () => {
                // Use a regex to remove data url part
                const base64String = reader.result
                    .replace('data:', '')
                    .replace(/^.+,/, '');

                // console.log(base64String);
                newImage = base64String;
            };
            reader.readAsDataURL(file);
        });

        submit.addEventListener('click', async () => {
            // console.log(nameBox.value);
            character.name = nameBox.value;
            character.description = longBox.value;
            character.shortDescription = shortBox.value;
            character.image = newImage;
            // console.log(newImage);
            await axios.post(`${apiRoot}/characters`, character);
            window.location.href = '/';
            // character.image = convert to base64;
        });
    } catch (event) {
        error(event);
    }
}
