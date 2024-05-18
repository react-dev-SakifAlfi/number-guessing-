// Variables
let newHeading =document.querySelector('.actual-text')
let p =document.querySelector('.err')
let h3 =document.querySelector('.winner')
let h6 =document.querySelector('.wrong')
let seconErr =document.querySelector('.errsecond')
let h3Second =document.querySelector('.attempts')
let leftAttempts =document.querySelector('.remainder')

let player1Main =document.querySelector('.player-one')
let player1Box =document.querySelector('.Player-one-box')
let player1click =document.querySelector('.Player-one-button')

let player2Main =document.querySelector('.player-two')
let player2Box =document.querySelector('.Player-two-box')
let player2click =document.querySelector('.Player-two-button')

let nameMain =document.querySelector('.nameplate')
let nameWrite =document.querySelector('.nametext1')
let nameInput =document.querySelector('.namebox1')
let mainButton1 =document.querySelector('.submit1')

let nameMain2 =document.querySelector('.nameplate2')
let nameWrite2 =document.querySelector('.nametext2')
let nameInput2 =document.querySelector('.namebox2')
let mainButton2 =document.querySelector('.submit2')
let attempts = 5
// Variables

// Nameplate 1 js
mainButton1.addEventListener('click', ()=>{
    if(nameInput.value == ''){
        p.innerHTML = 'Enter Player-1 name here!'
    }else{
        p.innerHTML = ''
        nameMain.style= "display:none;"
        nameMain2.style= 'display:block'
        
    }
})
// Nameplate 1 js

// Nameplate 2 js
mainButton2.addEventListener('click', ()=>{
    if(nameInput2.value == ''){
        seconErr.innerHTML = 'Enter Player-2 name here!'
    }else{
        p.innerHTML = ''
        nameMain2.style= "display:none;"
        player1Main.style= 'display:block'
        newHeading.innerHTML = nameInput.value + ', enter a number between 1-10'
    }
})
// Nameplate 2 js

// Player 1 input js
player1click.addEventListener('click' , ()=>{

    if(player1Box.value == ''){
        h6.innerHTML ='Enter a number!'
    }else{
        
        if(player1Box.value > 10){
            h6.innerHTML = 'Enter a number lesser than 10!'
        }
        else{
            
            h6.innerHTML = ''
            
            player1Main.style = 'display:none;'
            player2Main.style = 'display:block;'
            newHeading.innerHTML = nameInput2.value + ', guess the number that ' + nameInput.value+ ' has entered'
            leftAttempts.innerHTML = 'Attempts Left'
            h3Second.innerHTML = attempts
        }
    }
})
// Player 1 input js

// Player 2 input js
player2click.addEventListener('click', () => {
    if (player2Box.value == '') {
        h6.innerHTML = 'Guess a number!';
    } else {
        if (player1Box.value == player2Box.value) {
            h3.innerHTML = 'Player-2 is the winner!';
            player2Main.style = 'display:none;'
        } else {
            h6.innerHTML = '';
            attempts--;

            if (attempts === 0) {
                h3.innerHTML = 'Player-1 is the winner!';
                player2Main.style = 'display:none;'
                player2click.disabled = true
                leftAttempts.innerHTML = 'Attempts Left: 0'
                return;
            }

            h3Second.innerHTML = attempts;
        }
    }
});
