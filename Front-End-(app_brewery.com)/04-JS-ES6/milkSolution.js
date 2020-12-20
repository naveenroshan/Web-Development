function getMilk(money, costPerBottle) {
    console.log("buy " + calcBottle(money, costPerBottle) + " bottles of milk");
    return calcChange(money, costPerBottle);
}
function calcBottle(startingMoney, costPerBottle) {
    var numberOfBottle = Math.floor(startingMoney / costPerBottle);
    return numberOfBottle;
}

function calcChange(startingMoney, costPerBottle) {
    var change = startingMoney % costPerBottle;
    return change;
}
console.log("hello master , here is your " + getMilk(5, 4) + " change")