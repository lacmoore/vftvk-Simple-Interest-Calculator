
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = parseInt(document.getElementById("years").value);
    console.log(principal);
    console.log(rate);
    console.log(years);
var interest = principal * years * rate/100
var actual_years = (new Date()).getFullYear() + years;
var result = document.getElementById("result");
result.innerHTML = "If you deposit <b style='color:gold'>"+principal+"</b>,at an interest rate of <b style='color:gold'>"+ rate+"%</b>. You will receive an amount of <b style='color:gold'>"+interest+"</b>, in the year <b>"+actual_years+"</b>";


}
function writePercentage(){
   document.getElementById("percentage").innerText = document.getElementById("rate").value + "%";
}
    
function checkValue(){
    if( document.getElementById("principal")=="" || parseInt(document.getElementById("principal").value) < 1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
