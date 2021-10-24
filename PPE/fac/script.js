    var maintenant=new Date();
    var jour=maintenant.getDate();
    var mois=maintenant.getMonth()+1;
    var an=maintenant.getFullYear();
    var maintenant= (jour + "/" + mois + "/" + an)

    document.write('<input type="text" readonly class="non" value="' 
     + maintenant + '" />');


    function calcligne(i){
        document.getElementById('c4-'+i).value=(document.getElementById("c2-"+i).value*document.getElementById("c3-"+i).value);
    }
    function perc(i)
    {
        let num = Number(i)
        let roundedString = num.toFixed(2);
        let rounded = Number(roundedString); 
        return(rounded/100);
    }
    function any()
    {
        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;
        for(i=1;i<=11;i++)
        {
            calcligne(i);
            a=a+Number(document.getElementById('c4-'+i).value);
        }
        b=a-Number(document.getElementById("res-2").value);
        c=b*perc(document.getElementById("res-4").value);
        d=Number(document.getElementById('res-6').value);
        document.getElementById("res-1").value = a;
        document.getElementById("res-3").value = b;
        document.getElementById("res-5").value = c;
        document.getElementById("res-7").value = c+d+b;
    }