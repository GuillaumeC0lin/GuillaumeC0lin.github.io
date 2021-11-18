var i = 0;
function check()
{
	var a = document.getElementById('login').value;
	var b = document.getElementById('pass').value;

	if(i<3)
	{
		if(a == "Admin_GSB" && b =="admin")
		{
			document.getElementById("a1").className =("show");
			document.getElementById("a2").className =("show");
			document.getElementById("a3").className =("show");
                        document.getElementById("a4").className =("show");
		}
		else
		{
			i=i+1;
		}
	}
	else
	{
		alert("nombre d'essais depassé! veuillez recharger la page");
	}
}
function exo_js_1()
{
	var i = 0;
	var tab = new Array();
	var j = prompt("donner la taille du tableau");
	var res = "|";
	while(i<j)
	{
		tab[i] = prompt("donnez une valeur");
		i++;
	}
	for(var a=0;a<j;a++)
	{
		res = res +tab[a]+"|"
		document.getElementById("out").innerHTML=(res);
	}

}
function exo_js_2()
{
	var a = 0;
	var i = 0;
	var j = prompt("donner la valeur de fin");
	while(i<=j)
	{
		a = a+i;
		i++;
	}
		document.getElementById("out").innerHTML=(a);

}
