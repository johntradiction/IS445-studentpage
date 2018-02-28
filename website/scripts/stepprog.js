let start=prompt('Enter the start:');
let startInt=parseInt(start);
let end=prompt('Enter the end:');
let endInt=parseInt(end);
let step=prompt('Enter the step:');
let stepInt=parseInt(step);
var stepArray= new Array();
var total=0;
var binArray= new Array();
if (isNaN(startInt)||isNaN(endInt)||isNaN(stepInt)||stepInt==0||startInt<endInt && stepInt<0||startInt>endInt && stepInt>0) {
    document.write('Invalid integer input, please reload and try again.');
}
else {
    if (step>0) {
        for (startInt; startInt<=endInt; startInt+=stepInt) {
            stepArray.push(startInt);
        }
    }
    if (step<0) {
        for (startInt; startInt>=endInt; startInt+=stepInt) {
            stepArray.push(startInt);
        }
    }
    for (var i=0, len=stepArray.length; i<len; i++) {
        total+=stepArray[i]; binArray.push(stepArray[i].toString(2))
    }
    document.write('The generated array is ' + stepArray + '.' + '<br>');
    document.write('The sum is ' + total + '.' + '<br>')
    document.write('The binary of absolute element values are: ' + binArray + '.')
}