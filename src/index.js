function displayGeneratedSolution(response, type){

if (type === "advice") {
    new Typewriter("#generatedSolution", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
    });
  } else if (type === "quote") {
    new Typewriter("#generatedQuote", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
    });
  }
}

function generateSolution(event){
    event.preventDefault();

let problemInput = document.querySelector("#problemInput");
let apiKey="746foa43283b3t834aba30e76024ce8a";
let prompt=`Generate an advice to a problem ${problemInput.value}, make it a smart and helpful advice`;
let context="User instructions: You are an expert problem solver and love to give a very short friendly but smart advise. Your mission is to generate a 3 sentence advise that are effective to the topic input. Make sure to follow the user instructions.";
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



let quotePrompt = `Generate an inspirational quote related to ${problemInput.value}`;
  let quoteContext =
    "User instructions: You are a creative expert who generates short, impactful, and inspirational quotes. Your mission is to generate a quote that resonates with the topic input. Keep it motivational and relevant. Put appriate emojis.";
  let quoteApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${quotePrompt}&context=${quoteContext}&key=${apiKey}`;

  

Promise.all([
    axios.get(apiUrl), 
    axios.get(quoteApiUrl), 
  ])
  .then((responses) => {
    displayGeneratedSolution(responses[0], "advice");
    displayGeneratedSolution(responses[1], "quote");
  })
  .catch((error) => {
    console.error("Error fetching data from the API:", error);
  });

}



let solutiongeneratorElement = document.querySelector("#generatesolutionNow");
solutiongeneratorElement.addEventListener("submit", generateSolution);


function lottoGenerate (event){
    event.preventDefault();

let apiKey = "746foa43283b3t834aba30e76024ce8a";
let prompt = "Generate random Euro Millionen numbers only";
let context =
  "User instructions: You are expert in suggesting a set of Euro Million numbers lottery. Your mission is to generate a complete set of numbers for the Euro Millions lottery only and no other foreword. Make sure to follow the user instructions. Add a good luck greetings in the end with appropriate emojis and write these in the very end (Euro Millions)";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl)
    .then(response => {
      console.log(response.data.answer);
      displayLottoNumbers(response.data.answer);
    })
    .catch(error => {
      console.error("Error fetching data from the API:", error);
    });
}
function displayLottoNumbers(numbers) {
  let lottoDisplayElement = document.querySelector("#generatedNumbers");
  lottoDisplayElement.innerHTML = numbers;
}

let numberGeneratorElement = document.querySelector("#lotto");
numberGeneratorElement.addEventListener("click", lottoGenerate);