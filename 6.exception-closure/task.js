function parseCount(num) {
	if (Number.isNaN(Number.parseFloat(num)) === true) {
		throw new Error("Невалидное значение")
	}
	return num
}

function validateCount(num) {
	try {
		return parseCount(num)
	} catch (error) {
		return error
	}
}
// ------------------------------------------task2--------------------------------------  
class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует")
		}
		this.a = a
		this.b = b
		this.c = c
	}
	get perimeter() {
		return this.a + this.b + this.c
	}
	get area() {
		let p = (this.a + this.b + this.c) / 2
		return (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3)
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch (error) {
		return {
			area: function() {
				return "Ошибка! Треугольник не существует";
			},
			perimeter: function() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}