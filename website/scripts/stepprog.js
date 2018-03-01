let start=parseInt(prompt('Enter the start:'));
let end=parseInt(prompt('Enter the end:'));
let step=parseInt(prompt('Enter the step:'));
let stepArray= new Array();
let total=0;
let binArray= new Array();
if (isNaN(start)||isNaN(end)||isNaN(step)||step===0||start<end && step<0||start>end && step>0) {
    document.write('Invalid integer input, please reload and try again.');
}
else {
    if (step>0) {
        for (start; start<=end; start+=step) {
            stepArray.push(start);
        }
    }
    if (step<0) {
        for (start; start>=end; start+=step) {
            stepArray.push(start);
        }
    }
    for (var i=0, len=stepArray.length; i<len; i++) {
        total+=stepArray[i]; binArray.push(stepArray[i].toString(2));
    }
    document.write('The generated array is ' + stepArray + '.' + '<br>');
    document.write('The sum is ' + total + '.' + '<br>');
    document.write('The binary of absolute element values are: ' + binArray + '.');
}