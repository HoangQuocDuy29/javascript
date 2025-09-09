
const fullnameInput = document.getElementById("fullname");
const submitBtn = document.getElementById("submit-btn");

//const savedMessage = document.addEventListener("fullname");
const savedMessage = localStorage.getItem("fullname");
if (savedMessage) {
    savedMessage.innerHTML = savedMessage;
}
submitBtn.addEventListener("click", () => {
    console.log(fullnameInput.value);
    document.getElementById("message").innerHTML = fullnameInput.value;
    localStorage.setItem("fullname", fullnameInput.value);
});

