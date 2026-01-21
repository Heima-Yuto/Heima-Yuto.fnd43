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
const selectEl = document.getElementsByName("select");
const toHalfnums = text => text.replace(/[０-９]/g, m => '０１２３４５６７８９'.indexOf(m));

let dealerCardNum = 0;
let myCardNum = 0;
let checkedValue = "";



// カードの数値生成
function gameStartFirst() {
  if (Number.isNaN(Number(toHalfnums(stake.value))) || Number(toHalfnums(stake.value)) === 0) {
    return window.alert("掛け金を入力してください");
  }
  if (Number(toHalfnums(stake.value)) > Number(haveMoney.textContent)) {
    return window.alert("所持金以上の金額は掛けられません");
  }
  if (!Number.isInteger(Number(toHalfnums(stake.value)))) {
    return window.alert("小数点以下の入力は受け付けません")
  }
  dealerNumGenerate();
  popupSelecter();
  document.getElementById("resultArea").style.visibility = "hidden";
  document.getElementById("money100").style.visibility = "hidden";
}

function gameStartSecond() {
  Array.from(selectEl).filter((element) => {
    if (element.checked) {
      return checkedValue = element.value;
    }
  })
  Object.values(highLowSelectEl).map((element) => element.style.visibility = "hidden")
  myNumGenerate();
  judgement();
  document.getElementById("resultArea").style.visibility = "visible";
}

function endOfGame() {
  Object.values(headerArea).map((element) => element.style.visibility = "visible");
  popupArea.style.visibility = "hidden";
  myNum.textContent = "";
  resultsDisplay.textContent = "";
  Object.values(highLowSelectEl).map((element) => element.style.visibility = "hidden")
  document.getElementById("resultArea").style.visibility = "hidden";
  document.getElementById("money100").style.visibility = "visible"
  if (Number.isNaN(Number(haveMoney.textContent)) || Number(haveMoney.textContent) < 0) {
    haveMoney.textContent = "コインを補充してください"
  }

}

function endOfGame2() {
  Object.values(headerArea).map((element) => element.style.visibility = "visible");
  popupArea.style.visibility = "hidden";
  myNum.textContent = "";
  resultsDisplay.textContent = "";
  Object.values(highLowSelectEl).map((element) => element.style.visibility = "hidden")
  document.getElementById("resultArea").style.visibility = "hidden";
  document.getElementById("money100").style.visibility = "visible"
  stake.value = "";
  if (Number.isNaN(Number(haveMoney.textContent)) || Number(haveMoney.textContent) < 0) {
    haveMoney.textContent = "コインを補充してください"
  }

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

function judgement() {
  if (checkedValue === "high") {
    return highJudge();
  } else if (checkedValue === "low") {
    return lowJudge();
  }
}

function highJudge() {
  if (myCardNum > dealerCardNum) {
    resultsDisplay.textContent = "あなたの勝ちです！！";
    haveMoney.textContent = Number(haveMoney.textContent) + Number(toHalfnums(stake.value));
  } else if (myCardNum < dealerCardNum) {
    resultsDisplay.textContent = "あなたの負けです、、";
    haveMoney.textContent = Number(haveMoney.textContent) - Number(toHalfnums(stake.value));
  } else {
    resultsDisplay.textContent = "引き分けですね";
  }
}

function lowJudge() {
  if (myCardNum < dealerCardNum) {
    resultsDisplay.textContent = "あなたの勝ちです！！";
    haveMoney.textContent = Number(haveMoney.textContent) + Number(toHalfnums(stake.value));
  } else if (myCardNum > dealerCardNum) {
    resultsDisplay.textContent = "あなたの負けです、、";
    haveMoney.textContent = Number(haveMoney.textContent) - Number(toHalfnums(stake.value));
  } else {
    resultsDisplay.textContent = "引き分けですね";
  }
}
