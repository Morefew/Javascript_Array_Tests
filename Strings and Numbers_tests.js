let stringTest = "Hello, World";
console.log(stringTest);
firstHalf = stringTest.slice(0, 5);
console.log(stringTest);
console.log(firstHalf);

let userName = "";
userName = "Juan";

console.log(userName);

let greetings = `${firstHalf} ${userName}, how is your day?`;

console.log(greetings);

// newGreetings = greetings.split(" "); para obtener un array
// newGreetings = greetings.split(",");

// newGreetings = greetings.slice(" "); para obtener un nuevo string
newGreetings = greetings.slice(0, 10);

console.log(newGreetings);
console.log(newGreetings.length);
console.log(typeof newGreetings);

// string.padStart y string.padEnd para agregar caracteres al principio y al final de un string

let reNewGreet = newGreetings.padStart(13, "-- ").padEnd(16, " --");
console.log(reNewGreet);
console.log(reNewGreet.length);
console.log(typeof reNewGreet);

// ------------------------------------------------- //
// ------------------ EJERCICIO -------------------- //
// --------- International Number Format ----------- //
// ------------------------------------------------- //

sum = 2.95578;
i = Math.pow(sum, 2);
un = Math.pow(sum + i, 2);
sumiun = Math.pow(sum + i + un, 2);

console.log(sumiun);
internationalNumberFormat = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 16,
  style: "currency",
  currency: "JPY",
});
console.log(internationalNumberFormat.format(sumiun));
