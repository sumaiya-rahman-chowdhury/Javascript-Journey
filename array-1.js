const cars = ["Saab","Volvo","Bmw"];
cars.push("Lambo");
document.getElementById('array-1').innerHTML = cars.join("*");
var l = cars.lenght;
for(var i=0;i<4;i++)
{
	document.write(cars[i]+" ");
}
document.write("<br>");
var myF = ["A","B","C"];
var myM = ["X","Y","Z"];

var newArray = myF.concat(myM);

document.write(newArray);
document.write("<br>");
document.write("<h3>After Using For Loop</h3>");
for(var j=0;j<6;j++)
{
	document.write(newArray[j]+" ");
	document.write("<br>");

}
