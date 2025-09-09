console.log("ABC");

function test() {
    var boo = "boo";
    let bar = "bar";

    {
        let baz = "new bar";
        var boz = "new boo";
    }

    console.log(boo);
    console.log(bar);
    console.log(boz);
    //console.log(baz);

}
test();

function test2() {
    let age;
    age = 31;
    const name = "John";
    //name = "Doe";

    const array = [1, 2, 3];
    console.log(age);
    console.log(name);
    console.log(array);
}test2();