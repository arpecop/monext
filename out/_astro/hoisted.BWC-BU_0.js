import 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js';

let emails = [];
let phones = [];
function renderEmails(container, array) {
  const emailContainer = document.getElementById(container);
  emailContainer.innerHTML = "";
  array.forEach(function(email, index) {
    const emailDiv = document.createElement("a");
    emailDiv.className = "m-1 p-1 pr-4 text-xs bg-sky-800 rounded-md flex relative cursor-pointer";
    emailDiv.textContent = email;
    const newItemButton = document.createElement("div");
    newItemButton.className = "bg-pink-700  absolute right-0 p-1 top-0 rounded-md rounded-l-none";
    newItemButton.textContent = "x";
    newItemButton.addEventListener("click", function() {
      emails.splice(index, 1);
      renderEmails(container, array);
    });
    emailDiv.appendChild(newItemButton);
    emailContainer.appendChild(emailDiv);
  });
}
function getValueFromInput(container, dummyInputId, populateID, arrayToUpdate) {
  const inputElement = document.getElementById(dummyInputId);
  const inputElementForm = document.getElementById(populateID);
  if (inputElement && inputElementForm) {
    arrayToUpdate.push(inputElement.value);
    inputElementForm.value = arrayToUpdate.join(" , ");
    inputElement.value = "";
    renderEmails(container, arrayToUpdate);
  }
}
document.getElementById("addemail")?.addEventListener("click", function() {
  getValueFromInput("emailContainer", "email", "emails", emails);
});
document.getElementById("addphone")?.addEventListener("click", function() {
  getValueFromInput("phoneContainer", "phone", "phones", phones);
});
const inputElementE = document.getElementById("inputElementE");
const inputElementP = document.getElementById("inputElementP");
if (inputElementE) {
  inputElementE.addEventListener("input", function() {
    const emailsElement = document.getElementById("emails");
    if (emailsElement) {
      emailsElement.value = inputElementE.value;
    }
  });
}
if (inputElementP) {
  inputElementP.addEventListener("input", function() {
    const phonesElement = document.getElementById("phones");
    if (phonesElement) {
      phonesElement.value = inputElementP.value;
    }
  });
}
