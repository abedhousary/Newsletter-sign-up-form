let formcontainer = document.querySelector(".form-container");
let messagebox = document.querySelector(".succes-container");
let emailshower = document.querySelector(".email");
let emailinpt = document.querySelector(".inpt");
let donebtn = document.querySelector(".btn");
let erormsg = document.querySelector(".error");
function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

donebtn.onclick = () => {
    if (isValidEmail(emailinpt.value)) {
        formcontainer.style.display = "none";
        messagebox.style.display = "flex";
        emailshower.innerHTML = emailinpt.value;
    }else {
        erormsg.style.display = "block";
        emailinpt.classList.add("error-inp")
    }
}