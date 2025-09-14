let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#restbtn");
let newbtn = document.querySelector("#newbtn");
let contanier = document.querySelector(".msgcontainer");
let para = document.querySelector(".msg-contanior");
let turn = true;

const winningpattern = [
    [0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] ,  [2,5,8] , [0,4,8] , [2,4,6]
]

const resetgame = () =>{
    turn = true;
    enableboxes();
    contanier.classList.add("hide")}


boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box is clicked")
        if(turn){
            box.innerText ="O"
            turn = false;

        }else{
            box.innerText="X"
            turn = true
        }
        box.disabled = true;
        checkwinner();
    
        });
    });

    
    
    const disableboxes = () =>{
        for(let box of boxes){
            box.disabled = true;
        }
    }
    const enableboxes = () =>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "" ;
        }
    }

    
    const showwinner =(winner) =>{
        para.innerText = `congratulation , winner is ${winner}`;
        contanier.classList.remove("hide");
        disableboxes();

        

    }
    const checkwinner = () => {
        for(let patterns of winningpattern){
            let p1 = boxes[patterns[0]].innerText
            let p2 = boxes[patterns[1]].innerText
            let p3 = boxes[patterns[2]].innerText
        if (p1 != " " & p2 != "" & p3 != ""){
            if(p1 == p2 & p2==p3){
                console.log(p1 , "is the winner");
                showwinner(p1);
                
            

            }
        }
        

        }

    }
    





newbtn.addEventListener("click" , resetgame)
resetbutton.addEventListener("click" , resetgame)



