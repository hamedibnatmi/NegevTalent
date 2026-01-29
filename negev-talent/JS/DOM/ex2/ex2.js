const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

console.log(document)

let myDiv = document.createElement("div");
let myInput = document.createElement("input")
let title = document.createElement("h1")
let btn = document.createElement("button");
let message = document.createElement("p");
let body = document.getElementsByTagName("body")[0];
console.log(body)
body.append(myDiv);
myDiv.append(myInput);
myInput.before(title);
myInput.after(btn)
btn.after(message)
title.innerHTML = "Name:";
title.style.color = "darkblue";
btn.innerHTML = "submit";
myInput.setAttribute("id", "myInput");


function getInputValue(e) {
    let myInputValue = document.getElementById("myInput");
    testRes(myInputValue.value.trim());
    myInputValue.value = ""
}

function testRes(value) {
    if (!reservations[value]) {
        message.innerHTML = "You have no reservation"
        return
    }
    message.innerHTML = (reservations[value].claimed) ? `Hmm, someone already claimed this reservation` : `Welcome, ${value}`;
}


myInput.setAttribute("onBlur", "getInputValue(event)");

