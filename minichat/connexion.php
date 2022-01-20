<!DOCTYPE html> <!--page de connexion-->
<html>
	<head>
		<title>connexion ...</title>
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
		</script>

		<form action="test.php" method="post">
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
						<input type="password" name="pass">
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