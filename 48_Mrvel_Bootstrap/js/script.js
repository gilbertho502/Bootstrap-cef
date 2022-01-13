// fetch(
//   "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=14d8a14b31c283549128e029eb25dbba&hash=21c27c3418a2fddfff1fd7d4f5df4c46"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const APIKEY = "14d8a14b31c283549128e029eb25dbba"; // Public Key
// const HASH = "21c27c3418a2fddfff1fd7d4f5df4c46"; // md5(ts+privateKey+publicKey) -> https://www.md5hashgenerator.com
// const TS = "1";

// const URL = "https://gateway.marvel.com/v1/public/";

// async function sendRequest(path) {
//   const to =
//     URL +
//     path +
//     "?ts=" +
//     TS +
//     "&apikey=" +
//     APIKEY +
//     "&hash=" +
//     HASH;
//   console.log(to);
//   const response = await fetch(to);
// }

// sendRequest("comics");
// fetch("")
// .then((response)=> console.log(response))

// fetch(
//     "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=14d8a14b31c283549128e029eb25dbba&hash=21c27c3418a2fddfff1fd7d4f5df4c46"
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// OFFLINE

// OFFLINE

// OFFLINE

const APIKEY = "14d8a14b31c283549128e029eb25dbba"; // Public Key
const HASH = "21c27c3418a2fddfff1fd7d4f5df4c46"; // md5(ts+privateKey+publicKey) -> https://www.md5hashgenerator.com
const TS = "1";
//const URL = "https://gateway.marvel.com/v1/public/";
const URL = "data/";
async function sendRequest(path) {
  // 1. Hacer Peticion
  const response = await fetch(URL + path + ".json");
  // Validar la respuesta
  if (!response.ok) throw Error(response.statusText);
  // Extraer la información
  const json = await response.json();
  return json.data.results;
}

sendRequest("comics");
// Crear la funcion main para consumir el recurso...

// Crear la funcion main para consumir el recurso...

// Crear la funcion main para consumir el recurso...
async function main() {
  const comics = await sendRequest("comics");
  console.log(comics);
  //PROCESAR INFORMACION

  const container = document.getElementById(
    "card_container"
  );

  comics.forEach((comic) => {
    const template = document.querySelector(
      "#card_template"
    );
    const clone = template.cloneNode(true);
    clone.removeAttribute("style"); // removiendo el diplay:none
    // console.log(clone.children[0].children[1].children[0]);// H5
    // IMAGEN
    clone
      .querySelector(".comic_img")
      .setAttribute(
        "src",
        `${comic.thumbnail.path}.${comic.thumbnail.extension}`
      );
    // TITULO
    clone.querySelector(".comic_name").textContent =
      comic.title;

    container.appendChild(clone);
  });
}
main();



// fetch(
//     "../assets/comics.json"
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data));

/*


// Crear la funcion main para consumir el recurso...
async function main() {
  const comics = await sendRequest("comics");
  console.log(comics);
  //PROCESAR INFORMACION

  const container = document.getElementById(
    "card_container"
  );

  comics.forEach((comic) => {
    const div = document.createElement("div");
    div.classList.add("col", "mb-5");
    div.innerHTML = `
                <div class="card">
                  <img
                    class="card-img-top"
                    src="${comic.thumbnail.path}.${comic.thumbnail.extension}"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 id="name" class="fw-bolder">
                      Captain America/Iron Man (2021)
                    </h5>
                    <div
                      class="d-flex justify-content-center text-warning small"
                    >
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                      <span class="px-2 text-dark">4.5</span>
                    </div>
  
                    <span
                      class="text-muted text-decoration-line-through"
                    >
                      $80.00
                    </span>
                    <span id="price">$50.00</span>
                  </div>
  
                  <div
                    class="card-footer pb-4 border-top-0 bg-transparent"
                  >
                    <div class="text-center">
                      <button class="btn btn-outline-dark">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
      `;
    container.appendChild(div);
  });
}

main();

*/
