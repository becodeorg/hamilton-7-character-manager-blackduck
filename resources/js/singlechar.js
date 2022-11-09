/* eslint-disable no-console */
import axios from "axios";

const url = new URL(document.location.href);
console.log(url);
const pageTitle = document.querySelector("title");
const profilePicture = document.querySelector(".profilePicture");
const charName = document.querySelector(".name");
const short = document.querySelector(".shortDescription");
const description = document.querySelector(".description");
const updateBtn = document.querySelector(".updateBtn");
const deleteBtn = document.querySelector(".deleteBtn");

// Grab components
if (!url.searchParams) {
  console.log(url.origin);
  window.location = url.origin;
}
