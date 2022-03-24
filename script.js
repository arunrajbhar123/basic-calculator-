var main = document.createElement('div');
main.setAttribute('id', 'container');

document.querySelector("body").append(main);

var top1 = document.createElement('div');
top1.setAttribute('class', 'top-section');
var showdis = document.createElement('div');
showdis.setAttribute('id', "showresult");
var keyborad21 = document.createElement('div');
keyborad21.setAttribute('id', "keyboard")
main.append(top1, showdis, keyborad21);


// document.querySelector("#showresult").innerText = "0";

var topdata = [
    { icon: "fa-solid fa-down-left-and-up-right-to-center" },
    { icon: "fa-solid fa-book" },
    { icon: "fa-solid fa-dice-four" },
    { icon: "fa-solid fa-dollar-sign" }
];

topdata.forEach(function(el, i, arr) {
    var boxcat = document.createElement('div');
    var icon21 = document.createElement('i');
    icon21.setAttribute('class', el.icon)
    top1.append(boxcat);
    boxcat.append(icon21);
});


var keydata = [
    { name: "AC" },
    { name: "C" },
    { name: "%" },
    { name: "/" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "*", value: "*" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "-" },
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "+" },
    { name: "min" },
    { name: "0" },
    { name: "." },
    { name: "=" }
];
keydata.forEach(function(el, i, arr) {
    var numbox = document.createElement("div");

    keyborad21.append(numbox);
    numbox.innerHTML = el.name;
});

var key = document.querySelectorAll("#keyboard div");
var showdisplay = document.querySelector("#showresult");
// console.log(keyallnumber)
for (var i = 0; i < key.length; i++) {
    key[i].addEventListener("click", mycal);
}
//addEventListener
function mycal() {
    var tagnum = event.target.textContent;
    switch (tagnum) {
        case "AC":
            showdisplay.innerText = "";
            break;
        case "C":
            showdisplay.innerText = "";
            break;
        case "=":
            showdisplay.innerText = eval(showdisplay.innerText);
            break;
        default:
            showdisplay.innerText += tagnum;
    }

}