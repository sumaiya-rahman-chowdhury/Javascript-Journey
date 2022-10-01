function myFunction()
{
	let age = document.getElementById("f_in").value;
	let v_able = (age >= 18) ? "Able To Vote":"Unable To Vote";
	document.getElementById("demo11").innerHTML=v_able;
}

let arr = [1,2,3,4];
for(let i=0;i<arr.length;i++)
{
	document.write(arr[i]+"<br>");
}
function myFunction2()
{
	const mssg = document.getElementById("p01");
	mssg.innerHTML= "";
	let x=document.getElementById("inpt-err").value;
	document.getElementById("poo1").innerHTML=x;
	try{
		if(x == "")
			throw "Is Empty";
		if(isNaN(x))
		throw "not a number";
		x = Number(x);  
		if(x > 10)
		throw "Is Too High";
		if(x < 5)
		throw "Too Low"; 	
	}
	catch(err)
	{
		mssg.innerHTML = "Input " + err;
	}
	finally{
		document.getElementById("inpt-err").value = "";
	}
}


s