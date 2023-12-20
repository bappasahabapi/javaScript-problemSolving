
//todo:0 ----------------------------- start ---------------------------------

let boxes = document.querySelectorAll('.box');
let resetBtn = document.getElementById('reset-btn');
let messageContainer = document.querySelector('.msg-container');
let showWinningMsg=document.getElementById('msg');
let newGame =document.getElementById('new-btn');

let trunO = true;

//todo:1 win patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// todo: 6 reset game

const resetGame =()=>{
    trunO =true;
    enabledBoxes();
    messageContainer.classList.add('hide')
}

//todo:2 addEventListener for every box
boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if (trunO) {
            box.innerText = '⭕'
            trunO = false;
        } else {
            box.innerText = '❎'
            trunO = true;
        }
        box.disabled = true;
        // 3. check winner
        checkWinner();

    })
});

//todo:6 disable field after one person win

const disabledBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
//todo:8 disable field after one person win

const enabledBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

        //todo:4 check winner 
const showWinner=(WinnerValue)=>{
    // console.log('Winner is ', WinnerValue);;
    showWinningMsg.innerText=`Congratulations!!! Mr.${WinnerValue}`;
    messageContainer.classList.remove('hide');
    disabledBoxes();
    
};
        //todo:3 check winner 
const checkWinner =()=>{
    for(let pattern of winPatterns){

        let postion1Value = boxes[pattern[0]].innerText;
        let postion2Value = boxes[pattern[1]].innerText;
        let postion3Value = boxes[pattern[2]].innerText;

        //todo: 4 check condition [is empty or not , three values are same or not]
            // check post1 , post2 , post3 values are not empty
            if(postion1Value !=="" && postion2Value !=="" && postion3Value !==""){

                //now check winning pattern
                if(postion1Value ===postion2Value && postion2Value===postion3Value){
                    // console.log('Winner is ', postion1Value);
                    //show winner functon
                    showWinner(postion1Value);
                 
                }
            }
    }
};

resetBtn.addEventListener('click', resetGame);
newGame.addEventListener('click', resetGame);







