'use strict'

// 変数置き場
const stake = document.getElementById("stake");
const cardNumArr = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A",
]
const myNum = document.getElementById("myCardNum");
const dealerNum = document.getElementById("dealerCardNum");
const resultsDisplay = document.getElementById("result");
const popupArea = document.getElementsByClassName("gameArea")[0];
const headerArea = document.getElementsByClassName("header");
const haveMoney = document.getElementById("haveMoney");
const highLowSelectEl = document.getElementsByClassName("highLowSelect");

let dealerCardNum = 0;
let myCardNum = 0;



// カードの数値生成
function gameStartFirst() {
  dealerNumGenerate();
  popupSelecter();
  // high or lowの選択終わって実行ボタン押下後myNumGene関数実行
}

function gameStartSecond() {
  Object.values(highLowSelectEl).map((element) => element.style.visibility = "hidden")
  myNumGenerate();
  hogehoge();
}



// 以下ヘルパー関数置き場
function dealerNumGenerate() {
  dealerCardNum = (Math.floor(Math.random() * 13)); // 0~12のランダムな値
  dealerNum.textContent = conversionNum(dealerCardNum);
}

function myNumGenerate() {
  myCardNum = (Math.floor(Math.random() * 13)); // 0~12のランダムな値
  myNum.textContent = conversionNum(myCardNum);
}

// 変換関数
function conversionNum(randomNum) {
  return cardNumArr[randomNum];
}

function stakeDelete() {
  console.log("stakeDelete");
  stake.value = "";
}

function popupSelecter() {
  popupArea.style.visibility = "visible";
  Object.values(highLowSelectEl).map((element) => element.style.visibility = "visible")
  Object.values(headerArea).map((element) => element.style.visibility = "hidden");
}

function addMoney100() {
  haveMoney.textContent = 100;
}

function hogehoge() {
  if (myCardNum > dealerCardNum) {
    resultsDisplay.textContent = "あなたの勝ちです！！";
  } else if (myCardNum < dealerCardNum) {
    resultsDisplay.textContent = "あなたの負けです、、";
  } else {
    resultsDisplay.textContent = "引き分けですね";
  }
}

function endOfGame() {
  Object.values(headerArea).map((element) => element.style.visibility = "visible");
  popupArea.style.visibility = "hidden";
  myNum.textContent = "";
  resultsDisplay.textContent = "";
  Object.values(highLowSelectEl).map((element) => element.style.visibility = "hidden")
}
