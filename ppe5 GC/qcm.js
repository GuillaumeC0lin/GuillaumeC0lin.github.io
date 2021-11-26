function nobelong(a,list)
{
	for(i = 0;list[i];i++)
		if(a == list[i])
			return 1;
	return 0;
}
function check(idname,list)
{
		document.getElementById(idname).value = "correct";
	for(var i=0;list[1][i];i++)
	{
		if(list[0][list[1][i]] == false){
			document.getElementById(idname).value = "incorrect";
		}
	}
	for(var a = 0;list[a];a++)
		if(list[0][a] == true && nobelong(a,list[1]) == 0){
			document.getElementById(idname).value = "incorrect";
		}
	if(document.getElementById(idname).value == "incorrect"){
		document.getElementById(idname).className = "err";
		return 0;
	}
	else
		document.getElementById(idname).className = "caché";
		return 1;
}

function corection()
{
	var a1 =document.getElementById("q1-1").checked;
	var a2 =document.getElementById("q1-2").checked;
	var a3 =document.getElementById("q1-3").checked;
	var a4 =document.getElementById("q1-4").checked;
	let q1 = [[a1,a2,a3,a4],[2]];

	var b1 =document.getElementById("q2-1").checked;
	var b2 =document.getElementById("q2-2").checked;
	var b3 =document.getElementById("q2-3").checked;
	var b4 =document.getElementById("q2-4").checked;
	let q2 = [[b1, b2, b3,b4],[1]];

	var c1 =document.getElementById("q3-1").checked;
	var c2 =document.getElementById("q3-2").checked;
	var c3 =document.getElementById("q3-3").checked;
	let q3 = [[0,c1, c2, c3],[1]];

	var d1 =document.getElementById("q4-1").checked;
	var d2 =document.getElementById("q4-2").checked;
	var d3 =document.getElementById("q4-3").checked;
	let q4 = [[0,d1, d2, d3],[1]];

	var e1 =document.getElementById("q5-1").checked;
	var e2 =document.getElementById("q5-2").checked;
	var e3 =document.getElementById("q5-3").checked;
	var e4 =document.getElementById("q5-4").checked;
	var e5 =document.getElementById("q5-5").checked;
	let q5 = [[e1, e2, e3, e4, e5],[2]];

	var f1 =document.getElementById("q6-1").checked;
	var f2 =document.getElementById("q6-2").checked;
	var f3 =document.getElementById("q6-3").checked;
	var f4 =document.getElementById("q6-4").checked;
	let q6 = [[f1, f2, f3, f4],[1]];

	var g1 =document.getElementById("q7-1").checked;
	var g2 =document.getElementById("q7-2").checked;
	var g3 =document.getElementById("q7-3").checked;
	var g4 =document.getElementById("q7-4").checked;
	var g5 =document.getElementById("q7-5").checked;
	var g6 =document.getElementById("q7-6").checked;
	var g7 =document.getElementById("q7-7").checked;
	var g8 =document.getElementById("q7-8").checked;
	let q7 = [[g1, g2, g3, g4, g5, g6, g7, g8],[1,6]];

	var h1 =document.getElementById("q8-1").checked;
	var h2 =document.getElementById("q8-2").checked;
	var h3 =document.getElementById("q8-3").checked;
	var h4 =document.getElementById("q8-4").checked;
	let q8 = [[h1, h2, h3, h4],[1]];

	var i1 =document.getElementById("q9-1").checked;
	var i2 =document.getElementById("q9-2").checked;
	var i3 =document.getElementById("q9-3").checked;
	var i4 =document.getElementById("q9-4").checked;
	let q9 = [[i1, i2, i3, i4],[1]];

	var j1 =document.getElementById("q0-1").checked;
	var j2 =document.getElementById("q0-2").checked;
	var j3 =document.getElementById("q0-3").checked;
	var j4 =document.getElementById("q0-4").checked;
	let q0 = [[j1, j2, j3, j4],[1]];
	var some = 0;

	some += check("rep1",q1);
	some += check("rep2",q2);
	some += check("rep3",q3);
	some += check("rep4",q4);
	some += check("rep5",q5);
	some += check("rep6",q6);
	some += check("rep7",q7);
	some += check("rep8",q8);
	some += check("rep9",q9);
	some += check("rep0",q0);

	alert("votre score est : "+some + "/10")
}
function corrig()
{
	var a3 =document.getElementById("q1-3");
	var b2 =document.getElementById("q2-2");
	var c1 =document.getElementById("q3-1");
	var d1 =document.getElementById("q4-1");
	var e3 =document.getElementById("q5-3");
	var f2 =document.getElementById("q6-2");
	var g2 =document.getElementById("q7-2");
	var g7 =document.getElementById("q7-7");
	var h2 =document.getElementById("q8-2");
	var i2 =document.getElementById("q9-2");
	var j2 =document.getElementById("q0-2");
	var gchlist = [a3, b2, c1, d1, e3, f2, g2, g7, h2, i2, j2];
	var chlist = document.getElementsByClassName("q");
	
	for(var i = 0;i<chlist.length;i++)
	{
		chlist[i].checked = false;
	}
	for(var i = 0;i<gchlist.length;i++)
	{
		gchlist[i].checked = true;
		gchlist[i].closest('li').className="caché";
	}

}