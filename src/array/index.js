
const names =["Duy", "Nam", "Hanh", "Trang"];

console.log(names);

const newNames = names.push("An");

// Truy cập phần tử trong mảng

console.log(names[1]);
console.log(names[5]); // undefined

console.log(names.length); // 5

// Duyệt mảng
for (let a = 0; a< names.length; a++) {
    console.log(names[a])
}

// Chỉnh sửa phần tử trong mảng
names[0] = "Hoàng Quốc Duy";
console.log(names);

// Thêm phần tử vào mảng
names.push("Minh");
console.log(names);

names.unshift("Linh");
console.log(names);

// Xóa phần tử trong mảng

names.pop();
console.log(names);
names.shift();
console.log(names);

names.forEach(function(name, index) {
    console.log(name, index);
});

names.forEach((name, index) => {
    console.log(name, index);
});

// Map
const scores = [9, 8, 7, 6, 5];
// Biến đổi mảng với map
const newScores = scores.map(a => a + 1);
console.log(newScores); 

// Filter
newNamesArray = names.filter(num => num.length > 3);
console.log(newNamesArray);
names[0] = "Duy";
// filter with index
const age = [18, 19, 20, 21, 22];
const newAge = age.filter((item, index) => {
    return item > 18 && index < 3;
});
console.log(newAge);

// filter with string

const foo = ["Duy", "Nam", "Hanh", "Trang", "An", "Linh"];
const newFoo = foo.filter((item) => {
    return item.startsWith("H");
});
console.log(newFoo);