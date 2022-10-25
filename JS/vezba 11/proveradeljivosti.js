var x=Number(prompt("Unesi prvi broj"));
var y=Number(prompt("Unesite drugi broj"));
if(x%y==0){
    document.getElementById("ispis").innerHTML="deljiv";
}
if(x%y>0){
    document.getElementById("ispis").innerHTML="nije deljiv";
}