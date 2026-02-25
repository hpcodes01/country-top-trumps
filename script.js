	
const chosenCategory = document.querySelector(".chosenCategory");

const country1 = document.querySelector(".country1");
const country2 = document.querySelector(".country2");

const chosenStat1 = document.querySelector(".chosenStat1");
const chosenStat2 = document.querySelector(".chosenStat2");

const currentStreak = document.querySelector(".currentStreak");
const highestStreak = document.querySelector(".highestStreak");

const winLose = document.querySelector(".winLose");

const statCategories = {
	area: "Geographical area (km<sup>2</sup>)",
	population: "Population",
	borders: "Number of bordering Countries",
	};

const statOptions = ["area", "population", "borders"];

let startButton = document.createElement("button");
	startButton.textContent = "Start";
	document.querySelector(".buttonBlock").append(startButton);
	startButton.addEventListener("click", () => {
		startButton.remove();
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

let countryList = {
  "AF": "Afghanistan",
  "AX": "Aland Islands",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AQ": "Antarctica",
  "AG": "Antigua And Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia",
  "BA": "Bosnia And Herzegovina",
  "BW": "Botswana",
  "BV": "Bouvet Island",
  "BR": "Brazil",
  "IO": "British Indian Ocean Territory",
  "BN": "Brunei Darussalam",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "CV": "Cape Verde",
  "KY": "Cayman Islands",
  "CF": "Central African Republic",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China",
  "CX": "Christmas Island",
  "CC": "Cocos (Keeling) Islands",
  "CO": "Colombia",
  "KM": "Comoros",
  "CG": "Congo",
  "CD": "Congo, Democratic Republic",
  "CK": "Cook Islands",
  "CR": "Costa Rica",
  "CI": "Cote D\"Ivoire",
  "HR": "Croatia",
  "CU": "Cuba",
  "CY": "Cyprus",
  "CZ": "Czech Republic",
  "DK": "Denmark",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "ET": "Ethiopia",
  "FK": "Falkland Islands (Malvinas)",
  "FO": "Faroe Islands",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "GF": "French Guiana",
  "PF": "French Polynesia",
  "TF": "French Southern Territories",
  "GA": "Gabon",
  "GM": "Gambia",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GP": "Guadeloupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HM": "Heard Island & Mcdonald Islands",
  "VA": "Holy See (Vatican City State)",
  "HN": "Honduras",
  "HK": "Hong Kong",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran, Islamic Republic Of",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle Of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "KR": "Korea",
  "KP": "North Korea",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao People\"s Democratic Republic",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libyan Arab Jamahiriya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macao",
  "MK": "Macedonia",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "YT": "Mayotte",
  "MX": "Mexico",
  "FM": "Micronesia, Federated States Of",
  "MD": "Moldova",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands",
  "AN": "Netherlands Antilles",
  "NC": "New Caledonia",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestinian Territory, Occupied",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "RE": "Reunion",
  "RO": "Romania",
  "RU": "Russian Federation",
  "RW": "Rwanda",
  "BL": "Saint Barthelemy",
  "SH": "Saint Helena",
  "KN": "Saint Kitts And Nevis",
  "LC": "Saint Lucia",
  "MF": "Saint Martin",
  "PM": "Saint Pierre And Miquelon",
  "VC": "Saint Vincent And Grenadines",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "Sao Tome And Principe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "ZA": "South Africa",
  "GS": "South Georgia And Sandwich Isl.",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "SD": "Sudan",
  "SR": "Suriname",
  "SJ": "Svalbard And Jan Mayen",
  "SZ": "Swaziland",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syrian Arab Republic",
  "TW": "Taiwan",
  "TJ": "Tajikistan",
  "TZ": "Tanzania",
  "TH": "Thailand",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad And Tobago",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks And Caicos Islands",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates",
  "GB": "United Kingdom",
  "US": "United States",
  "UM": "United States Outlying Islands",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VE": "Venezuela",
  "VN": "Vietnam",
  "VG": "Virgin Islands, British",
  "VI": "Virgin Islands, U.S.",
  "WF": "Wallis And Futuna",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe"
}
 
const countryCodes = Object.keys(countryList);


async function loadCountries() {
	const res = await fetch("data/countryList.json");
	const test = await res.json();
	
	console.log("loaded");
	
	/*let randomIndex = Math.floor(Math.random() * countryList.length);
	let randomCountry = countryList[randomIndex];

	return randomCountry;*/
}

loadCountries();


async function refreshCountries() {

		randomNumber = Math.floor(Math.random() * countryCodes.length);
		countryCode1 = countryCodes[randomNumber]
		countryName1 = countryList[countryCode1]

		randomNumber = Math.floor(Math.random() * countryCodes.length);
		countryCode2 = countryCodes[randomNumber]
		countryName2 = countryList[countryCode2]

		const res1 = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode1}?fields=area,population,borders,flags`);
		const data1 = await res1.json();
		const c1 = data1;
		countryStats1 = {
			area: c1.area,
			population: c1.population,
			borders: Array.isArray(c1.borders) ? c1.borders.length : 0,
			flags: c1.flags
			};

		const res2 = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode2}?fields=area,population,borders,flags`);
		const data2 = await res2.json();
		const c2 = data2;
		countryStats2 = {
			area: c2.area,
			population: c2.population,
			borders: Array.isArray(c2.borders) ? c2.borders.length : 0,
			flags: c2.flags
			};
}

async function startRound() {
	
	chosenStat1.textContent = "";
	chosenStat2.textContent = "";
	winLose.textContent = "";

	await refreshCountries();
	
	country1.textContent = countryName1;
	country2.textContent = countryName2;
	
	const img1 = document.querySelector(".flag1");
	img1.src = countryStats1.flags.svg;
	img1.style.display = "block";
	
	const img2 = document.querySelector(".flag2");
	img2.src = countryStats2.flags.svg;
	img2.style.display = "block";

	const randomKey = statOptions[Math.floor(Math.random() * statOptions.length)];

	chosenCategory.innerHTML = statCategories[randomKey];	
	logicStat1 = countryStats1[randomKey];
	logicStat2 = countryStats2[randomKey];

	country1Button = document.createElement("button");
	country1Button.textContent = "1";
  	document.querySelector(".countryButton1Block").append(country1Button);
  	country1Button.addEventListener("click", () => {
		country1Button.remove();
		country2Button.remove();
		checkGuess(1);
	});

	country2Button = document.createElement("button");
	country2Button.textContent = "2";
  	document.querySelector(".countryButton2Block").append(country2Button);
  	country2Button.addEventListener("click", () => {
		country1Button.remove();
		country2Button.remove();
		checkGuess(2);
	});
	
	
}

function checkGuess(playerGuess) {

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
		startRound();
	});
	
}	


