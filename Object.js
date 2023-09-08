/*var person = {
    name: "Anthony",
    age: 35,
    children: ["Nia", "Eric"]
}
var firstChild = person.children[0];
console.log(firstChild)*/
//------------------------------------------------------------------------------------------------------
/*var savingsAccount = {
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

console.log(savingsAccount.printAccountSummary()); */
//----------------------------------------------------------------------------------------------------
var facebookProfile = { 
    name: "Obi Anthony",
    friends : 1527,
    messages : ["Hey, i'm new here", "Todays a beautiful day", "I think i just became a millionaire"],
    
   postMessage: function(message){
           facebookProfile.messages.push("I am hungry");
   },
   deleteMessage: function(index){
           // In the following splice() method call,
           // - argument 1 = index from where the element has to be deleted
           // - argument 2 = count of elements to be deleted
           facebookProfile.messages.splice(index, 1);
       },
   addFriend: function(){
           facebookProfile.friends = facebookProfile.friends +=1 ;
           //friends += 1; // this statement is equivalent to the above
       },
   removeFriend: function(){
           if(facebookProfile.friends>0)
               facebookProfile.friends = facebookProfile.friends -=1;
       }
   };

   console.log(facebookProfile.deleteMessage)