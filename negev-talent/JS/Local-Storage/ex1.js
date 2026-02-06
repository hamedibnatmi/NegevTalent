const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");
const clearBtn = document.createElement("button");
button.textContent = "Add";
clearBtn.textContent = "Clear";
const ul = document.createElement("ul");


body.appendChild(input);
body.appendChild(button);
body.appendChild(clearBtn);
body.appendChild(ul);


button.addEventListener("click", () => {
    const li = document.createElement("li");
    const id = crypto.randomUUID();
    li.id = id;
    const deleteBtn = document.createElement("span");
    li.appendChild(deleteBtn);
    deleteBtn.textContent = "X";
    if (input.value.trim()) {
        li.append(input.value);
        ul.appendChild(li);
    }
    let wisdom = [];
    if (localStorage.getItem("wisdom")) {
        wisdom = JSON.parse(localStorage.getItem("wisdom"));
    }
    wisdom.push({ id: id, text: input.value });
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
    input.value = "";

});

window.addEventListener("load", () => {
    let wisdom = [];
    if (localStorage.getItem("wisdom")) {
        wisdom = JSON.parse(localStorage.getItem("wisdom"));
    }
    if (wisdom) {
        wisdom.forEach((item) => {
            const li = document.createElement("li");
            li.id = item.id;
            const deleteBtn = document.createElement("span");
            li.appendChild(deleteBtn);
            deleteBtn.textContent = "X";
            li.append(item.text);
            ul.appendChild(li);
        });
    }
});

document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        const li = e.target.parentElement;
        li.remove();
        let wisdom = [];
        if (localStorage.getItem("wisdom")) {
            wisdom = JSON.parse(localStorage.getItem("wisdom"));
        }
        const filteredWisdom = wisdom.filter((item) => item.id !== li.id);
        localStorage.setItem("wisdom", JSON.stringify(filteredWisdom));
    }
});

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("wisdom");
    ul.innerHTML = "";
});
