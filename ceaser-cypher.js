const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function decrypt(str) {
  for(i=0;i<25;i++){
    let result = '';
    for(k=0;k<text.length;k++){
      result+= decodedLetter(text[k],i)
    }
    console.log(result)
  }
}

function decodedLetter(letter, interval){
  if(letter == ' ') return ' ';
  if(!isNaN(letter)) return letter;
  let index = ALPHABETS.indexOf(letter);
  let nextIndex = index+interval;
  nextIndex = nextIndex > 25 ? (nextIndex - 25 - 1) : nextIndex;
  return ALPHABETS[nextIndex]
}

// text = 'encoded text'
