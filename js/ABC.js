function assess() {
    console.log("a, b, c")
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);
    console.log(a, b, c)

    if (a > b) {
        if (b > c) {
        result = "A > B > C"
        document.getElementById("result").value =  "A > B > C";
        inequality = true;
        } else {
        result = 'Неравенство отсутсвует'
        document.getElementById("result").innerText = messageText + result;
        document.getElementById("result").value =  result;
        inequality = false;
        }
    }  else if (a < b) {
      if (b < c) {
        result = "A < B < C"
        document.getElementById("result").innerText = messageText + result;
        document.getElementById("result").value =  result;
        inequality = true;
      } else {
        result = 'Неравенство отсутсвует'
        document.getElementById("result").innerText = messageText + result;
        document.getElementById("result").value =  result;
        inequality = false;
      }
    } else {
        result = 'Неравенство отсутсвует'
        document.getElementById("result").innerText = messageText + result;
        document.getElementById("result").value =  result;
        inequality = false;
    }
  }
function send() {
    if (inequality) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();



    } else {
        alert("Неравенство отсутсвует, измените вводимые данные")
    }
}

function verify_send() {
    assess();
    send();
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
elementA.addEventListener('input', assess);
elementB.addEventListener('input', assess);
elementC.addEventListener('input', assess);

const elementAssess = document.getElementById("assess");
elementAssess.addEventListener('click', assess);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send);

let inequality = false;
let messageText = document.getElementById("result").innerText;
console.log(messageText)
let result;

