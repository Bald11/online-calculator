var num = [];
var count = 0;

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
       // OutputCal.value = ""; 
        OutputCal.value = calculate();  
    }
    else
    {
        var inputField = document.getElementById("OutputCal");
        var inputValue = inputField.value;
        OutputCal.value = inputValue+x;
        num[count] = x;
        count++;
    }
}

function calculate() 
{
    var result = num[1] + num[0];
    for (let i = 0; i < 10; i++)
    {
        num[i] = 0;
    }
    count = 0;
    return (result);
}
