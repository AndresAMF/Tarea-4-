//función que cuenta los numeros del 1 al 100

function showNumbers(num) {
    if (num <= 100) {
    console.log(num);
    showNumbers(num + 1);
    }
}

console.log(showNumbers(1));


// Función que cuenta desde 1000 a 500 de 2 en 2
function showNumbers2 (num) {    
    if (num >= 500) {
        console.log(num);
        showNumbers2(num - 2);
    }
}

console.log(showNumbers2(1000));


//Ejercicio 3
const marks =[6 , 8 , 9 , 2 , 5, 10];

function averageMarks(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

console.log(averageMarks(marks).toFixed(1));