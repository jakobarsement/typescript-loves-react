class Building {
	// color: string;   BOILERPLATE

	//add identifier (public, private, protected) infront of constructor parameter to eliminate some boilerplate
	constructor(public color: string) {
		// this.color = color;   BOILERPLATE
	}

	moveElevator(): void {} //public
	protected lock(): void {
		//^ protected
		console.log("locking building");
	}
}

const building = new Building("orange");
console.log(building.color);

class Embassy extends Building {
	constructor(public windows: number, color: string) {
		super(color); //this super() function references the parent class (super class) and ensures it's
		//parameters are part of the child contruction
	}
	private cutPower(): void {} //private

	beginCuttingPower(): void {
		//^ public
		this.cutPower(); //can call private function because they share the same parent class
	}
}

const canadianEmbassy = new Embassy(12, "red");
canadianEmbassy.moveElevator();
canadianEmbassy.beginCuttingPower(); //<- this instance can only call cutPower() by using a public function in the Embassy class
//^ it cannot call cutPower() directly
