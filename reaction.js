
var myObject = document.getElementById("object");
var myInput = document.getElementById("input");
var body = document.getElementById("body");
var mySubmit = document.getElementById("submit");

let colors = ["black", "blue", "red", "cyan", "green"];
var prevColor = "black";

var startTime;
var times = [];
var steps = 0;
var count = 0;
var average = 0;

newColor = "black";
heightWidth = 10;
sqCir = 0;

input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        mySubmit.click();
    }
})

function getAvg(myArray) {
    return myArray.reduce(function (p, c) {
        return p + c;
    }) / myArray.length;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getInput() {
    count = myInput.value;
    if (count % 1 != 0) {
        myInput.value = "";
        myInput.placeholder = "Enter an integer";
    } else {
        body.removeChild(myInput);
        body.removeChild(mySubmit);

        startTime = new Date().getTime();

        heightWidth = Math.floor(getRndInteger(15, 300)).toString() + "px";
        myObject.style.height = heightWidth;
        myObject.style.width = heightWidth;

        myObject.style.top = getRndInteger(300, screen.height - 500).toString() + "px";
        myObject.style.left = getRndInteger(300, screen.width - 500).toString() + "px";
    }
}

function change() {

    times.push(new Date().getTime() - startTime);
    startTime = new Date().getTime();

    if (steps < count - 1) {
        myObject.style.top = getRndInteger(200, window.innerHeight - 500).toString() + "px";
        myObject.style.left = getRndInteger(200, window.innerWidth - 500).toString() + "px";

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

        steps++;
    } else {

        average = getAvg(times);
        body.removeChild(myObject);
        var para = document.createElement("strong");
        var node = document.createTextNode("Your average time was " + (average / 1000).toFixed(3).toString() + " seconds");
        para.appendChild(node);
        para.setAttribute("id", "para")
        body.appendChild(para);

        avgTime = document.getElementById("para");
        avgTime.style.position = "fixed";
        avgTime.style.top = "40%";
        avgTime.style.left = "36%";
        avgTime.style.fontSize = "200%"

    }
}

