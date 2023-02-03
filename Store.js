function GetMilk(money, costPerBottles){
    console.log("go to the store");
    console.log("enter in the store");
    console.log("go to milk rack");
    console.log("you bought " + CalcNbOfBottles(money, costPerBottles) + " bottles of milk");
    console.log("quit the store");
    console.log("back home");
    
    return CalcChange(money, costPerBottles);
}

// Calculer le nombre de bouteille qu'il est possible d'acheter
function CalcNbOfBottles (StartMoney, costPerBottles){
    var NbOfBottles = Math.floor( StartMoney / costPerBottles);
    return NbOfBottles;
}

// calculer le change
function CalcChange(StartAmount, costPerBottles){
    var change = StartAmount % costPerBottles;
    return change;
}

alert("il vous reste " + GetMilk(10, 1.5) + "de change");