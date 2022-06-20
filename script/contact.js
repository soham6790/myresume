let myForm = document.getElementById("myform")
myForm.addEventListener("submit", validate);

function validate() {

    event.preventDefault();

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let errorMsg = document.getElementById("errorMsg");
    const namePattern = /^[A-Za-z]+$/g;
    const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g;
    const validmessages = ["christian", "josh", "fazil"];
    const errors = [];

    firstName.style.border = "1px solid black";
    lastName.style.border = "1px solid black";
    message.style.border = "1px solid black";
    errorMsg.innerHTML = "";

    if (!(firstName.value.match(namePattern))) {
        errors.push("FistName should contain alphabet only.");
        firstName.style.borderColor = "red";
    }
    if (!(lastName.value.match(namePattern))) {
        errors.push("LastName should contain alphabet only.");
        lastName.style.borderColor = "red";
    }
    if (!(email.value.match(emailPattern))) {
        errors.push("Email should be in correct format - e.g. xxx@xxx.com, xxx@xxx.org, xxx@xxx.net");
        lastName.style.borderColor = "red";
    }

    if (errors.length === 0) {
        myForm.submit();
    }

    for (let m of errors) {
        errorMsg.innerHTML = errorMsg.innerHTML + "<p>" + m + "<p>";
    }

}