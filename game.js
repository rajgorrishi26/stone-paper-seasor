let UserScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userCount = document.querySelector("#User-score");
const compCount = document.querySelector("#Comp-score");

const genrarteCompChoice = ()=>{
   const optins = ["rock","paper","scissors"];
const randInd = Math.floor(Math.random()*3);
return optins[randInd];
}
const drawGame = ()=>{
   console.log("gmae Was Draw");
   msg.innerText="Its a Draw!";
   msg.style.backgroundColor= "#081b31";
}
const showWinner = (useWin ,UserChoice, CompChoice)=>{
   if (useWin) {
      console.log("You Win !");
      msg.innerText="You Win ! Your  " +  UserChoice  + "  beats Computer's  " + CompChoice ;
      
      msg.style.backgroundColor= "orange";
      UserScore++;
      console.log("UserScore:",UserScore);
      userCount.innerText = UserScore;

   } else {
      console.log("You Loss!");
      msg.innerText="You Loss ! Computer's " + CompChoice + " beats Your  " + UserChoice;
      msg.style.backgroundColor= "green";
      CompScore++;
      console.log("ComputerScore:",CompScore);
      compCount.innerText = CompScore;
   }
}
const playGame = (Userchoice)=>{
   console.log("User choice =",Userchoice);
   // To genrarte Computer choice -> modular
   const CompChoice = genrarteCompChoice();
   console.log("Computer choice:",CompChoice);

   if (Userchoice===CompChoice) {
      drawGame();
   }
   else{
      let useWin = true;
      if (Userchoice==="rock") {
         // scissors , paper
         useWin = CompChoice==="paper"?false : true;
      }
      else if (Userchoice==="paper") {
         // rock , scissors
         useWin = CompChoice==="scissors"?false:true;
      }
      else{
         // rock , paper   
         useWin = CompChoice==="rock"?false:true;
      }
      showWinner(useWin,Userchoice,CompChoice);
   }
}
choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
      const Userchoice = choice.getAttribute("id");
      // console.log("UserChoice:-",Userchoice);
      playGame(Userchoice);
   });
});