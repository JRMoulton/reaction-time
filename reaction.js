
var myObject = document.getElementById("object");



let colors = ["black", "blue", "red", "cyan", "green", "navy", "silver"];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function change() {

    console.log("Here");
    myObject.style.top = getRndInteger(300, screen.height);
    myObject.style.left = getRndInteger(300, screen.width);

    myObject.style.height = Math.floor(getRndInteger(50, 500));
    myObject.style.width = myObject.style.height;
    console.log(myObject)

    myObject.style.color = colors[getRndInteger(0, colors.length)]
}