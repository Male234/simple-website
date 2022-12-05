let userName = window.prompt("Wprowadz imie: ");

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name: ")
    
}

// ! oh no!
// TODO help myself
// ? why
// * ?
// TODO help

// * Show name
document.getElementById("showNameBtn").onclick = function(){
    document.getElementById("bruh").innerHTML = userName
    console.warn("Name shown!")
}
// * Hide name
document.getElementById("hideNameBtn").onclick = function(){
    document.getElementById("bruh").innerHTML = ""
    console.log("Name hidden")
    console.error("lol")
}
/*
console.log(userName.length);
console.log(userName);
console.log(userName.charAt(0));
console.log(userName.indexOf('M'));
console.log(userName.lastIndexOf('e'));
*/
