const name  = " Duy";

birhthYear = 2003;

isStudent = false;

const today = new Date();
const currentYear = today.getFullYear();

console.log(currentYear, typeof currentYear);

const calculateAge = currentYear - birhthYear;

console.log
(`
    fullName: ${name}, 
    birhthYear: ${birhthYear}, 
    isStudent: ${isStudent}, 
    currentYear: ${currentYear}, 
    age: ${calculateAge}
`);

const address = (a,b) => {
    return a + b;
}

console.log(address(10,19))