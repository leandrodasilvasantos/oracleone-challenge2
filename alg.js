refreshScreen()
const sidebar = document.getElementById('dicain')
var inputCHAR = document.querySelector('#inputCHAR')

var points = 0;
var title = ['Fruta', 'Países']
var fruits = ['Maça', 'Banana', 'Abacaxi']
var paises = ['Brasil', 'Alemanha', 'Holanda']
var splitword
var addword = []
var letter = []
var letterOFF = []
var userletter = ''
var error = 6;
var correct = 0;
var category = '';

document.addEventListener('keydown', function (e) {

  userletter = e.key.toUpperCase();
  console.log(e.keyCode);

  if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode == 186)) { // if a letter pressed
    startScanning(userletter);
 }

  if (error == 0) {
    document.querySelector('.modal-container').style.display = 'flex'
    document.querySelector('.title-modal-win').style.display = 'none'
    document.querySelector('.title-modal-lose').style.display = 'flex'
  }

});
function startScanning(userletter) {
  var text = document.querySelector('#inputCHAR');
  var contentText = inputCHAR.value;
  if(contentText.includes(userletter)) {
    alert('DONT PRESS THE SAME');
  } else {
    text.value += userletter;
    correctAndError(userletter);
  }
}
function correctAndError(userletter) {
  if (word.includes(userletter)) {
    scanLetter(userletter);
    console.log('Acertou: ',correct);
  } else if (!word.includes(userletter)){
    createForca(error);
    console.log('Errou: ',error);
  }
}
function scanLetter(userletter) {
  for (var i = 0; i <= splitword.length - 1; i++) {
    if (splitword[i].includes(userletter)) {
      correct += 1;
      points = Math.floor((correct/splitword.length)*100);
      atualizarSidebar(category);
      letterOFF[i].setAttribute('class', 'word-content')
      letterOFF[i].setAttribute('id', 'letter')
    } 
  }
  if (correct == splitword.length) {
    document.querySelector('.modal-container').style.display = 'flex'
    document.querySelector('.title-modal-win').style.display = 'flex'
    document.querySelector('.title-modal-lose').style.display = 'none'
  }
}
function clearForca() {
  document.querySelector('.base').style.display = 'flex';
  document.querySelector('.astemaior').style.display = 'flex';
  document.querySelector('.astemenor').style.display = 'flex';
  document.querySelector('.corda').style.display = 'flex';
  document.querySelector('.cabeca').style.display = 'none';
  document.querySelector('.bracodireito').style.display = 'none';
  document.querySelector('.bracoesquerdo').style.display = 'none';
  document.querySelector('.tronco').style.display = 'none';
  document.querySelector('.pernadireita').style.display = 'none';
  document.querySelector('.pernaesquerda').style.display = 'none';

}
function createForca(errorAUX) {
  error--;
  errorAUX = errorAUX - 1;
  var bracodireito = document.querySelector('.bracodireito');
  var bracoesquerdo = document.querySelector('.bracoesquerdo');
  var cabeca = document.querySelector('.cabeca');
  var pernadireita = document.querySelector('.pernadireita');
  var pernaesquerda = document.querySelector('.pernaesquerda');
  var tronco = document.querySelector('.tronco');

  var forca = [pernadireita,pernaesquerda,bracodireito,bracoesquerdo,tronco,cabeca];

  forca[errorAUX].style.display='flex';
}
function refreshScreen() {
  document.querySelector('.BUTTON_PLAY').style.display = 'initial'
  document.querySelector('.BUTTON_ADDWORD').style.display = 'initial'
  document.querySelector('.BUTTON_NEWPLAY').style.display = 'none'
  document.querySelector('.BUTTON_CANCEL').style.display = 'none'
  document.querySelector('.footer').style.display = 'flex'
  document.querySelector('.startpage').style.display = 'flex'
  document.querySelector('.games').style.display = 'none'
  document.querySelector('.copyrightGame').style.display = 'none'
  document.querySelector('.modal-container').style.display = 'none'
  document.querySelector('#inputCHAR').value = ''
}
function screenGame() {
  document.querySelector('.BUTTON_PLAY').style.display = 'none'
  document.querySelector('.BUTTON_ADDWORD').style.display = 'none'
  document.querySelector('.BUTTON_NEWPLAY').style.display = 'initial'
  document.querySelector('.BUTTON_CANCEL').style.display = 'initial'
  document.querySelector('.startpage').style.display = 'none'
  document.querySelector('.footer').style.display = 'none'
  document.querySelector('.copyrightGame').style.display = 'flex'
  document.querySelector('.games').style.display = 'flex'
  document.querySelector('#dicain').style.display = 'flex'
  document.querySelector('#inputCHAR').style.display = 'flex'
  splitword = '';
  word = '';
  clearForca();
  play();
}
function play() {
  splitword = ''
  category = title[Math.ceil(Math.random() * title.length - 1)]
  if (category == 'Países') {
    word = paises[Math.ceil(Math.random() * paises.length - 1)]
    word = word.toUpperCase()
    atualizarSidebar(category)
    splitword = [...word]
    hiddingWords(splitword);
  } else if (category == 'Fruta') {
    word = fruits[Math.ceil(Math.random() * fruits.length - 1)]
    word = word.toUpperCase()
    atualizarSidebar(category)
    
    splitword = [...word]
    hiddingWords(splitword);
  }
  console.log(category);
  console.log(word);
  console.log(error);
}
function atualizarSidebar(category) {
  sidebar.value = 'Dica: ' + category + ' \nProgresso: ' + points + '%'
}
function hiddingWords(splitword) {
  console.log(splitword)
  for (var i = 0; i <= splitword.length - 1; i++) {
    addword[i] = document.getElementById('word')
    letterOFF[i] = document.createElement('p')
    letterOFF[i].setAttribute('class', 'word-contentOFF')
    letterOFF[i].innerHTML = splitword[i]
    letterOFF[i].setAttribute('id', 'letterOFF')
    addword[i].append(letterOFF[i])
  }
}

