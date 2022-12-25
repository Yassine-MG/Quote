let quoteElement = document.querySelector(".quote");
let authorElement = document.querySelector(".author");
let btn = document.querySelector("button");
let quote = [];
let body = document.querySelector("body");

// Function for generating random quotes
async function aleatoireQuote() {
    try{
        let list = await fetch("https://type.fit/api/quotes");
        resultat = await list.json();
        quote = resultat;
        let citation = quote[Math.floor(Math.random()* quote.length)];
        quoteElement.textContent = citation.text;
        authorElement.textContent = citation.author == null ? "inconnu" : citation.author;
    }catch(error){
        console.log(error);
    }
}
aleatoireQuote()

// Event to change quote by clicking on button
btn.addEventListener("click", aleatoireQuote);




// New images with the new quotes
fetch("https://api.pexels.com/v1/search?query=nature",{
  headers: {
    Authorization: "563492ad6f917000010000011675b4ae264e4fc5a61048ab35b4a564"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
    btn.addEventListener("click",()=>{
        getPics(data.photos);
     })
   })

function getPics(images){
    let imageRandom = images[Math.floor(Math.random()* images.length)];
    console.log(imageRandom.src.landscape);
    body.style.background = `url("${imageRandom.src.original}")`
    body.style.backgroundAttachment = "fixed"
    body.style.backgroundSize = "100% 100%"
    body.style.backgroundRepeat ="no-repeat"

}

btn.addEventListener("click", getPics);