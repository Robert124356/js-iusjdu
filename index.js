// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Przyciski
const doIlu = document.getElementById('doIlu');
const losuj = document.getElementById('btn');
const dodLewa = document.getElementById('dodLewa');
const dodPrawa = document.getElementById('dodPrawa');
const wynik = document.getElementById('wynik');
const wynikP = document.getElementById('wynikP');
const wynikNie = document.getElementById('wynikNie');
const seriaDod = document.getElementById('seriaDod');

const check = document.getElementById('check');

//Losowanie liczb
losuj.addEventListener('click', function () {
  dodLewa.value = Math.floor(Math.random() * doIlu.value);
  dodPrawa.value = Math.floor(Math.random() * doIlu.value);
  wynikP.style.display = 'none';
  wynikNie.style.display = 'none';
});

//Wynik dodawania
let wynikDodawania = Number(dodLewa.value) + Number(dodPrawa.value);

//Sprawdzenie wyniku dodawania
check.addEventListener('click', function () {
  let suma = Number(dodLewa.value) + Number(dodPrawa.value);

  if (Number(wynik.value) === suma) {
    wynikP.style.display = 'inline';
    wynikNie.style.display = 'none';
    seriaDod.innerHTML++;
    dodLewa.value = Math.floor(Math.random() * doIlu.value);
    dodPrawa.value = Math.floor(Math.random() * doIlu.value);
    wynik.value = '';
  } else {
    wynikNie.style.display = 'inline';
    wynikP.style.display = 'none';
    seriaDod.innerHTML = 0;
    dodLewa.value = Math.floor(Math.random() * doIlu.value);
    dodPrawa.value = Math.floor(Math.random() * doIlu.value);
    wynik.value = '';
  }
});

//Przyciski
const ileOdjac = document.getElementById('ileOdjac');
const losujBtn = document.getElementById('losujBtn');
const odLewa = document.getElementById('odLewa');
const odPrawa = document.getElementById('odPrawa');
const wynikOdejmowania = document.getElementById('roznica');
const wynikOdP = document.getElementById('wynikOdP');
const wynikOdNie = document.getElementById('wynikOdNie');
const seriaOd = document.getElementById('seriaOd');

const odCheck = document.getElementById('odCheck');

//Losowanie liczb
losujBtn.addEventListener('click', function () {
  odLewa.value = Math.floor(Math.random() * ileOdjac.value);
  odPrawa.value = Math.floor(Math.random() * odLewa.value);

  wynikOdP.style.display = 'none';
  wynikOdNie.style.display = 'none';
});

//Sprawdzenie wyniku odejmowania
odCheck.addEventListener('click', function () {
  let roznica = Number(odLewa.value) - Number(odPrawa.value);
  if (Number(wynikOdejmowania.value) === roznica) {
    wynikOdP.style.display = 'inline';
    wynikOdNie.style.display = 'none';
    seriaOd.innerHTML++;
  } else {
    wynikOdNie.style.display = 'inline';
    wynikOdP.style.display = 'none';
    seriaOd.innerHTML = 0;
  }
});

//ZADANIA

//SZABLON
let plus = ' + ';
let rowna = ' = ';
let iks = ' * ';
let zmiennaX = 10;
let suma = document.getElementById('summ');
let guzikCheck = '<button type="button" id="jakTo">' + 'SPRAWDŹ' + '</button>';
const szablon =
  '<div>' +
  '<input type="text" size="4" id="left" />' +
  `${plus}` +
  '<input type="text" size="4" id="right" />' +
  `${rowna}` +
  '<input type="text" size="5" id="score" />' +
  guzikCheck;

//WYBÓR
const dodawanie = document.getElementById('dodawanie');
const odejmowanie = document.getElementById('odejmowanie');
const mnozenie = document.getElementById('mnozenie');

const zadaniaA = document.getElementById('zadaniaA');

dodawanie.addEventListener('click', function go() {
  zadaniaA.innerHTML = szablon;
  left.value = Math.floor(Math.random() * zmiennaX);
  right.value = Math.floor(Math.random() * zmiennaX);
  let poprawny = Number(left.value) + Number(right.value);
  let jakTo = document.getElementById('jakTo');
  let wynik = document.getElementById('score');

  jakTo.addEventListener('click', function () {
    if (poprawny == wynik.value) {
      left.value = Math.floor(Math.random() * zmiennaX);
      right.value = Math.floor(Math.random() * zmiennaX);
      suma.innerHTML++;
      go();
      if (suma.innerHTML == 10) {
        alert('GRATULACJE!! PRZECHODZISZ DO DRUGIEGO POZIOMU');
        zmiennaX = 20;
      } else if (suma.innerHTML == 20) {
        alert('GRATULACJE!! PRZECHODZISZ DO TRZECIEGO POZIOMU');
        zmiennaX = 30;
      } else if (suma.innerHTML == 30) {
        alert('GRATULACJE!! PRZECHODZISZ DO CZWARTEGO POZIOMU');
        zmiennaX = 40;
      } else if (suma.innerHTML == 40) {
        alert('GRATULACJE!! PRZECHODZISZ DO PIĄTEGO POZIOMU');
        zmiennaX = 50;
      } else if (suma.innerHTML == 50) {
        alert('GRATULACJE!! PRZECHODZISZ DO SZÓSTEGO POZIOMU');
        zmiennaX = 60;
      } else if (suma.innerHTML == 60) {
        alert('GRATULACJE!! PRZECHODZISZ DO SIÓDMEGO POZIOMU');
        zmiennaX = 70;
      } else if (suma.innerHTML == 70) {
        alert('GRATULACJE!! PRZECHODZISZ DO ÓSMEGO POZIOMU');
        zmiennaX = 80;
      } else if (suma.innerHTML == 80) {
        alert('GRATULACJE!! PRZECHODZISZ DO DZIEWIĄTEGO POZIOMU');
        zmiennaX = 90;
      } else if (suma.innerHTML == 90) {
        alert('GRATULACJE!! PRZECHODZISZ DO DZIESIĄTEGO POZIOMU');
        zmiennaX = 100;
      } else if (suma.innerHTML == 100) {
        alert('GRATULACJE!! UKOŃCZYŁEŚ GRĘ. JESTEŚ NAJLEPSZY/NAJLEPSZA!!!');
      }
    } else {
      console.log('do nothing');
    }
  });
});
