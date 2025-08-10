// Dice------------------------------------------------>

let dice1 = ' <div class="main-contaner"> <div></div> <div></div><div></div><div></div><div class="spacial"></div><div></div><div></div><div></div><div></div></div>';

let dice2 = ' <div class="main-contaner"> <div class="spacial"></div> <div></div> <div></div> <div></div>  <div ></div> <div></div> <div></div> <div></div> <div class="spacial"></div> </div>';

let dice3 = ' <div class="main-contaner"> <div class="spacial"></div> <div></div> <div></div> <div></div> <div class="spacial"></div> <div></div> <div></div> <div></div> <div class="spacial"></div> </div>';

let dice4 = '<div class="main-contaner"> <div class="spacial"></div> <div></div> <div class="spacial"></div> <div></div> <div></div> <div></div> <div class="spacial"></div> <div></div> <div class="spacial"></div> </div>';

let dice5 = '<div class="main-contaner"> <div class="spacial"></div> <div></div> <div class="spacial"></div> <div></div> <div class="spacial"></div> <div></div> <div class="spacial"></div> <div></div>  <div class="spacial"></div> </div>';

let dice6 = '<div class="main-contaner"> <div class="spacial"></div> <div class="spacial"></div> <div class="spacial"></div> <div></div> <div ></div> <div ></div> <div class="spacial"></div> <div class="spacial"></div> <div class="spacial"></div> </div>';



let h1 = document.getElementById("h1");
let para = document.getElementById("para");
let showDice = document.getElementById("showDice");
h1.innerHTML = 5000;
let userBitAmount;
let userBitNumber;

function bite (){
  
  let currentBalance = Number(h1.innerHTML);
  
  if (currentBalance <= 0) {
    alert("Your balance is 0. Please recharge to continue playing.");
    return;
  }

    userBitAmount = Number(document.getElementById("bitAmount").value);
    userBitNumber = Number(document.getElementById("bitNumber").value);

    if(isNaN(userBitAmount) || isNaN(userBitNumber) || userBitNumber > 6 || userBitNumber <= 0 || userBitAmount < 1 ){
      alert("Invalid input! Please enter a valid number (1–6) and a positive amount.");
      return;
    }

    if (userBitAmount > currentBalance){
      alert("You don't have enough balance to place this bet.");
      return;
    }

    let genratNum = genrateBitNum();
    let bitMach = isbitMach(genratNum , userBitNumber);
    showBitMassige(bitMach, userBitAmount, h1);
}

function genrateBitNum() {
    let genratNum = Math.ceil(Math.random() * 6)
    let displyDices = [ dice1 , dice2 , dice3, dice4, dice5, dice6];
    showDice.innerHTML = displyDices[genratNum -1]; 
    return genratNum;
}

function isbitMach(genratNum, userBitNumber){
    let Mached = false;
   
    if(genratNum === userBitNumber){
        Mached = true;
    }
    
    return Mached;
}

function showBitMassige(bitMach, userBitAmount, h1){

  if(bitMach && userBitNumber === 1){
    h1.innerHTML = Number(h1.innerHTML) + userBitAmount;
    para.innerHTML = `You won! Number was ${userBitAmount}`;
        para.style.color = "lime";
  }
  else if(bitMach && userBitNumber === 2){
    h1.innerHTML = Number(h1.innerHTML) + userBitAmount;
    para.innerHTML = `You won! Number was ${userBitAmount}`;
        para.style.color = "lime";
  }
  else if(bitMach && userBitNumber === 3){
    h1.innerHTML = Number(h1.innerHTML) + userBitAmount;
    para.innerHTML = `You won! Number was ${userBitAmount}`;
        para.style.color = "lime";
  }
  else if(bitMach  && userBitNumber === 4){
    h1.innerHTML = Number(h1.innerHTML) + userBitAmount;
    para.innerHTML = `You won! Number was ${userBitAmount}`;
        para.style.color = "lime";
  }
  else if(bitMach && userBitNumber === 5){
    h1.innerHTML = Number(h1.innerHTML) + userBitAmount;
    para.innerHTML = `You won! Number was ${userBitAmount}`;
        para.style.color = "lime";
  }
  else if(bitMach && userBitNumber === 6){
    h1.innerHTML = Number(h1.innerHTML) + userBitAmount;
    para.innerHTML = `You won! Number was ${userBitAmount}`;
        para.style.color = "lime";
  }
  else{
    h1.innerHTML = Number(h1.innerHTML) - userBitAmount;
    para.innerHTML = `You lost! Number was ${userBitAmount}`;
    para.style.color = "red";
  }
  
}
