var name = prompt("Write your name, and see magic 🥰")
console.log(name);
document.write("<h1>" + name + "</h1>");
document.write("Page URL: " + document.baseURI + "<br>");
document.write("Page tiles: " + document.title + "<br>");
var pars = document.getElementsByTagName('p');
document.writeln(pars + "<br>");
function count() {
    document.write(pars.length);
}
function nm() {
    document.getElementById("test").innerHTML = name;

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
function message(msg) {
    document.getElementById('output').innerHTML = msg + " munataha";
}
function  dsiplayDate() {
    document.getElementById("date").innerHTML = Date();

}

