// Lấy phần tử có id là greeting
const element = document.getElementById("btn");


// Lắng nghe sự kiện click
element.addEventListener("click", function() {
    console.log("Hello Duy");
});
console.log(element);

const handleClick = () =>{
    console.log("Hello Duy Arrow");
}

element.addEventListener("click", handleClick);