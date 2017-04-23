class Person {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}
}

export const PersonClass = Person;

export function logName(name) {
	console.log(name)
}

export function logAge(age) {
	console.log(age);
}
