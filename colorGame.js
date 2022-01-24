var numSquares = 9;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message")
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

alert("The RGB colors are based out of 3 main colors: R-red, G-green, B-blue, and they vary between 0-255 depending on the amount used.Try to guess the colour thinking about the amonunt of main colors used.");
colorDisplay.textContent=pickedColor

for (var i=0;i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor=colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent="Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent="Play again!";
        } else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try again"
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
   var random=Math.floor(Math.random() * colors.length); 
   return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr=[]
    //repeat num times
    for(i = 0; i < num ; i++){
    //get random color and push into arr
        arr.push(randomColor())
    
    }
    // return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click", function(){
    colors=generateRandomColors(numSquares) ;
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;   
    for (var i= 0 ; i< squares.length; i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor= "steelblue";
    resetButton.textContent="New colors!";
    messageDisplay.textContent ="";
});

easyBtn.addEventListener("click",function(){
   easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
   numSquares = 6 ;
   colors=generateRandomColors(numSquares) ;
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;   
   for (var i= 0 ; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        } else {
            squares[i].style.display = "none" ;       }
        }
    h1.style.backgroundColor= "steelblue";
    resetButton.textContent="New Colors";
    messageDisplay.textContent ="";
});
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 9;
    colors=generateRandomColors(numSquares) ;
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;   
    for (var i= 0 ; i< squares.length; i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display = "block" ;
    }
     h1.style.backgroundColor= "steelblue";
     resetButton.textContent="New Colors";
     messageDisplay.textContent ="";
});


