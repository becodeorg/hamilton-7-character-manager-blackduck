import axios from "axios";

const url= new URL(document.location.href);
const container = document.querySelector(".container");
console.log(container);
const apiRoot = "https://character-database.becode.xyz";

function error(message) {
  console.error(`Error: ${message} `);
}

function makeImageSource(base64) {
  return "data:image/gif;base64," + base64;
}

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
      let desc = document.createTextNode(el.description);
      let p = document.createElement("p");
      p.setAttribute("class", "description");
      p.appendChild(desc);

      let short = document.createTextNode(el.shortDescription);
      let h3 = document.createElement("h3");
      h3.setAttribute("class", "shortDescription");
      h3.appendChild(short);

      let image = document.createElement("img");
      image.setAttribute("src", makeImageSource(el.image));
      image.setAttribute("class", "profilePicture");

      let h2 = document.createElement("h2");
      h2.setAttribute("class", "name");
      h2.appendChild(title);
      console.log(h2);

      let btn_more = document.createElement("a");
      btn_more.setAttribute("class", "btnMore");
      // TODO create url with id as parameter
      btn_more.setAttribute("href", "singlechar.html");
      let btn_moreText = document.createTextNode("See Character");
      btn_more.appendChild(btn_moreText);

      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(btn_more);

      container.appendChild(card);
    }
  } catch (err) {
    console.log("catch ....");
    error(err);
  }
}

console.log("getting chars...");

getChars();

//convert to object character
console.log("END");
