var vreme=new Date();
var sati=vreme.getHours();
var dani=vreme.getDay();
if(sati>=8 && sati<=12)
{
    document.getElementById("ispis").innerHTML="Dobro jutro."
}
else if(sati>12 && sati<=18)
{
    document.getElementById("ispis").innerHTML="Dobar dan."
}
else if(sati>18 && sati<=0)
{
    document.getElementById("ispis").innerHTML="Dobro vece."
}
if(sati>0 && sati<=8)
{
    document.getElementById("ispis").innerHTML="Laku noc."
}
console.log(dani);
switch(dani){
    case 0:
        document.getElementById("dani").innerHTML="Nedelja,neradni dan";break;
    case 1:
        document.getElementById("dani").innerHTML="Ponedeljak,radni dan";break;
        case 2:
            document.getElementById("dani").innerHTML="Utorak,radni dan";break;
            case 3:
                document.getElementById("dani").innerHTML="Sreda,radni dan";break;
                case 4:
                    document.getElementById("dani").innerHTML="Cetvrtak,radni dan";break;
                    case 5:
                        document.getElementById("dani").innerHTML="Petak,radni dan";break;
                        case 6:
                            document.getElementById("dani").innerHTML="Subota,neradni dan";break;
                           
}
x=prompt();
if(x<=9 && x>-10){
    document.getElementById("tip_broja").innerHTML=x+ " jeste jednocifren.";

}
else{
   document.getElementById("tip_broja").innerHTML=x+ "nije jednocifren.";
}
if(x%2==0)
{
    alert("Paran broj");
}
else{
    alert("neparan broj");
}