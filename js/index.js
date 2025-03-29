let searchValue = document.getElementById("searchWord");
let buttonSubmit = document.getElementById("buttonSubmit");

buttonSubmit.addEventListener("click", searchWord);

let wordValue = document.getElementById("word");
let phonetics = document.getElementById("phonetics");
let origin = document.getElementById("origin");
let synonyms = document.getElementById("synonyms");
let link = document.getElementById("link");

async function searchWord(){

    try{
        const response =  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue.value}`)
        if(!response.ok){
            throw new Error("Resources have not been found")
        }
        const data = await response.json();
        
        wordValue.innerHTML = data['0'].word.toUpperCase();
        phonetics.innerHTML = data['0'].phonetics['1'].text.toUpperCase();
        origin.innerHTML = data['0'].meanings[0].definitions[0].definition.toUpperCase();
        synonyms.innerHTML =  data['0'].meanings[1].definitions[0].synonyms[0];
        if(data['0'].meanings[1].definitions[0].synonyms[0] == undefined){
           synonyms.innerHTML = "Not one"
        }
        else{
            synonyms.innerHTML =  data['0'].meanings[0].definitions[0].synonyms[0];
        }
        link.href = data['0'].sourceUrls[0]
        console.log(data)
    }
    catch(error){
        console.log(error);
    }

}
