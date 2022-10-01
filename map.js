const fruitsxx = new Map([
	["apples",500],
	["bananas",300],
	["oranges",200]
	]);


	let text = "";

	fruitsxx.forEach(
		function(value,key)

	{
		text += key+ "=" + value +"<br>"
	}

	)

	document.getElementById("map").innerHTML = text;