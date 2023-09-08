/*var person = {
    name: "Anthony",
    age: 35,
    children: ["Nia", "Eric"]
}
var firstChild = person.children[0];
console.log(firstChild)*/

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function (){
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
        
    }
};

console.log(savingsAccount.printAccountSummary());
