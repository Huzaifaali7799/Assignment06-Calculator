function getNumber(num){
    let result = document.getElementById("low-input");
    result.value += num;
}

function clearInput(){
    let result = document.getElementById("low-input");
    result.value = "";
}

function getResult(){
    let result = document.getElementById("low-input");
    result.value = eval(result.value);
}