const passwordBox = document.getElementById("password");
const lenght = 17;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWxYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#^%*</'*>+{}]-.([);&~";

const allCharac = upperCase + lowerCase + numbers + symbol;

function createpassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

while(lenght > password.length){
password += allCharac[Math.floor(Math.random() * allCharac.length)];
}
passwordBox.value = password;      
}
function copypassword(){
    passwordBox.select();
    document.execCommand("copy");
}