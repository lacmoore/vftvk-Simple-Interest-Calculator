
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
   
var interest = principal * years * rate/100
var actual_years = (new Date()).getFullYear() + years;
var result = document.getElementById("result");
    if(checkValue())
    {
        result.innerHTML = "If you deposit <mark>"+principal+"</mark>,at an interest rate of <mark>"+ rate+"%</mark>. You will receive an amount of <mark>"+interest+"</mark>, in the year <mark>"+actual_years+"</mark>";
    }

}
function writePercentage(){
   document.getElementById("percentage").innerText = document.getElementById("rate").value + "%";
}
    
function checkValue(){
    //alert(document.getElementById("principal").value);
        if( document.getElementById("principal").value=="" || parseInt(document.getElementById("principal").value) < 1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
            return false;
    }
    return true;
}
