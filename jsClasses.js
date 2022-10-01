class Car{
	constructor (name,year)
	{
		this.name = name;
		this.year = year;
	}
}
const myCar =  new Car("Ford",2014);
document.getElementById("js-c").innerHTML = 
myCar.name + " " + myCar.year;