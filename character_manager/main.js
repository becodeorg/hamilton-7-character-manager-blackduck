import axios from "axios";
const body = document.querySelector("body");
const apiRoot = "https://character-database.becode.xyz";

// function error(message) {
//   console.error(`Error: ${message} `);
// }

async function getChars() {
  console.log("now async ....");
  let response;
  try {
    console.log("trying ....");
    response = await axios.get(apiRoot + "/characters");
    for (let el of response.data) {
      console.log(el);
      let card = document.createElement("div");
      console.log(card);
      card.setAttribute("class", "card");
      let title = document.createTextNode(el.name);
      console.log(title);
      //let picture = el.image;
      let desc = document.createTextNode(el.description);
      let p = document.createElement("p");
      p.setAttribute("class", "description");
      p.appendChild(desc);

      let short = document.createTextNode(el.shortDescription);
      let h3 = document.createElement("h3");
      h3.setAttribute("class", "card__short");
      h3.appendChild(short);

      let h2 = document.createElement("h2");
      h2.setAttribute("class", "card__title");
      h2.appendChild(title);
      console.log(h2);

      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);

      body.appendChild(card);
    }
  } catch (err) {
    console.log("catch ....");
    //error(err);
  }
}

console.log("getting chars...");

getChars();

//convert to object character
console.log("END");
