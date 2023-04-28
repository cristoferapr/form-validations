/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const cardInput = document.getElementById("card");
  const cvcInput = document.getElementById("cvc");
  const amountInput = document.getElementById("amount");
  const firstNameInput = document.getElementById("firstname");
  const lastNameInput = document.getElementById("lastname");
  const cityInput = document.getElementById("city");
  const postalCodeInput = document.getElementById("postalcode");
  const stateInput = document.getElementById("state");
  const radioInputs = document.querySelectorAll('input[type="radio"]');

  const errorDiv = document.getElementById("errors");
  const errorMessages = [];

  const validateInputs = () => {
    const cardValue = cardInput.value;
    const cvcValue = cvcInput.value;
    const amountValue = amountInput.value;
    const firstNameValue = firstNameInput.value;
    const lastNameValue = lastNameInput.value;
    const cityValue = cityInput.value;
    const postalCodeValue = postalCodeInput.value;
    let radioValid = false;

    const cardRegex = /^\d{16}$/;
    const cvcRegex = /^\d{3,4}$/;
    const amountRegex = /^\d+$/;
    const firstNameRegex = /^[A-Za-z\s]+$/;
    const lastNameRegex = /^[A-Za-z\s]+$/;
    const cityRegex = /^[A-Za-z\s]+$/;
    const postalCodeRegex = /^\d{5,8}$/;

    const isCardValid = cardRegex.test(cardValue);
    const isCvcValid = cvcRegex.test(cvcValue);
    const isAmountValid = amountRegex.test(amountValue);
    const isfirstNameValid = firstNameRegex.test(firstNameValue);
    const islastNameValid = firstNameRegex.test(lastNameValue);
    const iscityValid = firstNameRegex.test(cityValue);
    const ispostalCodeValid = postalCodeRegex.test(postalCodeValue);
    radioInputs.forEach(input => {
      if (input.checked) {
        radioValid = true;
      }
    });

    errorMessages.length = 0; // Vaciar el arreglo de mensajes de error

    if (!isCardValid) {
      errorMessages.push("Card should be XXXX XXXX XXXX XXXX");
    }

    if (!isCvcValid) {
      errorMessages.push("CVC should be XXX/XXXX");
    }

    if (!isAmountValid) {
      errorMessages.push("Enter a valid amount");
    }

    if (!isfirstNameValid) {
      errorMessages.push("Please enter a valid first name");
    }

    if (!islastNameValid) {
      errorMessages.push("Please enter a last name");
    }

    if (!iscityValid) {
      errorMessages.push("City is required");
    }

    if (!ispostalCodeValid) {
      errorMessages.push("Please enter a valid postal code");
    }

    if (stateInput.value === "") {
      errorMessages.push("Please select a state");
    }

    if (!radioValid) {
      errorMessages.push("Please select a card type");
    }

    if (errorMessages.length === 0) {
      errorDiv.innerHTML = "";
    } else {
      errorDiv.innerHTML = createErrorMessage(errorMessages.join("<br>"));
    }
  };

  const createErrorMessage = message => {
    return `
      <div class="col-sm">
      <div class="bg-danger bg-opacity-25 pt-3 pb-3 ps-3 rounded">
          <span class="text-danger">${message}</span>
      </div>
      </div>
  `;
  };

  cardInput.addEventListener("input", validateInputs);
  cvcInput.addEventListener("input", validateInputs);
  amountInput.addEventListener("input", validateInputs);
  firstNameInput.addEventListener("input", validateInputs);
  lastNameInput.addEventListener("input", validateInputs);
  cityInput.addEventListener("input", validateInputs);
  postalCodeInput.addEventListener("input", validateInputs);
  stateInput.addEventListener("change", validateInputs);

  radioInputs.forEach(input => {
    input.addEventListener("click", validateInputs);
  });
};
