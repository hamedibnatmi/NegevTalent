console.log(document.getElementById("form"))

const body = document.getElementsByTagName("body")[0];
const form = document.createElement("form");
const nameLabel = document.createElement("label");
const desiredSalaryLabel = document.createElement("label");
const nameInput = document.createElement("input");
const desiredSalaryInput = document.createElement("input");
const birthDateLabel = document.createElement("label");
const birthDateInput = document.createElement("input");
const middleDiv = document.createElement("div");
const desiredSalaryDiv = document.createElement("div");
const birthDateDiv = document.createElement("div");
const phoneLabel = document.createElement("label");
const phoneInput = document.createElement("input");
const errorMessageDiv = document.createElement("div");
const formFooter = document.createElement("footer");

nameLabel.innerHTML = "Name";
desiredSalaryLabel.innerHTML = "Desired Salary";
birthDateLabel.innerHTML = "Birth Date";
phoneLabel.innerHTML = "Phone";
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(desiredSalaryLabel);
form.appendChild(desiredSalaryInput);
form.appendChild(birthDateLabel);
form.appendChild(birthDateInput);
form.appendChild(middleDiv);
middleDiv.appendChild(desiredSalaryDiv);
middleDiv.appendChild(birthDateDiv);
desiredSalaryDiv.appendChild(desiredSalaryLabel);
desiredSalaryDiv.appendChild(desiredSalaryInput);
birthDateDiv.appendChild(birthDateLabel);
birthDateDiv.appendChild(birthDateInput);
form.appendChild(phoneLabel);
form.appendChild(phoneInput);
form.appendChild(formFooter);
body.appendChild(form);
const button = document.createElement("button");
formFooter.appendChild(button);
formFooter.after(errorMessageDiv);
button.innerHTML = "Submit";


//form
form.style.display = "flex";
form.style.flexDirection = "column";

desiredSalaryInput.style.width = "200px";
birthDateInput.style.width = "200px";

middleDiv.style.display = "flex";
middleDiv.style.flexDirection = "row";

formFooter.style.display = "flex";
formFooter.style.flexDirection = "row";
errorMessageDiv.style.color = "darkred";



form.style.width = "450px";
form.style.height = "auto";
form.style.padding = "10px";
form.style.gap = "30px";
form.style.backgroundColor = "green";
form.style.borderRadius = "5px";
form.style.border = "5px solid darkgreen";

//submit button
button.style.backgroundColor = "darkgreen";
button.style.color = "black";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.padding = "10px";
button.style.cursor = "pointer";
button.style.width = "100px";
button.style.marginLeft = "auto";
button.style.marginTop = "auto";
button.style.boxShadow = "0 0 5px darkgreen";

nameInput.name = "name";
desiredSalaryInput.name = "desiredSalary";
birthDateInput.name = "birthDate";
phoneInput.name = "phone";
nameInput.id = "name";
desiredSalaryInput.id = "desiredSalary";
birthDateInput.id = "birthDate";
phoneInput.id = "phone";
nameLabel.htmlFor = "name";
desiredSalaryLabel.htmlFor = "desiredSalary";
birthDateLabel.htmlFor = "birthDate";
phoneLabel.htmlFor = "phone";
nameInput.type = "text";
desiredSalaryInput.type = "number";
birthDateInput.type = "date";
phoneInput.type = "tel";
nameInput.required = true;
desiredSalaryInput.required = true;
birthDateInput.required = true;
phoneInput.required = true;
nameInput.minLength = 2;
nameInput.maxLength = 20;
desiredSalaryInput.min = 10000;
desiredSalaryInput.max = 16000;
birthDateInput.min = "1900-01-01";
birthDateInput.max = "2008-01-01";
phoneInput.minLength = 10;
phoneInput.maxLength = 10;
form.noValidate = true;


form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("name", e)
    checkValidity(e.target)
})


function checkValidity(formInputs) {
    errorMessageDiv.innerHTML = "";
    for (let input of formInputs) {
        console.log(input.validity)
        if (input.validity.valueMissing) {
            const error = document.createElement("p");
            const label = document.querySelector(`label[for="${input.id}"]`);
            error.innerHTML = `${label.innerHTML} is missing`;
            errorMessageDiv.appendChild(error);
        }
        if (input.validity.tooShort) {
            const errorShort = document.createElement("p");
            const label = document.querySelector(`label[for="${input.id}"]`);
            errorShort.innerHTML = `${label.innerHTML} is too short`;
            errorMessageDiv.appendChild(errorShort);
        }
    }
    if (errorMessageDiv.children.length == 0) { //  extention 1
        form.style.display = "none";
    }
}



