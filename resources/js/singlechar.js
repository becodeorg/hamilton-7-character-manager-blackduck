/* eslint-disable no-console */
import axios from 'axios';
import { makeImageSource, error } from './helpers';

const apiRoot = 'https://character-database.becode.xyz';
const url = new URL(document.location.href);
console.log(url);
const pageTitle = document.querySelector('title');
const profilePicture = document.querySelector('.profilePicture');
const charName = document.querySelector('.name');
const short = document.querySelector('.shortDescription');
const description = document.querySelector('.description');
const updateBtn = document.querySelector('.updateBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const charId = url.searchParams.get('id');

// Grab components

async function getSingleChar(characterId) {
    let response;
    try {
        console.log('trying ....');
        response = await axios.get(`${apiRoot}/characters/:${characterId}`);
        console.log(response);
    } catch {
        error('Nothing here');
    }
}

getSingleChar(charId);
