var keypress = document.querySelectorAll("#bottom-part>div");
var display = document.querySelector(".middle-part");
for (var i = 0; i < keypress.length; i++) {
    keypress[i].addEventListener("click", mycal);
}



function mycal() {
    var tarval = event;
    display.innerText = tarval;
    console.log(tarval);
    switch (tarval) {
        case "AC":
            display.innerText = "";
            break;
        case "C":
            display.innerText = "";
            break;
        case "=":

            display.innerText = eval(display.innerText);
            break;
        default:
            display.innerText += tarval;
    }
}