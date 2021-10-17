#! node
/* Afficher une lettre sur deux en majuscule. */

// Permet de créer un tableau de string et number

process.argv.shift(process.argv[0]); process.argv.shift(process.argv[1]);

let argString = process.argv;
let argNumber = [];
let argNumStg = [];

for (i = 0; i < argString.length; i++) {
  argNumber[i] = parseInt(argString[i]);
}
for (j = 0; j < argNumber.length; j++) {
  if (isNaN(argNumber[j])) {
    argNumStg[j] = argString[j];
  } else {
    argNumStg[j] = argNumber[j];
  }
}
// Fin création tableau

let argument = argNumStg[0];
let sent = "";
let space = 0;


if (typeof argument !== 'string') {
  console.log("Veuillez indiquer au script, un string en argument");
} else {
  for(i = 0; i < argument.length; i++) {
  let num = i + space;
  if (argNumStg[0][i] === " ") {
  space += 1;
  }
  if (num % 2 === 0) {
  sent += argNumStg[0][i].toUpperCase();
} else {
  sent += argNumStg[0][i].toLowerCase();
}
}
console.log(sent);
}
