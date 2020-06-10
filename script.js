/*
document.getElementById('reveal').onclick = function(){
    alert( Math.floor(Math.random()*6) );
}
*/
Math.floor(Math.random)

document.getElementById('reveal').onclick = function(){
    
    var numbers = document.getElementById('guess').value;
    var correctNumber = Math.floor(Math.random()*6);
   
    if (numbers == correctNumber){
        alert('That\'s correct! The correct number is ' + correctNumber);
    } else {
        alert('Wrong number, its ' + correctNumber);        
    }
}