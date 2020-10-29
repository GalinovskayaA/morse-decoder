const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let size = 10;
  let b = [];

  for (let i = 0; i < expr.length/size; i++) {
    b[i] = expr.slice(i * size, i * size + size);
  }
  let c = [];
  for (let e = 0; e < b.length; e++) {
    c.push(b[e].replace(/10/g, '.').replace(/00/g, '').replace(/11/g, '-').replace(/\*{10}/g, ' '));
  }
  let m = new Map(Object.entries(MORSE_TABLE));
  let result = [];
  for (let x = 0; x < c.length; x++) {
    let j = c[x];
    let letter = m.get(j)
    result.push(letter || ' ')
  }
  return result.join('')
}

module.exports = {
    decode
}