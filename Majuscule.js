#! node
/* Afficher une lettre sur deux en majuscule. */

if (typeof process.argv[2] !== "string") {
  console.log("Veuillez indiquer au script, un string en argument");
}
console.log(typeof process.argv[2]);

let argument = process.argv[2];
let sent = "";
let space = 0;

for(i = 0; i < argument.length; i++) {
  let num = i + space;
  if (process.argv[2][i] === " ") {
  space += 1;
  }
  if (num % 2 === 0) {
  sent += process.argv[2][i].toUpperCase();
} else {
  sent += process.argv[2][i].toLowerCase();
}
}
console.log(sent);
