function validation() {
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let age = document.querySelector("#number");
    let postion = document.querySelector("#dropdown");
    let radios = document.querySelector("input[name='radio-buttons']");
    let most_like = document.querySelector("#most-like");
    isNotEmpty(name);
    isNotEmpty(email);
    isNotEmpty(age);
    isNotEmpty(postion);
    isRadiosChecked(radios);
    isNotEmpty(most_like);
    //to prevent from submitting the form
    return false;
}

function isNotEmpty(field) {
    let fieldValue = field.value;
    if(fieldValue == 0 || fieldValue == "") {
        alert("Check the field " + field.name);
        return false;
    } else {
        return true;
    }
}

function isRadiosChecked(radios) {
    let i = 0;
    let bool = false;
    while(i < radios.length) {
        if(radios[i].checked) {
            return true;
        }
    }
    if(!bool) {
        alert("Check the field " + radios.name);
    }
}