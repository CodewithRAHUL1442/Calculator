let display = document.getElementById('display');
function appendValue(value) {
    if (display.innerText === '0' || display.innerText === 'Error'){
        display.innerText = value;
    }else {
        display.innerText += value;
    }
}
function clearDisplay() {
    display.innerText = "0";
}
function delValue() {
    let current = display.innerText;
    if (current.length === 1 || current.length === "Error"){
        display.innerText = "0";
    }else {
        display.innerText = current.slice(0, -1);
    }
}
function calculate() {
    try{
        display.innerText = eval(display.innerText);
    } catch{
        display.innerText = "Error";
    }
}