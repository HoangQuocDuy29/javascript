const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "admin" && password === "12345") {
        window.location.href = "success.html";
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        alert("Invalid credentials");
    }
});
