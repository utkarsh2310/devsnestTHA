let first = "";
let result = "";
let ans = 0;
const calc = (value) => {
    if(value == '+' || value == '-' || value == '*' || value == '/') {
        first = result;
        sign = value;
        result = "";
    }
    else {
        result += value;
        document.getElementById("disp").innerHTML = result;
    }
}
const equals = () => {
    if(sign == '+') {
        ans = parseInt(first) + parseInt(result);
    }
    if(sign == '-') {
        ans = parseInt(first) - parseInt(result);
    }
    if(sign == '*') {
        ans = parseInt(first) * parseInt(result);
    }
    if(sign == '/') {
        ans = parseInt(first) / parseInt(result);
    }
    document.getElementById("disp").innerHTML = ans;
}
const clr = () => {
    ans = 0;
    document.getElementById("disp").innerHTML = "0";
}

