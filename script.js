	
const chosenCategory = document.querySelector(".chosenCategory");

const country1 = document.querySelector(".country1");
const country2 = document.querySelector(".country2");

const chosenStat1 = document.querySelector(".chosenStat1");
const chosenStat2 = document.querySelector(".chosenStat2");

const currentStreak = document.querySelector(".currentStreak");
const highestStreak = document.querySelector(".highestStreak");

const winLose = document.querySelector(".winLose");

const statCategories = {
	area: "geographical area (km<sup>2</sup>)",
	population: "population",
	borders: "number of bordering Countries",
	};

const statOptions = ["area", "population", "borders"];

let startButton = document.createElement("button");
	startButton.textContent = "Start";
	document.querySelector(".startButton").append(startButton);
	startButton.addEventListener("click", () => {
		startButton.remove();
		document.querySelector(".gameInfo").style.display = "none";
		document.querySelector(".gameGrid").style.display = "grid";
		startRound();
	});

let randomNumber;
let countryCode1;
let countryCode2;
let countryName1;
let countryName2;
let countryStats1;
let correctChoice;
let logicStat1;
let logicStat2;
let logicStreak = 0;
let logicHighestStreak = 0;
let country1Button;
let country2Button;
let continueButton; 
let restartButton;

let countryList;
let countryCodes;


async function loadCountries() {
	const res = await fetch("data/countryList.json");
	const data = await res.json();
	
	countryList = data;
	countryCodes = Object.keys(countryList);
}

loadCountries();


async function refreshCountries() {

		randomNumber = Math.floor(Math.random() * countryCodes.length);
		countryCode1 = countryCodes[randomNumber]
		countryName1 = countryList[countryCode1]

		randomNumber = Math.floor(Math.random() * countryCodes.length);
		countryCode2 = countryCodes[randomNumber]
		countryName2 = countryList[countryCode2]

		let data1;
		try{
			const res1 = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode1}?fields=area,population,borders,flags`, {cache: "no-store"});
			if(!res1.ok) {
				throw new Error("API error");
			}
			data1 = await res1.json();	
		} catch (err) {
			winLose.style.color = "red";
			winLose.textContent = "API error, please click continue button to try again";
			continueButton = document.createElement("button");
			continueButton.textContent = "Continue";
  			document.querySelector(".buttonBlock").append(continueButton);
  			continueButton.addEventListener("click", () => {
				continueButton.remove();
				startRound();
			});
			return false;
		}

		const c1 = data1;
		countryStats1 = {
			area: c1.area,
			population: c1.population,
			borders: Array.isArray(c1.borders) ? c1.borders.length : 0,
			flags: c1.flags
			};
		
		let data2;

		try{
			const res2 = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode2}?fields=area,population,borders,flags`, {cache: "no-store"});

			if(!res2.ok) {
				throw new Error("API error");
			}

			data2 = await res2.json();
			
		} catch (err) {
			winLose.style.color = "red";
			winLose.textContent = "API error, please click continue button to try again";
			continueButton = document.createElement("button");
			continueButton.textContent = "Continue";
  			document.querySelector(".buttonBlock").append(continueButton);
  			continueButton.addEventListener("click", () => {
				continueButton.remove();
				startRound();
			});
			return false;
		}
		const c2 = data2;
		countryStats2 = {
			area: c2.area,
			population: c2.population,
			borders: Array.isArray(c2.borders) ? c2.borders.length : 0,
			flags: c2.flags
			};
		return true;
}

async function startRound() {
	
	chosenStat1.textContent = "";
	chosenStat2.textContent = "";
	winLose.textContent = "";

	const ok = await refreshCountries();
	if (!ok) return;
	
	const img1 = document.querySelector(".flag1");
	img1.src = countryStats1.flags.svg;
	img1.style.display = "block";
	
	const img2 = document.querySelector(".flag2");
	img2.src = countryStats2.flags.svg;
	img2.style.display = "block";

	const randomKey = statOptions[Math.floor(Math.random() * statOptions.length)];

	chosenCategory.innerHTML = `Which has the greater ${statCategories[randomKey]}?`;	
	logicStat1 = countryStats1[randomKey];
	logicStat2 = countryStats2[randomKey];

	country1Button = document.createElement("button");
	country1Button.textContent = countryName1;
  	document.querySelector(".country1Block").append(country1Button);
  	country1Button.addEventListener("click", () => {
		checkGuess(1);
	});

	country2Button = document.createElement("button");
	country2Button.textContent = countryName2;
  	document.querySelector(".country2Block").append(country2Button);
  	country2Button.addEventListener("click", () => {
		checkGuess(2);
	});
	
	
}

function checkGuess(playerGuess) {

	country1Button.style.pointerEvents = "none";
	country2Button.style.pointerEvents = "none";

	if (logicStat1 === logicStat2) {
		winLose.style.color = "blue";
		winLose.textContent = "They were the same! Have a free round.";
		
		chosenStat1.textContent = logicStat1;
		chosenStat2.textContent = logicStat2;

		continueButton = document.createElement("button");
		continueButton.textContent = "Continue";
  		document.querySelector(".buttonBlock").append(continueButton);
  		continueButton.addEventListener("click", () => {
			continueButton.remove();
			country1Button.remove();
			country2Button.remove();
			startRound();
		});
	return;
	}

	correctChoice = logicStat1 > logicStat2 ? 1 : 2;
	if (playerGuess === correctChoice) {
		winLose.style.color = "green";
		winLose.textContent = "Correct!";
		logicStreak ++;
		currentStreak.textContent = `Current streak: ${logicStreak}`;

	} else {
		winLose.style.color = "red";
		winLose.textContent = "Oh no! You lose!";

		chosenStat1.textContent = logicStat1.toLocaleString();
		chosenStat2.textContent = logicStat2.toLocaleString();

		currentStreak.textContent = "Current streak: 0";
		logicHighestStreak = logicStreak > logicHighestStreak ? logicStreak : logicHighestStreak;
		highestStreak.textContent = `Highest streak: ${logicHighestStreak}`;
		logicStreak = 0;

		restartButton = document.createElement("button");
		restartButton.textContent = "Try again?";
  		document.querySelector(".buttonBlock").append(restartButton);
  		restartButton.addEventListener("click", () => {
			restartButton.remove();
			country1Button.remove();
			country2Button.remove();
			startRound();
		})
	return;

	}
	chosenStat1.textContent = logicStat1.toLocaleString();
	chosenStat2.textContent = logicStat2.toLocaleString();

	continueButton = document.createElement("button");
	continueButton.textContent = "Continue";
  	document.querySelector(".buttonBlock").append(continueButton);
  	continueButton.addEventListener("click", () => {
		continueButton.remove();
		country1Button.remove();
		country2Button.remove();
		startRound();
	});
	
}	


