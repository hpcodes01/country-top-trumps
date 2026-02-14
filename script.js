<script>


const countryName = document.querySelector(".countryName");
const population= document.querySelector(".population");
const area = document.querySelector(".area");

startButton = document.createElement("button");
  startButton.textContent = "Start";
  document.body.append(startButton);
  startButton.addEventListener("click", startGame);





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
	
</script>