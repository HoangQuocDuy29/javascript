
const myText = document.getElementById("myText");
const myBtn = document.getElementById("btn");
const callbackBtn = document.getElementById("callbackbtn");

myBtn.addEventListener("click", () => {
    myText.innerHTML = "Hello Duy";
    // Thay đổi style
    myText.style.color = "red";
    myText.style.backgroundColor = "black";
    myText.style.padding = "20px";
    myText.style.textAlign = "center";
    alert("Đã thay đổi HTML");
});

callbackBtn.addEventListener("click", () => {
    myText.innerHTML = "Change HTML";
    // Thay đổi style
    myText.style.color = "blue";
    myText.style.backgroundColor = "yellow";
    myText.style.padding = "30px";
    myText.style.textAlign = "left";
    // alert
    alert("Đã quay về trạng thái ban đầu");
});