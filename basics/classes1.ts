class Vehicle {
	//functions and variables within classes are "public" by default
	//public - can be called anywhere, anytime
	//private - can only be called by other functions in this class
	//protected - can be called by other functions in this class, or child classes
	drive(): void {
		console.log("bada bing");
	}
}
class Car extends Vehicle {} //Car is a child class of Vehicle

const vehicle = new Vehicle(); //vehicle is an instance of the Vehicle class
vehicle.drive();

const car = new Car(); //since car extends vehicle, car can drive() too
car.drive();
