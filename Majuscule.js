#! node

let argument = process.argv[2];
let sent = "";

for(i = 0; i < argument.length; i++) {
  if (i % 2 === 0) {
  sent += process.argv[2][i].toUpperCase();
  } else {
  sent += process.argv[2][i].toLowerCase();
  }
}
console.log(sent);
