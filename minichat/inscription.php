<!DOCTYPE html> <!--page de connexion-->
<html>
	<head>
		<title>connexion ...</title>
		<style type="text/css">
			.non
			{
				display :none;
			}
		</style>
	</head>
	<body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
    </script>
		<script type="text/javascript">
			var ip = false;
			$.getJSON("https://api.ipify.org?format=json", function(data) {
         
	        ip = (data.ip);
			document.getElementById("ip").value=ip;
			})
			function faux()
			{
				if(document.getElementById("p1").value == document.getElementById("p2").value)
				document.getElementById("non").classList.add("non");
				else{
				document.getElementById("non").classList.remove("non");
			}
		}
		</script>
		<form action="test2.php" method="post">
		<input type="text" name="ip" id ="ip" style="display: none;" >
			<table>
				<tr>
					<td>
						<p>username:</p>
					</td>
					<td>
						<input type="text" name="id">
					</td>
				</tr>
				<tr>
					<td>
						<p>password:</p>
					</td>
					<td>
						<input type="password" name="pass" id = "p1" onblur="faux()">
					</td>
				</tr>
				<tr>
					<td>
						<p>confirm password:</p>
					</td>
					<td>
						<input type="password" name="pass2" id = "p2" onblur="faux()">
						<p id="non" style="color: red;" class="non"> les deux mots de passe sont differents </p>
					</td>
				</tr>
				<tr>
					<td>
						<p><input type="submit" name="confirmer"></p>
					</td>
					<td>
						<input type="reset" name="annuler">
					</td>
				</tr>
			</table>
		</form>
	</body>
</html>