
console.log("Hello");


let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
    let name = document.getElementById("contact-name").value;
    
    if(name.lengnt == 0) {
        nameError.innerHTML = "Name is required";
    return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }

    nameError.innerHTML = "valid";
    return true;
    
}

function validadePhone() {
    let phone = document.getElementById("contact-phone").value;

    if(phone.length == 0) {
        phoneError.innerHTML = "Phone is required";
        return false;
    }

    if(phone.length !== 10) {
        phoneError.innerHTML = "Phone should be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Please use only digits";
        return false;
    }

    phoneError.innerHTML = ""
    return true;
}



function validateMessage() {
    let message = document.getElementById("contact-message").value;
    let required = 30;
    let left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + "more characters required";
        return false;
    }

    messageError.innerHTML = "";
    return true;
}