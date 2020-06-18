// alert("Hello There");
// prompt("Enter you unique code to access this site: ");
// console.log("Hello to Console");
// document.write("Time to learn JavaScript");
//
// function Test()
// {
//     document.getElementById("test").innerHTML = "Hello World";
// }

// var name = prompt("Write your name, and see magic 🥰")
// console.log(name);
// // document.write("<h1>" + name + "</h1>");
// document.write("Page URL: " + document.baseURI + "<br>");
// document.write("Page tiles: " + document.title + "<br>");
var pars = document.getElementsByTagName('p');
document.writeln(pars + "<br>");
function count() {
    document.write(pars.length);
}
var pr = "Hello from function parameter";
function para(pr) {
    alert(pr);
};
var msg = "Hello, Good Morning";

function welcomeMsg(msg) {
    alert(msg);
    var name = prompt("What is your name?");
    return name;
}
function nm() {
    document.getElementById("test").innerHTML = name;
}
var firstName = welcomeMsg("Hi");

