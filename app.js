const btn_roll = document.querySelector(".btn_roll");
const btn_hold = document.querySelector(".btn_hold");
const dice_img = document.querySelector(".img");
const dice_container = document.querySelector(".dice");
let current_score_1 = document.querySelector(".current_score-0").textContent;
let current_score_2 = document.querySelector(".current_score-1").textContent;
let player_1_score = document.querySelector(".player_1_score").textContent;
let player_2_score = document.querySelector(".player_2_score").textContent;
let dice_count_1 = document.querySelector(".dice_count_1");
let dice_count_2 = document.querySelector(".dice_count_2");
const left_container = document.querySelector("#left");
const right_container = document.querySelector("#right");

let activeplayer = true;
let times = 0;
let diceRoll = 0;

function dicing(count) {
  let dice_img_roll = dice_img.src;
  if (dice_img_roll != `dices/dice-1.png` && times < 5) {
    if (count > 0) {
      count--;
      document.querySelector(".btn_roll").click();
    } else {
      dicing(count);
    }
  } else {
    document.querySelector(".btn_hold").click();
  }
}

let rolls = 0;

btn_roll.addEventListener("click", function () {
  dice_img.classList.add("dice_rolling");
  dice_container.style.left = "340px";

  setTimeout(function () {
    dice_img.classList.remove("dice_rolling");
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    dice_container.style.left = "310px";
    dice_img.src = `dices/dice-${diceRoll}.png`;

    if (activeplayer) {
      if (diceRoll > 1 && times < 5) {
        current_score_1 = Number(current_score_1) + diceRoll;
        dice_count_1.textContent = times + 1;
        if (times == 4) {
          dice_count_1.style.color = "red";
        }
        dice_count_2.style.color = "black";
      } else {
        rolls = Math.floor(Math.random() * 4 + 2);
        current_score_1 = 0;
        times = -1;
        activeplayer = !activeplayer;
        btn_roll.style.left = "550px";
        btn_hold.style.left = "550px";
        dice_count_1.textContent = 0;
        left_container.style.backgroundColor = "var(--dark-torquoise)";
        right_container.style.backgroundColor = "var(--light-torquoise)";
        setTimeout(() => {
          document.querySelector(".btn_roll").click();
        }, 1000);
      }
      document.querySelector(".current_score-0").textContent = current_score_1;
    } else {
      if (diceRoll > 1 && times < 5 && rolls > 0) {
        setTimeout(() => {
          document.querySelector(".btn_roll").click();
        }, 500);
        current_score_2 = Number(current_score_2) + diceRoll;
        dice_count_2.textContent = times + 1;
        rolls--;
        if (times == 4) {
          dice_count_2.style.color = "red";
        }
        dice_count_1.style.color = "black";
      } else {
        let playerTwo = document.querySelector(".player_2_score").textContent;
        console.log("times : " + times);
        document.querySelector(".player_2_score").textContent =
          Number(playerTwo) + Number(current_score_2);

        if (Number(playerTwo) + Number(current_score_2) >= 100) {
          document.querySelector(".player_2_score").textContent = 100;
          btn_hold.disabled = true;
          btn_roll.disabled = true;
          console.log("Player 2 wins!");
        } else {
          current_score_2 = 0;
          times = -1;
          activeplayer = !activeplayer;
          btn_roll.style.left = "150px";
          btn_hold.style.left = "150px";
          dice_count_2.textContent = 0;
          left_container.style.backgroundColor = "var(--light-torquoise)";
          right_container.style.backgroundColor = "var(--dark-torquoise)";
        }
      }
      document.querySelector(".current_score-1").textContent = current_score_2;
    }
    times++;
  }, 1000);
});

btn_hold.addEventListener("click", function () {
  let playerOne = document.querySelector(".player_1_score").textContent;
  let playerTwo = document.querySelector(".player_2_score").textContent;

  if (activeplayer) {
    if (Number(playerOne) + Number(current_score_1) >= 100) {
      document.querySelector(".player_1_score").textContent = 100;
      btn_hold.disabled = true;
      btn_roll.disabled = true;
      console.log("Player 1 wins");
    } else {
      document.querySelector(".player_1_score").textContent =
        Number(playerOne) + Number(current_score_1);
      activeplayer = !activeplayer;
      document.querySelector(".current_score-0").textContent = 0;
      current_score_1 = 0;
      setTimeout(function () {
        btn_roll.style.left = "550px";
        btn_hold.style.left = "550px";
        left_container.style.backgroundColor = "var(--dark-torquoise)";
        right_container.style.backgroundColor = "var(--light-torquoise)";
        times = 0;
        dice_count_1.textContent = 0;
      }, 400);
      rolls = Math.floor(Math.random() * 4 + 2);
      setTimeout(() => {
        document.querySelector(".btn_roll").click();
      }, 1000);
    }
  }
});
