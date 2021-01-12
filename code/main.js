// JavaScript source code

//screen wipe (old text gets deleted)
function textWipe() {
    document.getElementById("error").innerHTML = " "
    document.getElementById("text").innerHTML = " "
};

function FirstCallSet() {
    namePrompt();
    removeStartButton();
    createTryAgainButton();
};

//setting up the prompts
function namePrompt() {
    var firstName = prompt("Please enter your first Name", "Aura");
    var lastName = prompt("Please enter your last Name", "Bella fiora");
    var age = prompt("Please enter your age", "76");

    //setting up a cancel button solution (firefox prompts have a cancel button that still advances the code)
    if (firstName == null || lastName == null || age == null) {
        ErrorMsg();
        return;
    };

    document.getElementById("text").innerHTML = "hello " + firstName + " " + lastName + " it is nice to see you again, and you are already " + age + "!";
};

//setting up an error message
function ErrorMsg() {
    document.getElementById("error").innerHTML = "It seems you have pressed the cancel button on the prompt, this makes me sad :"
}; 

function removeStartButton() {
    var StartButton = document.getElementById("startButton");
    StartButton.parentNode.removeChild(StartButton);
    return false;
};

function createTryAgainButton() {
    var tryAgainButton = document.createElement("input");
    tryAgainButton.setAttribute("type", "button");
    tryAgainButton.setAttribute("value", "try again");
    tryAgainButton.onclick = function () { repeatingCallSet(); };
    document.getElementsByTagName("body").item(0).appendChild(tryAgainButton);
    
};

function repeatingCallSet() {
    textWipe();
    namePrompt();
    
};