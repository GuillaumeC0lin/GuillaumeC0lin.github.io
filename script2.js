function check()
{
	var a = document.getElementById('login').value;
	var b = document.getElementById('pass').value;

	if(a == "Admin_GSB" && b =="admin")
	{
		document.getElementById("a1").className =("show");
		document.getElementById("a2").className =("show");
		document.getElementById("a3").className =("show");

	}
}