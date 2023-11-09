var num = [];
var count = 0;

var inputField = document.getElementById("OutputCal");

inputField.addEventListener("keyup", function(event) 
{
    if(event.key === "Enter") 
    {
        OutputCal.value = calculate();
    }
});

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
        OutputCal.value = calculate();  
    }
    else
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        OutputCal.value = inputValue+x;
    }
}

function calculate() 
{
    var inputField = document.getElementById("OutputCal");
    var inputValue = inputField.value;
    var result;
    if (inputValue.includes('+'))
    {
        let myString = inputValue;
        let atIndex = myString.indexOf('+');

        if (atIndex !== -1) 
        {
            let beforeAt = myString.substring(0, atIndex);
            let afterAt = myString.substring(atIndex + 1);

            let beforeAtAsInt = parseInt(beforeAt, 10);
            let afterAtAsInt = parseInt(afterAt, 10);

            result = beforeAtAsInt + afterAtAsInt;
        }
    }
    if (inputValue.includes('-'))
    {
        let myString = inputValue;
        let atIndex = myString.indexOf('-');

        if (atIndex !== -1) 
        {
            let beforeAt = myString.substring(0, atIndex);
            let afterAt = myString.substring(atIndex + 1);

            let beforeAtAsInt = parseInt(beforeAt, 10);
            let afterAtAsInt = parseInt(afterAt, 10);

            result = beforeAtAsInt - afterAtAsInt;
        }
    }
    if (inputValue.includes('x'))
    {
        let myString = inputValue;
        let atIndex = myString.indexOf('x');

        if (atIndex !== -1) 
        {
            let beforeAt = myString.substring(0, atIndex);
            let afterAt = myString.substring(atIndex + 1);

            let beforeAtAsInt = parseInt(beforeAt, 10);
            let afterAtAsInt = parseInt(afterAt, 10);

            result = beforeAtAsInt * afterAtAsInt;
        }
    }
    if (inputValue.includes('÷'))
    {
        let myString = inputValue;
        let atIndex = myString.indexOf('÷');

        if (atIndex !== -1) 
        {
            let beforeAt = myString.substring(0, atIndex);
            let afterAt = myString.substring(atIndex + 1);

            let beforeAtAsInt = parseInt(beforeAt, 10);
            let afterAtAsInt = parseInt(afterAt, 10);

            if (afterAtAsInt == 0) return("Error");
            result = beforeAtAsInt / afterAtAsInt;
        }
    }
    if (inputValue.includes('%'))
    {
        let myString = inputValue;
        let atIndex = myString.indexOf('%');

        if (atIndex !== -1) 
        {
            let beforeAt = myString.substring(0, atIndex);
            let afterAt = myString.substring(atIndex + 1);

            let beforeAtAsInt = parseInt(beforeAt, 10);
            let afterAtAsInt = parseInt(afterAt, 10);

            if (afterAtAsInt == 0) return("Error");
            result = beforeAtAsInt % afterAtAsInt;
        }
    }               
    return (result);
}
