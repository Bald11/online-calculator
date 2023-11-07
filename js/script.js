function buttonClick(x)
{
    if(x == 404)
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;    
        OutputCal.value = "";             
    }
    else if(x == 405)
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;    
        OutputCal.value = inputValue.slice(0, -1);
    }
    else if(x == 406)
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        OutputCal.value = inputValue + "+";        
    }
    else if(x == 407)
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        OutputCal.value = inputValue + "-";    
    }
    else if(x == 409)
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        OutputCal.value = inputValue + "x";    
    }
    else if(x == 410)
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        OutputCal.value = inputValue + "÷";    
    }
    else if(x == 411)
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        OutputCal.value = inputValue + "%";    
    }
    else if(x == 412)
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        OutputCal.value = inputValue + ".";    
    }
    else if(x == 413)
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        OutputCal.value = inputValue + "=";    
    }
    else if(x == 408)
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        // OutputCal.value = "You typed: " + inputValue;     
        OutputCal.value = ""; 
        OutputCal.value = calculate(inputValue);
    }
    else
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        OutputCal.value = inputValue+x;
    }
}

function calculate(input)
{
    const numericPattern = /^\d+$/;
    if (numericPattern.test(input))
    {

    }
    else return("ERROR!!");
    return (69);
}
