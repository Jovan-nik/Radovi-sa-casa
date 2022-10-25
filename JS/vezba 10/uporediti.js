var prvi=Number(prompt("Unesi prvi broj"));
var drugi=Number(prompt("Unesi drugi broj"));
if(prvi>drugi){
    document.getElementById("ispis").innerHTML="Veci je prvi broj "+ prvi +" koji je "+(prvi.toString()).length+"-cifren";
}
if(prvi<drugi){
    document.getElementById("ispis").innerHTML="Veci je drugi broj "+ drugi +" koji je "+(drugi.toString()).length+"-cifren";
}
if(prvi==drugi){
    document.getElementById("ispis").innerHTML="Jednaki su";
}