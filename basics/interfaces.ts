//This interface enforces that type: Vehicle has these properties
interface Reportable {
	name: string;
	year: Date; //<- not limited to primitive types
	summary(): string; //<- function named 'summary' that returns type: string
}

const oldCivic = {
	name: "Civic",
	year: new Date(),
	used: true,
	color: "blue", //<- add new property that interface doesn't define
	summary(): string {
		return `Item name: ${this.name}`;
	},
};

const water = {
	name: "Fiji",
	year: new Date("2019-06-11"),
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar `;
	},
};

//enforce that 'item' matches 'Reportable' interface
const printReport = (item: Reportable): void => {
	console.log(`Name: ${item.name}`);
	console.log(`Year: ${item.year}`);
	console.log(item.summary());
	//console.log(`Sugar: ${item.sugar}`); <- this line will throw an error because sugar is not part of the interface
	//^ we can however make sugar an optional property in the interface
};

printReport(oldCivic);
printReport(water);
