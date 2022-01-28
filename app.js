const btn_roll = document.querySelector('.btn_roll');
const btn_hold = document.querySelector('.btn_hold');
const img_el = document.querySelector('.img');

btn_roll.addEventListener('click', function(){
    
    setTimeout(function(){
        let diceRoll = Math.floor((Math.random() * 6) + 1);
        img_el.src = `http://127.0.0.1:5500/dices/dice-${diceRoll}.png`
    },500)
})

