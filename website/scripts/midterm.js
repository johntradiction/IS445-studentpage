const addBtn = document.getElementById('primeBtn')
const num1 = document.getElementById('num1')
const num2= document.getElementById('num2')
const output = document.getElementById('output')
let numArray= new Array();

primeBtn.addEventListener('click', () => {
    numArray=[];
    let val1 = parseInt(num1.value)
    let val2 = parseInt(num2.value)
    errorMSG.innerHTML=('')
    result.innerHTML=('')
    output.innerHTML=('')
    if (val1<2||val2<2||val1>100||val2>100) {
        errorMSG.innerHTML = ('Invalid input, please try again.')
    }
    else if (val1<=val2) {
        for (var i=val1; i<=val2; i++) {
            numArray.push(i);
        }
        numArray = numArray.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) return false;
            }
            return true;
          })
        result.innerHTML=('There are ' + numArray.length + ' prime numbers.')
        output.innerHTML=numArray
    }
    else if (val2<=val1) {
        for (var i=val1; i>=val2; i--) {
            numArray.push(i);
        }
        numArray = numArray.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) return false;
            }
            return true;
          })
        result.innerHTML=('There are ' + numArray.length + ' prime numbers.')
        output.innerHTML=numArray
    }
})