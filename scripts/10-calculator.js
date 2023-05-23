let calculation = localStorage.getItem('calc') || '';
let jsCalculation = document.getElementsByClassName('js-calculation');

const saveCalculation = () => {
  localStorage.setItem('calc', calculation);
}

const showCalculation = () => {
  if (calculation !== '' || calculation !== null)
 {
  jsCalculation[0].innerHTML = calculation;
 }
}

showCalculation();

logCal = () => {
  console.log(calculation);
  showCalculation();
  saveCalculation();
}

updateCalculation = number => {
  
  if ((typeof number) == 'number') {
    calculation += number;
    logCal();
  } else if ((typeof number) === 'string' && (number === '+' || number === '-' || number === '*' || number === '/')) {
    calculation += ` ${number} `;
    logCal(); 
  } else if ((typeof number) === 'string' && number === '.') {
    calculation += '.';
    logCal();
  } else if ((typeof number === 'string') && number === '=') {
    calculation = eval(calculation);
    logCal();
  } else if (number === 'clear') {
    calculation = '';
    console.log('Cleared');
    logCal();
  }
}