
var y=prompt("Unesi tezinu:");
var x=prompt("Unesi visinu:");
bmi=y/(x*x);
if(bmi>18.5)
{
    document.getElementById("mera").innerHTML="Dobar si , vidi bmi "+bmi.toPrecision(4);
}
if(bmi>=24.5)
{
    document.getElementById("mera").innerHTML="pretera ga , vidi bmi "+bmi.toPrecision(4);
}
if(bmi<18.5)
{
    document.getElementById("mera").innerHTML="Jedi kajmaka , vidi bmi "+bmi.toPrecision(4);
}