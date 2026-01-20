'use strict'

// 変数置き場
const stake = document.getElementById("stake");
const cardNumArr = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A",
]
const myNum = document.getElementById("myCardNum");
const dealerNum = document.getElementById("dealerCardNum");
const resultsDisplay = document.getElementById("result");


// カードの数値生成 勝敗判定関数
function gameStart() {
  const myCardNum = (Math.floor(Math.random() * 13)); // 0~12のランダムな値
  myNum.textContent = conversionNum(myCardNum);
  const dealerCardNum = (Math.floor(Math.random() * 13)); // 0~12のランダムな値
  dealerNum.textContent = conversionNum(dealerCardNum);

  if (myCardNum > dealerCardNum) {
    resultsDisplay.textContent = "あなたの勝ちです";
  } else if (myCardNum < dealerCardNum) {
    resultsDisplay.textContent = "あなたの負けです";
  }
}

// 変換関数
function conversionNum(randomNum) {
  return cardNumArr[randomNum];
}

function stakeDelete() {
  console.log("stakeDelete");
  stake.value = "";
}
