import axios from "axios";


const url = new URL(document.location.href);
console.log(url);
let pageTitle = document.querySelector("title");
let profilePicture = document.querySelector(".profilePicture");
let charName = document.querySelector(".name");
let short = document.querySelector(".shortDescription");
let description = document.querySelector(".description");
let updateBtn = document.querySelector(".updateBtn");
let deleteBtn = document.querySelector(".deleteBtn");

// Grab components
 if(!url.searchParams){
    window.location = url.origin;
 }

