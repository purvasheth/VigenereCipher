// Make the 26*26 table for Vigenere Cipher
var chars = [...Array(26).keys()];
var Table = [];
Table.push([...chars]);
for (var i = 1; i < 26; i++) {
  front = chars.shift();
  chars.push(front);
  Table.push([...chars]);
}

function getChar(i, j) {
  console.log(Table[0]);
  return String.fromCharCode(65 + Table[i][j]);
}

function getNum(c) {
  return c.charCodeAt(0) - 65;
}

function encryption(P, K) {
  console.log(getNum(P), getNum(K));
  return getChar(getNum(P), getNum(K));
}

function decryption(C, K) {
  // find C in Kth column and get char at same index 0th column
  var j = getNum(K);
  for (var i = 0; i < 26; i++) {
    if (getNum(C) == Table[i][j]) {
      console.log(i, j);
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
  var plainText = textarea.value.toUpperCase();
  var secretKey = key.value.toUpperCase();
  var j = 0;
  cipher = "";
  for (var i = 0; i < plainText.length; i++) {
    cipher = cipher + encryption(plainText[i], secretKey[j]);
    j = (j + 1) % secretKey.length;
  }
  output.innerHTML = cipher.toLowerCase();
});

decrypt.addEventListener("click", () => {
  var cipher = textarea.value.toUpperCase();
  var secretKey = key.value.toUpperCase();

  var j = 0;
  plainText = "";
  for (var i = 0; i < cipher.length; i++) {
    plainText = plainText + decryption(cipher[i], secretKey[j]);
    j = (j + 1) % secretKey.length;
  }
  console.log(plainText);
  output.innerHTML = plainText.toLowerCase();
});

console.log(encryption("A", "K"));
console.log(decryption("K", "K"));
