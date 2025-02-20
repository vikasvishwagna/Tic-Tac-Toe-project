let boxes = document.querySelectorAll('.box');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let reset = document.querySelector('.reset-btn');
let newGame = document.querySelector('#new-btn');

let turnO = true;
let count = 0;

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


boxes.forEach((box) => {
  box.addEventListener('click',function(){
    if(turnO){
      box.innerText = "O";
      turnO = false;
    }else{
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++
    let isWinner = checkWinner();

    if(count===9 && !isWinner){
      gameDraw();
    }
  });
});

//chek winner
let checkWinner = () => {
  for(let arrPattern of winPattern){
    let pos1val = boxes[arrPattern[0]].innerText;
    let pos2val = boxes[arrPattern[1]].innerText;
    let pos3val = boxes[arrPattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
      if(pos1val === pos2val && pos2val === pos3val){
       showWinner(pos1val);
       return true;
      }
    }
  }
}

const gameDraw = ()=>{
  msg.innerText = "Game Draw";
  msgContainer.classList.remove("hide");
  disableAllButtons();

}

let showWinner = (winner)=>{
  msg.innerText = `Congrats!, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableAllButtons();

}

let disableAllButtons = ()=>{
 for(let box of boxes){
  box.disabled = true;
 }
}

let enableAllButtons = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerHTML = "";
    
  }
}
let resetFunction = ()=>{
  turnO = true;
  enableAllButtons();
  msgContainer.classList.add("hide");
}
reset.addEventListener('click', resetFunction);
newGame.addEventListener('click', resetFunction);

