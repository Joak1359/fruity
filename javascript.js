var frugtArray = [];
var prisialt, apple, pear, banana, orange, peach;
apple = 0;
pear = 0;
banana = 0;
orange = 0;
peach = 0;

function addFruit(fruit) {
    var fruit;
    if (fruit === 'parApple') {
        apple++;
        frugtArray[0] = apple;
        document.getElementById("appleholder").innerHTML = "Antal æbler: " + (apple);
    }
    if (fruit === 'parPear') {
        pear++;
        frugtArray[1] = pear;
        document.getElementById("pearholder").innerHTML = "Antal pærer: " + (pear);
    }

    if (fruit === 'parBanana') {
        banana++;
        frugtArray[2] = banana;
        document.getElementById("bananaholder").innerHTML = "Antal bananer: " + (banana);
    }

    if (fruit === 'parOrange') {
        orange++;
        frugtArray[3] = orange;
        document.getElementById("orangeholder").innerHTML = "Antal appelsiner: " + (orange);
    }

    if (fruit === 'parPeach') {
        peach++;
        frugtArray[4] = peach;
        document.getElementById("peachholder").innerHTML = "Antal ferskner: " + (peach);
    }

    var sum = frugtArray.reduce(add, 0);

    function add(a, b) {
        return a + b;
    }

    document.getElementById("placeholderIalt").innerHTML = "Antal frugter i alt: " + (sum);
    document.getElementById("prisIalt").innerHTML = "Pris i alt: " + (sum * 4) + " DKK";
}
