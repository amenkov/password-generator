const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passwordLength = 15
let firstPwdEl = document.getElementById("1stPwd")
let secondPwdEl = document.getElementById("2ndPwd")

function getRandomString() {

    let passwordString = ""

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordString += characters[randomIndex]
    }

    return passwordString
}

function generatePwds() {
    firstPwdEl.textContent = getRandomString()
    secondPwdEl.textContent = getRandomString()
}

function copyToClipboard(id) {
    let data = document.getElementById(id).textContent
    copy(data)    
}

async function copy(textToCopy) {
  try {
    await navigator.clipboard.writeText(textToCopy);
    console.log('Text successfully copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}




