let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let cnt=0;
//playerx,player0(TWO PLAYERS)
let turn0=true
//winningPatterns for the game
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
//iterate through the boxes and check is there any Winner
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){//player0
            box.innerText="O";
            turn0=false;
        }
        else{//playerX
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        cnt++;
        checkWinner(cnt);
    })
});
//function to reset the game
const resetGame=()=>{
    turn0=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

//function to trigger the reset-btn
resetBtn.addEventListener("click",resetGame);
//function to trigger the newGame-btn
newGameBtn.addEventListener("click",resetGame);

//disable the boxes
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
//enabled the boxes
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
//show me the winner
const showWinner=(winner)=>{
    msg.innerText=`congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    cnt=0;
}
//main logic
let checkWinner=(cnt)=>{
    for(let pattern of winPatterns){
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;
      if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner",pos1Val);
            // console.log(cnt);
            showWinner(pos1Val);
        }
      }
    }
    if(cnt==9){
        draw();
    }
}
const draw=()=>{
    msg.innerText="Game is Draw , please click on newGame !"
    msg.style.color="white";
     msgContainer.classList.remove("hide");
     cnt=0;
}
