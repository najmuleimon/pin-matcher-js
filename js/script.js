function getPin(){
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''

    if(pinString.length == 4){
        return pin
    }
    else{
        return getPin()
    }
}

function generatePin(){
    const pin = getPin()
    document.getElementById("display-pin").value = pin
}

document.getElementById("key-pad").addEventListener("click", function(event){
    const number = event.target.innerText
    const typedInput = document.getElementById("typed-numbers")
    if(isNaN(number)){
        if(number == "C"){
            typedInput.value = ""
        }
        else if(number == "<"){
            typedInput.value = typedInput.value.slice(0, -1)
        }
    }
    else{
        typedInput.value = typedInput.value + number
    }
})

function verifyPin(){
    const pin = document.getElementById("display-pin").value
    const typedPin = document.getElementById("typed-numbers").value
    const notifyError = document.getElementById("notify-fail")
    const notifySuccess = document.getElementById("notify-success")
    let pinCount = document.getElementById("pin-count").innerText
    let count = parseInt(pinCount)

    if(pin == typedPin){
        notifySuccess.style.display = "block"
        notifyError.style.display = "none"
    }
    else{
        notifySuccess.style.display = "none"
        notifyError.style.display = "block"

        count = count - 1
        if(count > 0){
            document.getElementById("pin-count").innerText = count
        }
        else{
            document.getElementById("try-text").innerText = "You are not able to try again"
        }
    }
}