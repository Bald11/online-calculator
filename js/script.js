function buttonClick(x)
{
    if(x == 404)
    {
        var clearButton = document.getElementById("clearButton");
        var myInput = document.getElementById("OutputCal");

        clearButton.addEventListener("click", function() { myInput.value = '';});             
    }
    else if(x == 405)
    {
        var backspaceButton = document.getElementById("deleteInput");
        var myInput = document.getElementById("OutputCal");

        backspaceButton.addEventListener("click", function() {
            var currentValue = myInput.value;
            
            if (currentValue.length > 0) 
            {
                myInput.value = currentValue.slice(0, -1);
            }
        });
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
