function generate(){
    const number = Number(document.getElementById("num").value);
    var output = [];
    for(var i = 1; i <= number; i++){
        output.push(i);
    }
    document.getElementById("number-list").innerHTML = output.join("<br>");

    add(output);
}

function add(numberArray){

    var sum = 0;

    for (var a = 0; a < numberArray.length; a++){
        sum = sum + numberArray[a];
    }

    document.getElementById("sum").innerHTML = "Sum: " + sum; 

    if (sum > 50){
       document.getElementById("message").innerHTML = "That's a big total."; 
    }else if (sum >= 20){
        document.getElementById("message").innerHTML = "Nice work.";
    }else {
        document.getElementById("message").innerHTML = "Small number, try something bigger.";
    }
}
