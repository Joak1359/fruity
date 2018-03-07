var frugtArray = [0, 0, 0, 0, 0]; //frugtArray er vores "liste", som husker de tildelte værdier. Den indstiller her vores array til at have 5 start værdier af 0.
function addFruit(fruit) { //addFruit er navnet på vores funktion. (fruit) er funktionens parameter, som får sin værdi fra "onClick" atributten i html'en. Dette henvises til senere.
    frugtArray[fruit] ++; //Denne indlæser værdien fra parameteret (fruit), som den bruger til at tilføje 1 til den ønskede position.
    var prisialt = 0, frugterialt = 0; //Denne linje nulstiller værdien af "prisialt" og "frugtialt", for ikke at tilføje de tidligere værdier igen.
    for (i = 0; i  < frugtArray.length; i++) { //her er "i" en variabel, som tæller antal af løkker der er kørt. "frugtArray.length" bruges her til, at sørge for, at løkken kører 5 gange, da "i" starter i 0, og frugtArray.length har værdien 5.
        frugterialt += frugtArray[i]; //(frugterialt = frugterialt + frugtArray[i]), her bruges "i" til at læse værdien af alle frugtArray felterne, da løkken er sat op til at køre igennem dem alle.
    }
    prisialt = frugterialt * 4; //I det prisen per frugt er 4 kr., gange vi antallet af frugter med 4.
    document.getElementById("placeholderIalt").innerHTML = "Antal frugter i alt: " + (frugterialt); //skriver hvor mange frugter der er bestilt.
    document.getElementById("prisIalt").innerHTML = "Pris i alt: " + prisialt + " DKK"; //skriver hvor meget frugterne koster
}