//implicit typing does not work as well for functions.
//we need to add the return type to this function to ensure:
//1) a value is returned 2) returned value is the correct type
const add = (a: number, b: number) /*: addTypeHere*/ => {
	return a + b;
};
//like so:
const subtract = (a: number, b: number): number => {
	return a - b;
};

//number - named function declaration
function divide(a: number, b: number): number {
	return a / b;
}

//number - anonymous function
const multiply = function (a: number, b: number): number {
	return a * b;
};

//void - arrow function
const logger = (message: string): void => {
	console.log(message);
};

//use type: never when the function will never reach the end
const throwError = (message: string): never => {
	throw new Error(message);
};

//use type: void since this function could reach the end but won't return anything
//you'd use whichever type could conditionally be returned from your function
//(in this case type: void)
const conditionallyThrowError = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
};
