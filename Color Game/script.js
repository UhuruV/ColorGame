//function that gives random colours and values
function makeColourValue(){
  return Math.round(Math.random() * 255);
}
makeColourValue();

//selects buttons and assigns them a random color
function setButtonColour(button,red,green,blue){
  button.setAttribute('style',
                       'background-color: rgb('+ red +',' + green +',' + blue +');');
}
setButtonColour();
//allow access of element button,headings using the class and id name
var buttons=document.getElementsByClassName('colourButton');
var heading=document.getElementsById('colourValue');
var answerMessage=document.getElementById('answer');

function startGame(){
//To clear the answerMessage element of the web page
  answerMessage.innerHTML="";
//variable called answer button that stores random numbers
var answerButton=Math.round(Math.random() * buttons.lengths);
//assign random color repetetively despite the number everytime there's a loop
 for( var i=0; i < buttons.length; i++){
  var red=makeColourValue();
  var green=makeColourValue();
  var blue=makeColourValue();
  
  setButtonColour(buttons[i],red,green,blue);
  
  if( i == answerButton){
    heading.innerHTML = '(${red},${green},${blue})';;
    }

 //adds listener nfor clicks to each button and give it a function to run when a click happens
    buttons[i].addEventListener('click',function(){
      if(this === buttons[answerButton]){
        answerMessage.innerHTML="Correct!";
      }
      else{
        answerMessage.innerHTML='Wrong answer! Guess again!';
      }
    });
   }
  }
//making the resetButton work  
document.getElementById('resetButton').addEventListener('click', startGame);
startGame(); 
 

