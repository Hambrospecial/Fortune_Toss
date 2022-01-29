const btn_roll = document.querySelector('.btn_roll');
const btn_hold = document.querySelector('.btn_hold');
const dice_img = document.querySelector('.img');
const dice_container = document.querySelector('.dice');

btn_roll.addEventListener('click', function(){
    dice_img.classList.add("dice_rolling");
    dice_container.style.left = '390px';
    setTimeout(function(){
        dice_img.classList.remove("dice_rolling");
        let diceRoll = Math.floor((Math.random() * 6) + 1);
        dice_container.style.left = '330px';
        dice_img.src = `dices/dice-${diceRoll}.png`
    },1000)
})



