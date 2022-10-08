// ------------------------------------------------- //
// ------------- CREAR COPIA DE ARRAY -------------- //
// ------------------------------------------------- //

let a = ["uno", "dos", "tres", "cuatro", "cinco"];
let b = a;
console.log(b);

// El array b no es un copia, sino que apunta hacia el array a y sus valores.

b.unshift("zero");

console.log(a);
console.log(b);

//para crear una copia podemos usar los siguientes procedimientos:

let c = [];

// con un for loop:
for (let index = 0; index < a.length; index++) {
  c[index] = a[index];
}

//usando el método Array.from()

let d = Array.from(a);

console.log(c);
console.log(d);

//comprobamos que son "c" y "d" son copias de "a" en arrays distintos

c.shift("zero");
c.unshift("cero");
d.push("seis");

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// ------------------------------------------------- //
// ------------- MÉTODOS DE LOS ARRAYS ------------- //
// ------------------------------------------------- //

const miArray = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];
console.log(miArray.length);

let position = miArray[3];
console.log(position);
position = "Diez";
console.log(miArray[3]);
console.log(position);

miArray.push("siete", "ocho", "nueve", "diez");
console.log(miArray);

miArray.pop();
console.log(miArray);

//-------------- el push puede agregar varios valores, pero las acciones de extraer no
miArray.pop("ocho", "nueve");
console.log(miArray);

//-------------- cuando se ejecuta el pop se extrae el ultimo valor aun al asignarlo a una variable

let popElement = miArray.pop();
console.log(popElement);



miArray.unshift("menos uno", "cero");
console.log(miArray);

miArray.shift();
console.log(miArray);


miArray.splice(3, 0, "VEINTE", "TREINTA");
console.log(miArray);

const supportArray = [50, 60, 70, 80];
miArray.splice(3, 0, supportArray);
console.log(miArray);

miArray.splice(3, 1);
console.log(miArray);

//-------------- cuando se ejecuta el splice se extrae el ultimo valor aun al asignarlo a una variable

let returnSpliceArray = miArray.splice(3, 2);
console.log(returnSpliceArray);

console.log(miArray);

// ------------------------------------------------- //
// ---------------- CREANDO ARRAYS ----------------- //
// ------------------------------------------------- //

// Create an array of random numbers

function arrayCreator(maxCount) {
  const count = maxCount || [];
  let arrayResult = [];
  for (let index = 0; index < count; index++) {
    arrayResult.push(Math.ceil(Math.random() * 100));
    console.log(arrayResult);
  }
  return arrayResult;
}

// 1.1 from a Variable

let range = 5;
let arrayFromVar = arrayCreator(range);
console.log(arrayFromVar);

// 1.2 provided to the function as a parameter
let arrayParam = arrayCreator(8);
console.log(arrayParam);
stringFromArray = `resultado: ${arrayParam[2]} + ${arrayParam[4]}`;
console.log(stringFromArray);
console.log(typeof stringFromArray);

// 1.3? TEST for no parameter provided
let noParamProvided = arrayCreator();
console.log(noParamProvided);

// ------------------------------------------------- //
// ----------   BUSCANDO DENTRO DE ARRAYS ---------- //
// ------------------------------------------------- //

// 2 Find Array Max value and Index of value

function maximun(array) {
  let maxValue = 0;
  let valuePos = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  valuePos = array.indexOf(maxValue) + 1;
  result = { maxValue, valuePos };

  return result;
}

// Find: Array Min value and Index of value.

function minimun(array) {
  let minValue = array[0];
  let valuePos = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
  }

  valuePos = array.indexOf(minValue) + 1;
  result = { minValue, valuePos };

  return result;
}

let buildArray = arrayCreator(5);

maximun(buildArray);
minimun(buildArray);

console.log(buildArray);
console.log(maximun(buildArray));
console.log(minimun(buildArray));

// ------------------------------------------------- //
// ------------------ EJERCICIO -------------------- //
// ------- Mersenne Prime Number Calculator -------- //
// ------------------------------------------------- //

function primeNum(num) {
  const mersenneNum = Math.pow(2, num) - 1;
  console.log(mersenneNum);

  return mersenneNum;
}

console.log(primeNum(11));

// ------------------------------------------------- //
// -------------  RECORRIENDO ARRAYS  -------------- //
// ------------------------------------------------- //

//convertir numero a string | recorrer la string y sumar sus dígitos

let numero = 27379;
let newNumArr = arrConstruc(numero);

