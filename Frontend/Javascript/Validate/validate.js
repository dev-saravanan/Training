const firstNameErrorEl = document.getElementById("firstNameError")
const lastNameErrorEl = document.getElementById("lastNameError")
const emailErrorEl = document.getElementById("emailError")
const phoneErrorEl = document.getElementById("phoneError")
const companyErrorEl = document.getElementById("companyError")
const businessTypeErrorEl = document.getElementById("businessTypeError")
const websiteTypeErrorEl = document.getElementById("websiteTypeError")
const navigationCheckBoxErrorEl = document.getElementById("navigationCheckBoxError")
const additionalServiceCheckBoxErrorEl = document.getElementById("additionalServiceCheckBoxError")

const firstNameInputEl = document.getElementById("firstName")
const lastNameInputEl = document.getElementById("lastName")
const emailInputEl = document.getElementById("emailInput")
const phoneInputEl = document.getElementById("phoneInput")
const companyInputEl = document.getElementById("companyInput")
const businessTypeInputEl = document.getElementById("businessTypeInput")
const websiteTypeInputEl = document.getElementById("websiteTypeInput")
const navigationCheckBoxGroup = document.querySelectorAll('input[name="nav-items"]')
const additionalServiceCheckBoxGroup = document.querySelectorAll('input[name="additional-service"]')

const websiteFormEl = document.getElementById("websiteForm")

websiteFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    validateInput()
})


function checkIsEmpty(element, errorMsgElement, message) {
    if (element.value.trim() === "") {
        errorMsgElement.textContent = message
        errorMsgElement.classList.add("d-block")
        errorMsgElement.classList.remove("d-none")
    } else {
        errorMsgElement.textContent = ""
        errorMsgElement.classList.add("d-none")
        errorMsgElement.classList.remove("d-block")
    }
}

function checkIsEmailValid(element, errorMsgElement, emptyEmailMsg, invalidEmailMsg) {
    if (element.value.trim() === "") {
        errorMsgElement.textContent = emptyEmailMsg
        errorMsgElement.classList.add("d-block")
        errorMsgElement.classList.remove("d-none")
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(element.value.trim())) {
        errorMsgElement.textContent = invalidEmailMsg
        errorMsgElement.classList.add("d-block")
        errorMsgElement.classList.remove("d-none")
    } else {
        errorMsgElement.textContent = ""
        errorMsgElement.classList.add("d-none")
        errorMsgElement.classList.remove("d-block")
    }
}

function checkPhoneIsValid(element, errorMsgElement, emptyPhoneMsg, invalidPhoneMsg) {
    if (element.value.trim() === "") {
        errorMsgElement.textContent = emptyPhoneMsg
        errorMsgElement.classList.add("d-block")
        errorMsgElement.classList.remove("d-none")
    } else if (!(element.value.trim().length === 10 && !isNaN(element.value.trim()))) {
        errorMsgElement.textContent = invalidPhoneMsg
        errorMsgElement.classList.add("d-block")
        errorMsgElement.classList.remove("d-none")
    } else {
        errorMsgElement.textContent = ""
        errorMsgElement.classList.add("d-none")
        errorMsgElement.classList.remove("d-block")
    }
}

function checkAtleastOneChecked(checkBoxList, errorMsgElement, message, minimumChecked) {
    let checkedItemsCount = 0;

    for (let i = 0; i < checkBoxList.length; i++) {
        if (checkBoxList[i].checked) {
            checkedItemsCount++
        }
    }

    if (checkedItemsCount >= minimumChecked) {
        errorMsgElement.textContent = ""
        errorMsgElement.classList.add("d-none")
        errorMsgElement.classList.remove("d-block")
    } else {
        errorMsgElement.textContent = message
        errorMsgElement.classList.add("d-block")
        errorMsgElement.classList.remove("d-none")
    }
}

function checkIsNameValid(element, errorMsgElement, emptyNameMsg, invalidNameMsg) {
    const nameIsValid = ([...element.value.trim()].filter((a) => !isNaN(a)).length) === 0;

    if (element.value.trim() === "") {
        errorMsgElement.textContent = emptyNameMsg
        errorMsgElement.classList.add("d-block")
        errorMsgElement.classList.remove("d-none")
    } else if (!nameIsValid) {
        errorMsgElement.textContent = invalidNameMsg
        errorMsgElement.classList.add("d-block")
        errorMsgElement.classList.remove("d-none")
    } else {
        errorMsgElement.textContent = ""
        errorMsgElement.classList.add("d-none")
        errorMsgElement.classList.remove("d-block")
    }


}



function validateInput() {
    // First name validation
    checkIsNameValid(firstNameInputEl, firstNameErrorEl, "Firstname cannot be empty", "Firstname is invalid")

    // Last Name Validation
    checkIsNameValid(lastNameInputEl, lastNameErrorEl, "Lastname cannot be empty", "Lastname is invalid")

    // Email Validation
    checkIsEmailValid(emailInputEl, emailErrorEl, "Email cannot be empty", "Provide a valid email")

    // Phone Number Validation
    checkPhoneIsValid(phoneInputEl, phoneErrorEl, "Phone number cannot be empty", "Provide a valid phone number")

    // Company Name Validation
    checkIsEmpty(companyInputEl, companyErrorEl, "Company cannot be empty")

    // Type of Business Validation
    checkIsEmpty(businessTypeInputEl, businessTypeErrorEl, "Select the business type")

    // Type of Website Validation
    checkIsEmpty(websiteTypeInputEl, websiteTypeErrorEl, "Select the website type")

    // Navigation Checkbox Validation
    checkAtleastOneChecked(navigationCheckBoxGroup, navigationCheckBoxErrorEl, "Select atleast 3 navigation item", 3)

    // Additional Services Checkbox Validation
    checkAtleastOneChecked(additionalServiceCheckBoxGroup, additionalServiceCheckBoxErrorEl, "Select atleast one additional service", 1)

}