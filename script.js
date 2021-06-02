const qw1Inp = document.querySelectorAll('.que1Answ');
const qw2Inp = document.querySelectorAll('.que2Answ');
const qw3Inp = document.querySelectorAll('.que3Answ');
const qw4Inp = document.querySelectorAll('.que4Answ');
const qw5Inp = document.querySelectorAll('.que5Answ');
const qw6Inp = document.querySelectorAll('.que6Answ');
const qw7Inp = document.querySelector('.que7Answ');
const qw8Inp = document.querySelector('.que8Answ');
const start = document.querySelector('.start');
let score = 0;
const qu1 = document.querySelector('.que1');
const qu2 = document.querySelector('.que2');
const qu3 = document.querySelector('.que3');
const qu4 = document.querySelector('.que4');
const qu5 = document.querySelector('.que5');
const qu6 = document.querySelector('.que6');
const qu7 = document.querySelector('.que7');
const qu8 = document.querySelector('.que8');
const izInp = document.querySelector('.izInp');
const izuInp = document.querySelector('.izuInp');
const s2Inp = document.querySelector('.s2Inp');
const s5Inp = document.querySelector('.s5Inp');






function checkAnsw() {
  qu1.style.boxShadow = "none";
  qu2.style.boxShadow = "none";
  qu3.style.boxShadow = "none";
  qu4.style.boxShadow = "none";
  qu5.style.boxShadow = "none";
  qu6.style.boxShadow = "none";
  qu7.style.boxShadow = "none";
  qu8.style.boxShadow = "none";
  if (qw1Inp[5].checked) {
    score += 1;
  } else {
    qu1.setAttribute("value", "false");
  }
  if (qw2Inp[3].checked) {
    score += 1;
  } else {
    qu2.setAttribute("value", "false");
  }
  if (qw3Inp[1].checked) {
    score += 1;
  } else {
    qu3.setAttribute("value", "false");
  }
  if (qw4Inp[3].checked) {
    score += 1;
  } else {
    qu4.setAttribute("value", "false");
  }
  if (qw5Inp[4].checked) {
    score += 1;
  } else {
    qu5.setAttribute("value", "false");
  }
  if (qw6Inp[2].checked && qw6Inp[4].checked && qw6Inp[7].checked) {
    score += 1;
  } else {
    qu6.setAttribute("value", "false");
  }

  console.log(score);
}

function falsAnsw() {
  if (qu1.getAttribute("value") == "false") {
    qu1.style.boxShadow = "0 0 20px red";
  }
  if (qu2.getAttribute("value") == "false") {
    qu2.style.boxShadow = "0 0 20px red";
  }
  if (qu3.getAttribute("value") == "false") {
    qu3.style.boxShadow = "0 0 20px red";
  }
  if (qu4.getAttribute("value") == "false") {
    qu4.style.boxShadow = "0 0 20px red";
  }
  if (qu5.getAttribute("value") == "false") {
    qu5.style.boxShadow = "0 0 20px red";
  }
  if (qu6.getAttribute("value") == "false") {
    qu6.style.boxShadow = "0 0 20px red";
  }
  if (qu7.getAttribute("value") == "false") {
    qu7.style.boxShadow = "0 0 20px red";
  }
  if (qu8.getAttribute("value") == "false") {
    qu8.style.boxShadow = "0 0 20px red";
  }
}
