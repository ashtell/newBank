function wd(name, amount, type){
  var account = name + "account";
  var type2 = type.toLowerCase();
    if((typeof amount) !== 'number'){
      console.log("BEGIN ERROR [[");
      console.log("     ERROR TYPE 0325:");
      console.log("     INCORRECT AMOUNT TYPE");
      console.log("     AMOUNT SHOULD BE LISTED AS");
      console.log("          NUMBER ONLY");
      console.log("]] END ERROR");
    }
    if((type2 == "deposit" || type2 == "withdrawl")){
      if(type2 == "deposit"){
        if(!localStorage.getItem(account)){
          localStorage.setItem(account, amount);
        }
        oldBalance = parseInt(localStorage.getItem(account));
        newBalance = amount + oldBalance;
        localStorage.setItem(account, newBalance);
      }
      if(type2 == "withdrawl"){
        if(!localStorage.getItem(account)){
          localStorage.setItem(account, 0);
        }
        if(localStorage.getItem(account) < amount){
           console.log("BEGIN ERROR [[");
           console.log("     ERROR TYPE 0121:");
           console.log("     INSUFFICIENT FUNDS");
           console.log("]] END ERROR");
        }else{
          oldBalance = parseInt(localStorage.getItem(account));
          newBalance = oldBalance - amount;
          localStorage.setItem(account, newBalance);
        }
      }
    }else{
      console.log("BEGIN ERROR [[");
      console.log("     ERROR TYPE 0849:");
      console.log("     INCORRECT TYPE");
      console.log("     TYPE SHOULD BE 'WITHDRAWL'");
      console.log("          OR 'DEPOSIT' ONLY");
      console.log("]] END ERROR");
    }
  }
