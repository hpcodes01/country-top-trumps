


const countryName = document.querySelector(".countryName");
const population= document.querySelector(".population");
const area = document.querySelector(".area");

let randomNumber = Math.floor(Math.random() * 247) + 1;
console.log(randomNumber);

startButton = document.createElement("button");
  startButton.textContent = "Start";
  document.body.append(startButton);
  startButton.addEventListener("click", startGame);

async function loadCountries() {
	const res = await fetch("data/countryList.json");
	const countries = await res.json();
	
	console.log("loaded");
	
	let randomIndex = Math.floor(Math.random() * countries.length);
	let randomCountry = countries[randomIndex];

	console.log(randomCountry);
}

loadCountries();





      function startGame() {
	startButton.parentNode.removeChild(startButton);

	country1Button = document.createElement("button");
	country1Button.textContent = "1";
  	document.body.append(country1Button);
  	country1Button.addEventListener("click", startGame);

	country2Button = document.createElement("button");
	country2Button.textContent = "2";
  	document.body.append(country2Button);
  	country2Button.addEventListener("click", startGame);
}
	
