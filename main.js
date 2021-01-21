const api = "https://api.funtranslations.com/translate/minion.json"

const inputField = document.querySelector("#input");
const output = document.querySelector("#output");

const generateUrl = (input) => {
    return api + "?" + "text=" + input
}


const translate = () => {
    const input = inputField.value; // taking input

    // calling server for processing
    fetch(generateUrl(input))
        .then(response => response.json())
        .then(json => {
            const translatedText = json.contents.translated;
            output.innerText = translatedText; // output
        })
        .catch((error) => {
            console.log("Error", error);
            alert("Some internal error occured. Please try again in sometime.")
        });
};

document.querySelector('#translate').addEventListener('click', translate);