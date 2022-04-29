
let outputScreen = document.getElementById("Screen");

    function display(num){
    outputScreen.value +=num;
}

function insert(op) {
    if (outputScreen.value != "") {
    outputScreen.value += op;
    }
}

function zero() {
    if (outputScreen.value != "") {
      outputScreen.value += '0';
    }
}

function Calculate(){
    try{
        if(outputScreen.value!="")
            outputScreen.value = eval(outputScreen.value);
        }
    catch(err)
    {
        alert("Invalid");
        outputScreen.value = "";
    }

    if (outputScreen.value == 0) {
         outputScreen.value = "";
    }

    if(outputScreen.value == 'Infinity'){
        alert("Can\'t divide by Zero!");
        outputScreen.value = "";
    }
}

function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}

