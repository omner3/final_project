const mortgageAmount = document.querySelector('#mortgageAmount')
const mortgageTerm = document.querySelector('#mortgageTerm')
const interesRate = document.querySelector('#interesRate')
const repaymentRadio = document.querySelector('#repaymentRadio')
const interestRadio = document.querySelector('#interestRadio')
const caculateRepayments = document.querySelector('#caculate-repayments')




//validación
(() => {
    'use strict'
  

    const forms = document.querySelectorAll('.needs-validation')
  

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()