let count;
let start=prompt('Enter the start:');
let startInt=parseInt(start);
let end=prompt('Enter the end:');
let endInt=parseInt(end);
let step=prompt('Enter the step:');
let stepInt=parseInt(step);
var stepArray= new Array();

if (isNaN(startInt)||isNaN(endInt)||isNaN(stepInt)||stepInt==0) {
    document.write('Invalid integer input, please reload and try again.')
}
else {
    if (step>0) {
        for (count=startInt; count<=endInt; count+=stepInt){
            stepArray.push(count);
        }
    }
    if (step<0) {
        for (count=startInt; count>=endInt; count+=stepInt){
            stepArray.push(count);
        }
    }
    document.write('The generated array is ' + stepArray)
}
