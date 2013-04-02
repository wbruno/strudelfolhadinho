<?php
	include '../inc/init.inc.php';


	$mysqli = new mysqli(SERVER, USER, PASS, DB);

	$sql = "SELECT id, nome, telefone, email, cep, numero, detalhes, sabor, data, url 
			FROM pedido 
			ORDER BY data DESC";
	$query = $mysqli->query($sql);

	$trs = '';
	while($dados = $query->fetch_object()){
		$trs .= 
		'<tr>
			<td>'.$dados->id.'</td>
			<td>'.$dados->nome.'</td>
			<td>'.$dados->telefone.'</td>
			<td>'.$dados->email.'</td>
			<td>'.$dados->cep.'</td>
			<td>'.$dados->numero.'</td>
			<td>'.$dados->detalhes.'</td>
			<td>'.$dados->sabor.'</td>
			<td>'.$dados->data.'</td>
			<td>'.$dados->url.'</td>
		</tr>';
	}
?>
<table>
<thead>
	<tr>
		<th>id</th>
		<th>nome</th>
		<th>telefone</th>
		<th>email</th>
		<th>cep</th>
		<th>numero</th>
		<th>detalhes</th>
		<th>sabor</th>
		<th>data</th>
		<th>url</th>
	</tr>
</thead>
<tbody>
	<?php echo $trs; ?>
</tbody>
</table>