// Make the 26*26 table for Vigenere Cipher
var chars = [...Array(26).keys()];
var Table = [];
Table.push(chars);
for (var i = 1; i < 26; i++) {
  front = chars.shift();
  chars.push(front);
  Table.push([...chars]);
}

function getChar(i, j) {
  return String.fromCharCode(65 + Table[i][j]);
}

function getNum(c) {
  return c.charCodeAt(0) - 65;
}

function encrypt(P, K) {
  convert(Table[getNum(P)][getNum(K)]);
}

function decrypt(C, K) {
  // find C in K column and get index
}
