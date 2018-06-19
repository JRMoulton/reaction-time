
var myObject = document.getElementById("object");



let colors = ["black", "blue", "red", "cyan", "green"];
var prevColor = "black";
newColor = "black";
heightWidth = 10;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function change() {

    console.log("Here");
    myObject.style.top = getRndInteger(300, screen.height-500).toString() + "px";
    myObject.style.left = getRndInteger(300, screen.width-500).toString() + "px";

    heightWidth = Math.floor(getRndInteger(50, 300)).toString() + "px";
    myObject.style.height = heightWidth;
    myObject.style.width = heightWidth;

    while (prevColor == newColor) {
        newColor = colors[getRndInteger(0, colors.length)];
    }
    prevColor = newColor;
    myObject.style.background = newColor;
    console.log(myObject.style.top);
}