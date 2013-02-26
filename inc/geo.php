<?php
header('Content-Type: application/json; charset=utf-8', true);

$coordenadas = $_GET['address'];
$url = 'http://maps.google.com/maps/api/geocode/json?address='.$coordenadas.'&sensor=true';
$content = curl_file( $url );


$json = json_decode( $content );


if( isset($json->results[0]) )
{
	$address =  $json->results[0]->formatted_address;


	preg_match('/(?P<address>[^,]+)(.*)(?P<cep>[0-9-]{9})/', $address, $match);

	$arr['0'] = $match['address'];
	$arr['1'] = $match['cep'];


	echo json_encode( $arr ); exit();
}


function curl_file($url, $timeout=0){
	$ch = curl_init();
	curl_setopt( $ch, CURLOPT_URL, $url );
	//curl_setopt ($ch, CURLOPT_HEADER, 1);
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
	curl_setopt( $ch, CURLOPT_CONNECTTIMEOUT, $timeout );
	$content = curl_exec( $ch );
	curl_close( $ch );

	return $content;
}