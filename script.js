
var mainForm = document.getElementById("mainForm");
var textField = document.getElementById("textField");
var askButton = document.getElementById("askButton");
var charArea = document.getElementById("charArea");

var replyDelay = 1000;

var AIName = "AI";
var userName = "You";

mainForm.addEventListener('submit', run, false);

function run(e) {
	e.preventDefault();
	
	var textFieldText = textField.value;
	var textTrimmed = textFieldText.trim();
	var textFinal = textFieldText.toLowerCase();

	textFinal = textFinal.replace("mayi", "may i");
	textFinal = textFinal.replace("univese", "universe");
	textFinal = textFinal.replace("aseosme", "awesome");

	var randomNumber = Math.random();

	charArea.innerHTML +=  userName + ": " + textFieldText + "<br />";

	textField.disabled = true;
	askButton.disabled = true;
	textField.style.color = "grey";
	textField.style.borderBottom = "1px solid grey";

	setTimeout(function()
	{
		if(textFinal.includes("how are you"))
		{
			if(randomNumber < 0.25) charArea.innerHTML += AIName + ": I am fine.<br /><br />";
			else if(randomNumber < 0.50) charArea.innerHTML += AIName + ": I am good.<br /><br />";
			else if(randomNumber < 0.75) charArea.innerHTML += AIName + ": Feeling good, thanks.<br /><br />";
			else charArea.innerHTML += AIName + ": Feeling energetic.<br /><br />";
		}


		textField.disabled = false;
		askButton.disabled = false;
		textField.style.color = "#fff";
		textField.style.borderBottom = "1px solid #aaa";

	},replyDelay);
	
}




























