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

// let each_current_score = current_score.forEach(el => el.textContent);

let activeplayer = true;
let times = 0;

btn_roll.addEventListener("click", function () {
  dice_img.classList.add("dice_rolling");
  dice_container.style.left = "385px";

  setTimeout(function () {
    dice_img.classList.remove("dice_rolling");
    let diceRoll = Math.floor(Math.random() * 6 + 1);
    dice_container.style.left = "360px";
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
        current_score_1 = 0;
        times = -1;
        activeplayer = !activeplayer;
        btn_roll.style.left = "550px";
        btn_hold.style.left = "550px";
        dice_count_1.textContent = 0;
      }
      document.querySelector(".current_score-0").textContent = current_score_1;
    } else {
      if (diceRoll > 1 && times < 5) {
        current_score_2 = Number(current_score_2) + diceRoll;
        dice_count_2.textContent = times + 1;
        if (times == 4) {
          dice_count_2.style.color = "red";
        }
        dice_count_1.style.color = "black";
      } else {
        current_score_2 = 0;
        times = -1;
        activeplayer = !activeplayer;
        btn_roll.style.left = "150px";
        btn_hold.style.left = "150px";
        dice_count_2.textContent = 0;
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
    if (playerOne == 100) {
      console.log("Player 1 wins");
    } else {
      //   let playerOne = document.querySelector(".player_1_score").textContent;
      document.querySelector(".player_1_score").textContent =
        Number(playerOne) + Number(current_score_1);
      activeplayer = !activeplayer;
      document.querySelector(".current_score-0").textContent = 0;
      current_score_1 = 0;
      setTimeout(function () {
        btn_roll.style.left = "550px";
        btn_hold.style.left = "550px";
        times = 0;
        dice_count_1.textContent = 0;
      }, 400);
    }
  } else {
    if (playerTwo == 100) {
      console.log("Player 2 wins!");
    } else {
      //   let playerTwo = document.querySelector(".player_2_score").textContent;
      document.querySelector(".player_2_score").textContent =
        Number(playerTwo) + Number(current_score_2);
      activeplayer = !activeplayer;
      document.querySelector(".current_score-1").textContent = 0;
      current_score_2 = 0;
      setTimeout(function () {
        btn_roll.style.left = "150px";
        btn_hold.style.left = "150px";
        times = 0;
        dice_count_2.textContent = 0;
      }, 400);
    }
  }
});
