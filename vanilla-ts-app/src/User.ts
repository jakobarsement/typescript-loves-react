import faker from "faker";
import { Mappable } from "./CustomMap";

//avoid using 'export default' (ts convention)
//"implements Interface" is optional incase the class consuming the
//User is not enforcing Interface. This also helps readability
export class User implements Mappable {
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string = "red";

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
	markerContent(): string {
		return `User Name: ${this.name}`;
	}
}
