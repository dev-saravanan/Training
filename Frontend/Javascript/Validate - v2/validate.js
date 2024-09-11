const firstNameErrorEl = document.getElementById("firstNameError")
const lastNameErrorEl = document.getElementById("lastNameError")
const emailErrorEl = document.getElementById("emailError")
const phoneErrorEl = document.getElementById("phoneError")
const companyErrorEl = document.getElementById("companyError")
const businessTypeErrorEl = document.getElementById("businessTypeError")
const websiteTypeErrorEl = document.getElementById("websiteTypeError")

// const firstNameInput =

function checkFirstName(event) {
    if ((event.target.value).trim() === "") {
        firstNameErrorEl.classList.add("d-block")
        firstNameErrorEl.classList.remove("d-none")
        firstNameErrorEl.textContent = "Please enter first name."
    } else {
        firstNameErrorEl.classList.add("d-none")
        firstNameErrorEl.classList.remove("d-block")
        firstNameErrorEl.textContent = ""
    }
}

function checkLastName(event) {
    if ((event.target.value).trim() === "") {
        lastNameErrorEl.classList.add("d-block")
        lastNameErrorEl.classList.remove("d-none")
        lastNameErrorEl.textContent = "Please enter last name."
    } else {
        lastNameErrorEl.classList.add("d-none")
        lastNameErrorEl.classList.remove("d-block")
        lastNameErrorEl.textContent = ""
    }
}

function checkEmail(event) {
    if ((event.target.value).trim() === "") {
        emailErrorEl.classList.add("d-block")
        emailErrorEl.classList.remove("d-none")
        emailErrorEl.textContent = "Please enter valid email address."
    } else {
        emailErrorEl.classList.add("d-none")
        emailErrorEl.classList.remove("d-block")
        emailErrorEl.textContent = ""
    }
}

function checkPhone(event) {
    if ((event.target.value).trim() === "") {
        phoneErrorEl.classList.add("d-block")
        phoneErrorEl.classList.remove("d-none")
        phoneErrorEl.textContent = "Please enter phone number."
    } else {
        phoneErrorEl.classList.add("d-none")
        phoneErrorEl.classList.remove("d-block")
        phoneErrorEl.textContent = ""
    }
}

function checkCompany(event) {
    if ((event.target.value).trim() === "") {
        companyErrorEl.classList.add("d-block")
        companyErrorEl.classList.remove("d-none")
        companyErrorEl.textContent = "Please enter company name."
    } else {
        companyErrorEl.classList.add("d-none")
        companyErrorEl.classList.remove("d-block")
        companyErrorEl.textContent = ""
    }
}

function checkBusinessType(event) {
    if ((event.target.value).trim() === "") {
        businessTypeErrorEl.classList.add("d-block")
        businessTypeErrorEl.classList.remove("d-none")
        businessTypeErrorEl.textContent = "Please select business type"
    } else {
        businessTypeErrorEl.classList.add("d-none")
        businessTypeErrorEl.classList.remove("d-block")
        businessTypeErrorEl.textContent = ""
    }
}

function checkWebsiteType(event) {
    if ((event.target.value).trim() === "") {
        websiteTypeErrorEl.classList.add("d-block")
        websiteTypeErrorEl.classList.remove("d-none")
        websiteTypeErrorEl.textContent = "Please select business type"
    } else {
        websiteTypeErrorEl.classList.add("d-none")
        websiteTypeErrorEl.classList.remove("d-block")
        websiteTypeErrorEl.textContent = ""
    }
}


function submitForm(event) {
    event.preventDefault();
    console.log(event);

}