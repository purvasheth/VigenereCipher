/* Using 95*95 table for Vigenere Cipher. 
ASCII characters from 32 - 126 are considered.
*/
var n = 95;
var chars = [...Array(n).keys()];
var Table = [];
Table.push([...chars]);
for (var i = 1; i < n; i++) {
  front = chars.shift();
  chars.push(front);
  Table.push([...chars]);
}

function getChar(i, j) {
  return String.fromCharCode(32 + Table[i][j]);
}

function getNum(c) {
  return c.charCodeAt(0) - 32;
}

function encryption(P, K) {
  return getChar(getNum(P), getNum(K));
}

function decryption(C, K) {
  // find C in Kth column and get char at same index 0th column
  var j = getNum(K);
  for (var i = 0; i < n; i++) {
    if (getNum(C) == Table[i][j]) {
      return getChar(i, 0);
    }
  }
}

var output = document.querySelector("#output");
var textarea = document.querySelector("textarea");
var key = document.querySelector("#key");
var encrypt = document.querySelector("#encrypt");
var decrypt = document.querySelector("#decrypt");

encrypt.addEventListener("click", () => {
  var plainText = textarea.value;
  var secretKey = key.value;
  var j = 0;
  cipher = "";
  for (var i = 0; i < plainText.length; i++) {
    cipher = cipher + encryption(plainText[i], secretKey[j]);
    j = (j + 1) % secretKey.length;
  }
  output.innerText = cipher;
});

decrypt.addEventListener("click", () => {
  var cipher = textarea.value;
  var secretKey = key.value;

  var j = 0;
  plainText = "";
  for (var i = 0; i < cipher.length; i++) {
    plainText = plainText + decryption(cipher[i], secretKey[j]);
    j = (j + 1) % secretKey.length;
  }
  output.innerHTML = plainText;
});
