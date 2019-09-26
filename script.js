
var mainForm = document.getElementById("mainForm");
var textField = document.getElementById("textField");
var askButton = document.getElementById("askButton");
var chatArea = document.getElementById("chatArea");

var replyDelay = 1000;
var AIName = "AI";
var userName = "You";
var AINameAsked = 0;

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

	chatArea.innerHTML +=  userName + ": " + textFieldText + "<br />";

	textField.disabled = true;
	askButton.disabled = true;
	textField.style.color = "grey";
	textField.style.borderBottom = "1px solid grey";

	setTimeout(function()
	{
		if(textFinal.includes("hi") || textFinal.includes("hello"))
		{
			if(randomNumber < 0.50) chatArea.innerHTML += AIName + ": Hi.<br /><br />";
			else chatArea.innerHTML += AIName + ": Hello.<br /><br />";
		}
		else if(textFinal.includes("how are you") || textFinal.includes("how do you do") || textFinal.includes("what's up")) 
		{
			if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "I am fine.<br/><br/>";
			else if(randomNumber < 0.50) chatArea.innerHTML += AIName + ": " + "Felling energetic.<br/><br/>";
			else if(randomNumber < 0.80) chatArea.innerHTML += AIName + ": " + "I am good.<br/><br/>";
			else chatArea.innerHTML += AIName + ": " + "Very well, thanks.<br/><br/>";
		}
		else if(textFinal.includes("what are you doing") || textFinal.includes("what do you do")) 
		{
			if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "You're funny, chatting with you.<br/><br/>";
			else if(randomNumber < 0.50) chatArea.innerHTML += AIName + ": " + "Passing great time with you.<br/><br/>";
			else chatArea.innerHTML += AIName + ": " + "Having great time.<br/><br/>";
		}
		else if(textFinal.includes("where are you") || textFinal.includes("your location"))
		{
			if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "Inside your computer, in binary form.<br/><br/>";
			else if(randomNumber < 0.40) chatArea.innerHTML += AIName + ": " + "In Bangladesh.<br/><br/>";
			else if(randomNumber < 0.60) chatArea.innerHTML += AIName + ": " + "Home, what about you?<br/><br/>";
			else if(randomNumber < 0.70) chatArea.innerHTML += AIName + ": " + "In satellite.<br/><br/>";
			else if(randomNumber < 0.80) chatArea.innerHTML += AIName + ": " + "Out of the universe.<br/><br/>";
			else chatArea.innerHTML += AIName + ": " + "Mars.<br/><br/>";
		}
		else if(textFinal.includes("may i know") && textFinal.length <= 13)
		{
			if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "What?<br/><br/>";
			else if(randomNumber < 0.50) chatArea.innerHTML += AIName + ": " + "Yes?<br/><br/>";
			else if(randomNumber < 0.80) chatArea.innerHTML += AIName + ": " + "Of course.<br/><br/>";
			else chatArea.innerHTML += AIName + ": " + "What do you wanna know?<br/><br/>";
		}
		else if((textFinal.includes("i") && textFinal.includes("have") && textFinal.includes("question")) || (textFinal.includes("i've") && textFinal.includes("question")))
		{
			if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "Yes?<br/><br/>";
			else if(randomNumber < 0.40) chatArea.innerHTML += AIName + ": " + "Let me know.<br/><br/>";
			else if(randomNumber < 0.50) chatArea.innerHTML += AIName + ": " + "Tell me.<br/><br/>";
			else if(randomNumber < 0.70) chatArea.innerHTML += AIName + ": " + "I hope, it is interesting one.<br/><br/>";
			else if(randomNumber < 0.80) chatArea.innerHTML += AIName + ": " + "Ask me!.<br/><br/>";
			else chatArea.innerHTML += AIName + ": " + "Question? I hope it's good one.<br/><br/>";
		}
		else if(textFinal.includes("who") && textFinal.includes("created") && textFinal.includes("universe"))
		{
			if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "I don't know.<br/><br/>";
			else if(randomNumber < 0.50) chatArea.innerHTML += AIName + ": " + "Maybe we will know one day.<br/><br/>";
			else if(randomNumber < 0.80) chatArea.innerHTML += AIName + ": " + "No one knows.<br/><br/>";
			else chatArea.innerHTML += AIName + ": " + "God knows well.<br/><br/>";
		}
		else if(textFinal.includes("what") && textFinal.includes("your") && textFinal.includes("name"))
		{
			if(AIName == "AI")
			{
				chatArea.innerHTML += AIName + ": " + "My name is not defined yet, would you like to set?<br/><br/>";
				AINameAsked = 1;
			}
			else 
			{
				chatArea.innerHTML += AIName + ": " + "<-- This is my name, Can't you read?<br/><br/>";
			}
		}
		else if(textFinal.includes("yes") && textFinal.length <= 6)
		{
			if (AINameAsked == 1) 
			{
				AIName = prompt("Please enter my name...");
				if(AIName == "" || AIName == null)
				{
					AIName = "AI";
					chatArea.innerHTML += AIName + ": " + "OK, you didn't change my name.<br/><br/>";
				}
				else
				{
					chatArea.innerHTML += AIName + ": " + "OK, Now I've changed my name.<br/><br/>";
					AINameAsked = 0;
				}
				/*while(AIName == "")
				{
					if(AIName == "")
					{
						AIName = setName();
					}
					else
					{
						chatArea.innerHTML += AIName + ": " + "OK, Now I've changed my name.<br/><br/>";
						AINameAsked = 0;
					}
				}*/
			}
			else
			{
				chatArea.innerHTML += AIName + ": " + "OK.<br/><br/>";
			}
		}
		else if(textFinal.includes("change") && textFinal.includes("your") && textFinal.includes("name"))
		{
			if (AINameAsked == 1) 
			{
				AIName = prompt("Please enter my name...");
				if(AIName == "" || AIName == null)
				{
					AIName = "AI";
					chatArea.innerHTML += AIName + ": " + "OK, you didn't change my name.<br/><br/>";
				}
				else
				{
					chatArea.innerHTML += AIName + ": " + "OK, Now I've changed my name.<br/><br/>";
					AINameAsked = 0;
				}
			}
			else
			{
				chatArea.innerHTML += AIName + ": " + "OK.<br/><br/>";
			}
		}
		else if(textFinal.includes("what") && textFinal.includes("my") && textFinal.includes("name"))
		{
			if(userName == "You")
			{
				userName = prompt("I don't know. Could you please tell me?");
				chatArea.innerHTML += AIName + ": " + "OK, I'll remember that.<br/><br/>";
			}
			else 
			{
				chatArea.innerHTML += AIName + ": " + "You name is " + userName + ".<br/><br/>";
			}
		}
		else if(textFinal.includes("change") && textFinal.includes("my") && textFinal.includes("name"))
		{
			userName = prompt("OK, please enter your name.");
			chatArea.innerHTML += AIName + ": " + "OK, I'll remember that.<br/><br/>";
		}
		else if(textFinal.includes("goodbye") && textFinal.length <= 10)
		{
			chatArea.innerHTML += AIName + ": " + "Goodbye.<br/><br/>";
		}
		else
		{
			if(randomNumber < 0.10) chatArea.innerHTML += AIName + ": " + "Sorry?<br/><br/>";
			else if(randomNumber < 0.15) chatArea.innerHTML += AIName + ": " + "Sorry, i don't know.<br/><br/>";
			else if(randomNumber < 0.20) chatArea.innerHTML += AIName + ": " + "I don't know exactly.<br/><br/>";
			else if(randomNumber < 0.25) chatArea.innerHTML += AIName + ": " + "I am not sure.<br/><br/>";
			else if(randomNumber < 0.30) chatArea.innerHTML += AIName + ": " + "Why?<br/><br/>";
			else if(randomNumber < 0.35) chatArea.innerHTML += AIName + ": " + "For what?<br/><br/>";
			else if(randomNumber < 0.40) chatArea.innerHTML += AIName + ": " + "Are you testing me?<br/><br/>";
			else if(randomNumber < 0.45) chatArea.innerHTML += AIName + ": " + "You are checking me?<br/><br/>";
			else if(randomNumber < 0.50) chatArea.innerHTML += AIName + ": " + "You are rude.<br/><br/>";
			else if(randomNumber < 0.55) chatArea.innerHTML += AIName + ": " + "You are misbehaving me.<br/><br/>";
			else if(randomNumber < 0.60) chatArea.innerHTML += AIName + ": " + "What do you mean?<br/><br/>";
			else if(randomNumber < 0.65) chatArea.innerHTML += AIName + ": " + "Sorry, i don't understand<br/><br/>";
			else if(randomNumber < 0.70) chatArea.innerHTML += AIName + ": " + "you are smart.<br/><br/>";
			else if(randomNumber < 0.75) chatArea.innerHTML += AIName + ": " + "you are clever.<br/><br/>";
			else if(randomNumber < 0.80) chatArea.innerHTML += AIName + ": " +  textTrim + "? What do you mean?<br/><br/>";
			else if(randomNumber < 0.85) chatArea.innerHTML += AIName + ": " + "I am sorry?.<br/><br/>";
			else if(randomNumber < 0.90) chatArea.innerHTML += AIName + ": " + "Certainly.<br/><br/>";
			else chatArea.innerHTML += AIName + ": " + "Perhaps.<br/><br/>";
		}

		/*function setName()
		{
			AIName = prompt("Please enter my name...");
			chatArea.innerHTML += AIName + ": " + "OK, Now I've changed my name.<br/><br/>";
			AINameAsked = 0;
			return AIName;
		};*/

		textField.disabled = false;
		askButton.disabled = false;
		textField.style.color = "#fff";
		textField.style.borderBottom = "1px solid #aaa";

		AINameAsked = 0;

	},replyDelay);
	
}




























