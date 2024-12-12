const form = document.querySelector('#form')
const mortgageAmount = document.querySelector('#mortgageAmount')
const mortgageTerm = document.querySelector('#mortgageTerm')
const interestRate = document.querySelector('#interestRate')
const calculateRepayments = document.querySelector('#caculate-repayments')
const monthlyRs = document.querySelector('#rs-monthly')
const totalRs = document.querySelector('#rs-total')
const repaymentRadio = document.querySelector('#repaymentRadio')
const interestRadio = document.querySelector('#interestRadio')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  let p = parseFloat(mortgageAmount.value)
  let r = parseFloat(interestRate.value) / 12
  let years = parseInt(mortgageTerm.value)
  let n = years * 12



  if (interestRadio.checked) {
    let interestMonthly = p * r
    let interestTotal = interestMonthly * n

    monthlyRs.textContent = `£${interestMonthly.toFixed(2)}`
    totalRs.textContent = `£${interestTotal.toFixed(2)}`

  } else if (repaymentRadio.checked){
    let monthlyPayment = calculate(p, r, n)
    let totalRepayment = monthlyPayment * n

    monthlyRs.textContent = `£${monthlyPayment.toFixed(2)}`
    totalRs.textContent = `£${totalRepayment.toFixed(2)}`
  }

  document.getElementById('empty-results').classList.add('d-none')
  document.getElementById('completedResults').classList.remove('d-none')
});

function calculate(p, r, n) {
  let numerador = p * r * ((1 + r) ** n)
  let denominador = ((1 + r) ** n) - 1
  return numerador / denominador.toFixed(2)
}



/*document.querySelector('#caculate-repayments').addEventListener('click', () => { 
  const mortgageAmount = parseFloat(document.querySelector('#mortgageAmount').value)
  const mortgageTerm = parseFloat(document.querySelector('#mortgageTerm').value)
  const interestRate = parseFloat(document.querySelector('#interestRate').value)
  const repaymentRadio = document.querySelector('#repaymentRadio')
  const interestRadio = document.querySelector('#interestRadio')  
})*/

/*const form = document.querySelector('#form')
const emptyResults = document.querySelector('#empty-results')
const completedResults = document.querySelector('completedResults')*/

//form.addEventListener('submit', showResults)
/*
function compute(p, r, n) {
  let numerador = p * r * ((1 + r) ** n)
  let denominador = ((1 + r) ** n) - 1

  let res = (numerador / denominador).toFixed(2)

  console.log(res)
}





function showResults() {
  emptyResults.classList.add('d-none')
  completedResults.classList.remove('d-none')
}
*/

//validación
function validateForms() {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      console.log('Form validation failed:', !form.checkValidity());

      form.classList.add('was-validated');
    }, false);
  });
}


validateForms();