function arrConstruc(numero) {
  let string = numero.toString(10);
  let arrNum = [];
  let total = 0;

  for (let index = 0; index < string.length; index++) {
    console.log(string.length)
    arrNum.push(Number(string.charAt(index)));
  }
  total = arrNum.reduce((x, y) => x + y);

  console.log(arrNum);

  console.log(total);
  console.log(typeof total);
  return total;
}
console.log(newNumArr);

// ------------------------------------------------- //
// ------------------ EJERCICIO -------------------- //
// -------------- Prime Number Tester -------------- //
// ------------------------------------------------- //
// COMPROBAR QUE UN NUMERO ES PRIMO COMPARANDOLO CON UN ARRAY DE PRIMOS DE 2 DIGITOS

function primeTester(number) {
  const primeLessHund = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  ];

  if (primeLessHund.includes(number)) {
    return `${number} is a Prime Number`;
  } else {
    return `It's not a Prime Number`;
  }
}

let testIfPrime = primeTester(9751);
console.log(testIfPrime);

// ------------------------------------------------- //
// ------------------ EJERCICIO -------------------- //
// ------------- Prime Number Tester 2-------------- //
// ------------------------------------------------- //
// PROBAR CONDICION VERDADERA DE NUM SI EL COCIENTE ES 0 AL DIVIDIR CON ARRAY

function primeTesterTwo(number) {
  const primeLessHund = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  ];
  // let i = 0;
  // function compare(number, array) ;
  // array.forEach() => {
  //    == 0;
  // }

  for (let i = 0; i < primeLessHund.length; i++) {
    // ME FALTA EL ARGUMENTO QUE CREE EL CICLO (SOLO SE ESTA DIV POR EL INDEX 0)
    console.log(primeLessHund[i]);
    if (number % primeLessHund[i] !== 0) {
      return `${number} is a Prime Number`;
    } else {
      return `${number} is a not Prime Number`;
    }
  }
}
let numeroC = primeTesterTwo(25689);
console.log(numeroC);

// ------------------------------------------------- //
// -------------- INVIRTIENDO ARRAYS ----------------//
// ------------------------------------------------- //

const arrayNumLTR = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];
const arrayUsers = ["John", "Gill", "Louise", "Mike", "Trevor", "Jane"];

function invertArray(array) {
  let arrayResult = [];

  for (let i = array.length - 1; i >= 0; i--) {
    arrayResult.push(array[i]);
  }

  return arrayResult;
}

const arrayNumRTL = invertArray(arrayNumLTR);
const inversUsers = invertArray(arrayUsers);

console.log(arrayNumLTR);
console.log(typeof arrayNumLTR);

console.log(arrayNumRTL);
console.log(typeof arrayNumRTL);

console.log(arrayUsers);
console.log(typeof arrayUsers);

console.log(inversUsers);
console.log(typeof inversUsers);

//------------- Métodos forEach y map -------------//

let fEachArray = [];
arrayNumRTL.forEach((elem, index, array) => {
  fEachArray.push(elem);
});

console.log(fEachArray);

let mapArray = arrayNumLTR.map((i) => i); // ¿por qué se asume a "i" como los elementos del array?

console.log(mapArray);

//---------------- Método for of ----------------//

let palabra = ["Jugador", "Béisbol", "Dominicano"];
let linea = "";

for (let i of palabra) {
  linea += i;
}
console.log(linea);
console.log(typeof palabra);
console.log(typeof linea);

// ------------------------------------------------- //
// -------- DIVIDIR ARRAYS EN PARTES IGUALES --------//
// ------------------------------------------------- //

// USAR Math.ceil(ARRAY.LENGTH)
let arrayToDivide = [1, 2, 3, 4, 5, 6];
let partsToDivide = 2;
arrayDividedFromBeg = arrayToDivide.slice(
  0,
  Math.ceil(arrayToDivide.length / partsToDivide)
);
arrayDividedFromEnd = arrayToDivide.slice(
  -Math.ceil(arrayToDivide.length / partsToDivide)
);
console.log(arrayDividedFromBeg);
console.log(arrayDividedFromEnd);

/////////////////////    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function solution(number) {
  let numberSum = 0;
  let numbersMatrix = [];

  for (let i = 1; i < number; i++) {
    if (i <= 0) {
      numberSum = 0;
    } else if (i % 3 == 0 || i % 5 == 0) {
      numberSum += i;
      numbersMatrix.push(i);
    } else {
      numberSum += 0;
    }
    console.log(numbersMatrix);
    console.log(numberSum);
  }
  return { Total: numberSum, Values: numbersMatrix };
}

numberSolution = solution(10);

// function solution(number) {
//   let sum = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

console.log(numberSolution);
console.time((numberSolution = solution(23)));

/////////////////////  //  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
