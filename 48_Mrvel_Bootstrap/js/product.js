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

async function main() {
    const product_id = localStorage.getItem("product_id");
    const comic = await sendRequest("comics/" + product_id);
    console.log(comic);
}

main();


async function sendRequest(path) {
  // 1. Hacer Peticion
  const response = await fetch(
    URL +
      path +
      "?ts=" +
      TS +
      "&apikey=" +
      APIKEY +
      "&hash=" +
      HASH
  );
  // Validar la respuesta
  if (!response.ok) throw Error(response.statusText);
  // Extraer la información
  const json = await response.json();
  return json.data.results;
}

async function main() {
  const product_id = localStorage.getItem("product_id");
  const comic = await sendRequest("comics/" + product_id);
  //const comics = await sendRequestLocal("comics");
  console.log(comic);
}
main();