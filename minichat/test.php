		<?php
			mysql_connect("localhost","root","");
			mysql_select_db("chat_db");
			
			$ret="";
			$a = $_POST['id'];
			$b = $_POST['pass'];
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
				if($row['password'] == $b)
					{
						$check = 1;
					}
			}
			if($check == 1)
			{
				mysql_query("INSERT INTO connecte (username,ip) VALUES('$a','$ip')");
				echo($check);
				echo("\n");
				echo($ip);

			}
			else
			{
				echo("connard");
			}
			mysql_close();
		?>