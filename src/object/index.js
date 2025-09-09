// let person = {

//     name : "Duy",
//     age : 20,
//     address : "Hà Nội",
//     isStudent : false,
//     scores : [9, 8, 7, 6, 5],
// }

// console.log(person);

// console.log("Age: " , person.age); // recommended
// console.log("Name: " , person["name"]);

// // Thêm thuộc tính mới
// person.email = "duy@example.com";
// console.log("Email: ", person.email);

// // Sửa thuộc tính
// person.age = 21;
// console.log("New Age: ", person.age);

// // Xóa thuộc tính
// delete person.isStudent;
// console.log(person);

// // Duyệt object
// for (let key in person) {
//     console.log(key, person[key]);
// }

// // Lặp object sử dụng for
// Object.keys(person).forEach(key => {
//     console.log(key, person[key]);
// });

const producrs1 = {
    name : "Iphone 14 Pro Max",
    price : 30000000,
    isStock : true,
}
const producrs2 = {
    name : "Samsung Galaxy S23 Ultra",
    price : 25000000,
    isStock : true,
}
const producrs3 = {
    name : "Xiaomi 13 Pro",
    price : 20000000,
    isStock : false,
}   
const producrs4 = {
    name : "Oppo Find X5 Pro",
    price : 18000000,
    isStock : true,
}
const products5 = {
    name : "Vivo X80 Pro",
    price : 17000000,
    isStock : false,
} 

const products = [producrs1, producrs2, producrs3, producrs4, products5];

//  In ra tên của sản phẩm đầu tiên
console.log( "Tên sản phẩm đầu tiên: " , products[0].name)

//Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
console.log("Danh sách sản phẩm: ");
products[0].price = 150;
for (let key in products) {
    
    console.log(key, products[key]);
}

//Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
const products6 = {
    name : "Realme GT 2 Pro",
    price : 1600000,
    isStock : true,
}

products.push(products6);
console.log("Danh sách sản phẩm sau khi thêm: ");
for (let key in products) {
    
    console.log(key, products[key]);
}
//Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
products.pop();
console.log("Danh sách sản phẩm sau khi xóa: ");
for (let key in products) {
    console.log(key, products[key]);
}

// Dùng forEach() để in ra tất cả tên sản phẩm.
products.forEach((item, index) =>{
    console.log(index, item.name);
});
 // Dùng map() để tạo một mảng mới chỉ gồm giá của tất cả sản phẩm và in ra mảng đó.
const priceProducts = products.map(item => item.price);
console.log("Giá sản phẩm: ", priceProducts);

// Dùng filter() để tạo một mảng mới chỉ gồm các sản phẩm còn hàng (isStock là true) và in ra mảng đó.
const inStockProducts = products.filter(item => item.isStock)
console.log("Sản phẩm còn hàng: ", inStockProducts);

// Duyệt qua các thuộc tính của sản phẩm đầu tiên
for(let key in products[0]) {
    console.log(key, products[0][key]);
}