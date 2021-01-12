// JavaScript source code

//screen wipe (old text gets deleted)
function textWipe() {
    document.getElementById("error").innerHTML = " "
    document.getElementById("text").innerHTML = " "
};

//runs all functions that are needed on the first button press
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

//deletes the start button for a nice a clean screen
function removeStartButton() {
    var StartButton = document.getElementById("startButton");
    StartButton.parentNode.removeChild(StartButton);
    return false;
};

//creates a try again button so the code can be used multible times without reloading the page
function createTryAgainButton() {
    var tryAgainButton = document.createElement("input");
    tryAgainButton.setAttribute("type", "button");
    tryAgainButton.setAttribute("value", "try again");
    tryAgainButton.onclick = function () { repeatingCallSet(); };
    document.getElementsByTagName("body").item(0).appendChild(tryAgainButton);
    
};

//runs all functions that are needed on every other run exampting the first
function repeatingCallSet() {
    textWipe();
    namePrompt();
};