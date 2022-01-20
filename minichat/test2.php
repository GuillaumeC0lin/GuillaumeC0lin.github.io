		<!-- inscription -->
		<?php
			mysql_connect("localhost","root","");
			mysql_select_db("chat_db");
			
			$ret="";
			$a = $_POST['id'];
			$b = $_POST['pass'];
			$c = $_POST['pass2'];
			$ip = $_POST['ip'];

			$check = 0;
			
			$req = "SELECT * FROM `user` WHERE `identifiant` = '$a'";
			$ret = mysql_query($req);

			if (!$ret) {
    			$message  = 'Requête invalide : ' . mysql_error() . "\n";
    			$message .= 'Requête complète : ' . $req;
    			die($message);
			}
			
			while ($row = mysql_fetch_assoc($ret))
			{
				$check = 1;
			}
			if($check == 0)
			{
				mysql_query("INSERT INTO user (identifiant,password) VALUES('$a','$b')");
				echo($check);
				echo("<br>");
				echo($ip);

			}
			else
			{
				echo("identifiant deja utilisé");
			}
			mysql_close();
		?>