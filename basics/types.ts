//Variables
//(usually rely on implicit definitions for variables)
let apples = 5;
let acceleration = "fast"; //implicit
let speed: string = "super fast"; //annotated
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//Built-in objects
let now: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Class
class Car {}
let car: Car = new Car();

//Object Literal
let size: { height: number; width: number } = {
	height: 10,
	width: 20,
};

//Tuple (Objects are usually preferred instead for
//the added readability of key:value syntax)
const coffee: [string, boolean, number] = ["brown", true, 40];
//or using type alias
type Drink = [string, boolean, number];
const tea: Drink = ["orange", true, 60];

//Function - see functions.ts
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

//When to use annotations (we usually rely on implicit types)
//1) Functions that return type: any
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json); //.parse returns type: any
//but we want to define the return type^ for bug-safety/readability

//2) When we declare a variable, then initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean; //declare
for (let i = 0; i < words.length; i++) {
	if (words[i] === "green") {
		foundWord = true; //initialize
	}
}

//3) Variables whose types cannot be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; //=== boolean
//using the 'or' operator    ^
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i]; //=== number
	}
}
