
var myObject = document.getElementById("object");
var myInput = document.getElementById("input");
var body = document.getElementById("body");
var mySubmit = document.getElementById("submit");

let colors = ["black", "blue", "red", "cyan", "green"];
var prevColor = "black";

newColor = "black";
heightWidth = 10;
sqCir = 0;


input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        mySubmit.click();
    }
});

function getInput() {
    let count = myInput.value;
    myInput.value = "";
    myInput.style.height = "0px";

    body.removeChild(myInput);
    body.removeChild(mySubmit);
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function change() {

    console.log("Here");
    myObject.style.top = getRndInteger(300, screen.height - 500).toString() + "px";
    myObject.style.left = getRndInteger(300, screen.width - 500).toString() + "px";

    heightWidth = Math.floor(getRndInteger(15, 300)).toString() + "px";
    myObject.style.height = heightWidth;
    myObject.style.width = heightWidth;

    sqCir = getRndInteger(0, 2);
    if (sqCir == 0) {
        myObject.style.borderRadius = "0%";
    } else {
        myObject.style.borderRadius = "50%";
    }

    while (prevColor == newColor) {
        newColor = colors[getRndInteger(0, colors.length)];
    }
    prevColor = newColor;
    myObject.style.background = newColor;
}


