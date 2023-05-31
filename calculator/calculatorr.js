let runninigTotal = 0;
let buffer = "0";
let previousOpperator = null;



const screen = document.querySelector(".screen");

function buttonClick(value) { 
    if (isNaN(value)){
        handleSymbol(value)
    } else {
        handleNumber(value)

    }
    screen.innerText = buffer
}


function handleSymbol(symbol){
    switch (symbol){
        case "C":
            buffer = "0"
            runninigTotal = 0
            break
        case "+":
            handleMath(symbol)
            break
        case "−":
            handleMath(symbol)
            break
        case "×":
            handleMath(symbol)
            break
        case "÷":
            handleMath(symbol)
            break
        case "=":
            if(previousOpperator === null){
                return
            } 
            flushOperation(parseInt(buffer)) ///
            previousOpperator = null
            buffer = runninigTotal
            runninigTotal = 0
            break
    }
}    

function handleMath(symbol){
    if(buffer === "0"){
        return
    }
    const intBuffer = parseInt(buffer)

    if (runninigTotal === 0){
        runninigTotal = intBuffer
    } else {
        flushOperation(intBuffer)
    }

    previousOpperator = symbol

    buffer = "0"
}

function flushOperation(intBuffer) {

    if (previousOpperator === "+"){
        runninigTotal  += intBuffer
    } else if (previousOpperator === "−"){
        runninigTotal  -= intBuffer
    } else if (previousOpperator === "×"){
        runninigTotal  *= intBuffer
    } else {
        runninigTotal  /= intBuffer
    }
}


function handleNumber(numberString){
    if(buffer === "0"){
    buffer = numberString
} else {
    buffer += numberString
}

}

function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
    })
}


init()


  