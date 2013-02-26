<?php
define('BASE_PATH', realpath(dirname(__FILE__)).'/');

error_reporting( E_ALL | E_STRICT );
ini_set('display_errors', TRUE);


setlocale(LC_ALL, "pt_BR", "pt_BR.iso-8859-1", "pt_BR.utf-8", "portuguese");
date_default_timezone_set('America/Sao_Paulo');
        
set_include_path(implode(PATH_SEPARATOR, array(
        BASE_PATH.'class',
        get_include_path()
)));

/**
 * Faz require do arquivo de configurações
 * edite ele para mudar conexão com o banco de dados
 */
if( !file_exists(BASE_PATH.'config.inc.php') ){
        exit('Erro config.php nao encontrado');
} else {
        require BASE_PATH.'config.inc.php';
}


/**
 * Faz include do arquivo da classe no momento em que esta for instanciada
 * @param $class string = classe que foi instanciada
 */
function __autoload( $class ){
	if( is_file( BASE_PATH.'class/'.$class.'.class.php' ) )
		include $class.'.class.php';
	else
		echo "Não encontrei a classe <strong>{$class}</strong>";
}
/**
 * Verifica se foi enviada uma requisição POST ao servidor
 */
function isPost(){
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		return TRUE;
	}
}
/**
 * Verfica o se existe valor 
 * @param $key Chave do array super global
 */
function getServer( $key ){
	return isset($_SERVER[$key]) ? $_SERVER[$key] : '';
}
/**
 * Verfica o se existe valor 
 * @param $key Chave do array super global
 */
function getSession( $key ){
	return isset($_SESSION[$key]) ? $_SESSION[$key] : '';
}
/**
 * recebe um campo no formato: ?subcat=2/outra-marca
 * vindo da URL, e devolve a id
 */
function getId( $campo, $type='int' ){
	$c = explode( '/', $campo );
	return ($type=='string') ? (string)$c[0] : (int)$c[0];
}
function dateGet( $str ){
	return preg_replace( '/[^0-9-]/', '', $str);
}
/**
 * Verfica o se existe valor 
 * @param $campo var, valor na URL
 */
function getGet( $campo ){
	return isset($_GET[$campo]) ? filter( $_GET[$campo] ) : '';
}
/**
 * Verfica o se existe valor 
 * @param $campo var, name do input a ser verificado
 */
function getPost( $campo ){
	return isset($_POST[$campo]) ? filter( $_POST[$campo] ) : '';
}
/**
 * Recebe validando um array POST
 */
function postArray( $campo ){
	return isset( $_POST[ $campo ] ) ? $_POST[ $campo ] : null;
}
/**
 * Evita SQL Injection
 * @param $var var, variável a ser 'limpa'
 * @return $str string
 */
function filter( $var ){
	if( !get_magic_quotes_gpc() )
		//$str = mysql_real_escape_string( $var );
		$str = addslashes( $var );
	else
		$str = $var;
	$str = str_replace( '#', '\#', $str );
	return $str;
}
/**
 * @param $string, valor que será limpo para URL
 */
function fazLink( $string ){
	$string = trim($string);
	
	$string = preg_replace("/[áàâãª]/i","a",$string);
	$string = preg_replace("/[éèê]/i","e",$string);
	$string = preg_replace("/[íìî]/i","i",$string);
	$string = preg_replace("/[óòôõº]/i","o",$string);
	$string = preg_replace("/[úù]/i","u",$string);
	$string = preg_replace("/[ç]/i","c",$string);
	$string = preg_replace("/[\/,()]/i","",$string);
	
	$string = str_replace("  ","-",$string);
	$string = strtolower($string);

	$string = preg_replace('/[^a-z0-9\.]/i', '-', $string);
	
	return $string;
}
function getLink( $id, $label, $link, $desc=null )
{
	$desc = ( $desc ) ? $desc : $label;
	return '<a href="?'.$link.'='.$id.'/'.fazLink( $label ).'" title="'.$label.'">'.$desc.'</a>';
}
function atual( $menu )
{
	echo getGet('pg')==fazLink($menu) || ( !getGet('pg')&& $menu=='Home')? ' class="atual"' : '';
}
/**
 * testa se o usuário se identificou no login
 * @return bollean 
 */
function verifica( $level=true ){
	if ( getSession('logado') != 'ok' || !$level )
	{
		$_SESSION['logado'] = 'Usuário não identificado.';
		return false;
	}
	else
		return true;
}
/**
 * @param $email, string a ser validada como email
 * verifica se é um email válido através da ER
 * @return boolean
 */
function validaEmail( $email ){
	return ( preg_match ("/^[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*\\.[A-Za-z0-9]{2,4}$/", $email) ) ? true : false;
}
/**
 * para ser usada em <select>
 * @param $set, dado do banco de dados
 * @param $c, value do campo, para ser comparado com $set
 * @return string, ' selected="selected" ' | ''
 */
function selected( $set, $c = 's' ){
	return $set == $c ? ' selected="selected"' : '';
}
/**
 * para ser usada em inputs checkbox, radio
 * @param $set, dado do banco de dados
 * @param $c, value do campo, para ser comparado com $set
 * @return string, ' checked="checked"' | ''
 */
function checked( $set, $c = 's' ){
	return $set == $c ? ' checked="checked"' : '';
}
/**
 * recebe uma data no formato brasileiro e retorna no formato do banco
 * @param string, date dd/mm/YYYY
 * @return string, data YYYY-mm-dd
 */
function dateIng( $data ){
	if( !is_null( $data ) ){
		$date = explode( '/', $data );
		return implode( '-', array_reverse($date) );
	}
	else
		return NULL;
}
/**
 * recebe uma data no formato americano e retorna no formato brasileiro
 * @param string, data YYYY-mm-dd
 * @return string, date dd/mm/YYYY
 */
function dateBR( $data ){
	if( !is_null( $data ) ){
		$date = explode( '-', $data );
		return implode( '/', array_reverse($date) );
	}
	else
		return NULL;
}
/**
 * função tentou_invadir()
 * Grava um log chamando a class Logger, com o possíveis erros de usuário
 * @return string, honey pot
 */
function tentou_invadir( $string, $title='Pote de Mel<span></span>' ){
	$log = new Logger( $string, 
		$_SERVER['QUERY_STRING'].' - '.
		$_SERVER['HTTP_USER_AGENT'].' - '.
		$_SERVER['REMOTE_ADDR'] );
	$log->createLog('log');
	return '<h1 id="pote-mel" title="Pote de Mel">'.$title.'</h1>';
}
/**
 * Cria o diretório especificado recursivamente
 * @param string $dir
 */
function cria_dir( $dir ){
	if( !is_dir( $dir ) )
		if( mkdir( $dir, 0777, true) )
			return '<strong class="system green" title="'.$dir.'">Diretório criado!</strong>';
		else
			return '<strong class="system red" title="'.$dir.'">Impossível criar diretório, confira as permissões!</strong>';			
}
/**
 * Deleta o arquivo, se ele existir
 * @param $file, string contendo o caminho e o nome do arquivo à ser excluido
 * @return boolean, sucesso ou falha no delete
 */
function del_file($str){
	if(is_file($str)){
		return @unlink($str);
	}
	elseif(is_dir($str)){
		$scan = glob(rtrim($str,'/').'/*');
		foreach($scan as $index=>$path){
			del_file($path);
		}
		return @rmdir($str);
	}
}
/**
 * Move o arquivo temporario de upload, para a pasta com o nome já indicado
 * @param $file, array $_FILES enviado por um formulário
 * @param @final, string contendo o caminho de destino + nome final do arquivo a ser movido
 * @return boolean, caso sucesso 
 */
function move_file( $file, $final ){
	return move_uploaded_file( $file['tmp_name'], $final ) ? $final : false;
}
/** 
 * Faz uma cópia da imagem, renoeando, e fazendo redimensionamento.
 * @param $file, arquivo original
 * @param $final, nome final do arquivo
 * @param $dimensao, array contendo largura e altura 
 */
function save_img_resize( $file, $final, $dimensao ){
	try {
		list( $max_w, $max_h ) = $dimensao;
		
		$ImgHandler = new ImgHandler();
		$ImgHandler->setMaxImgSize( $max_w, $max_h );		
		
		return $ImgHandler->saveImg( $file, $final );
	} catch ( Exception $e ){
		echo $e->getMessage();
		$log = new Logger( 'GD', $e->getMessage() );
		$log->createLog( $file );
	}
}

/*
 * Procura se existe tal arquivo, sem conhecer a extensão dele
 * @param $file, arquivo com caminho completo até ele
 * @return string $ext, falso ou a extensão do arquivo, caso exista
 */
function isfile( $file ){
	$exts = Array('.jpg','.png','.gif','.jpeg');
	foreach( $exts as $ext )
		if( is_file( $file.$ext ) )
			return $ext;
	return false;
}
/**
 * Retorna a extensão do arquivo, pegando a ultima posição do array, explodido pelo ponto
 * @return string, .ext
 */
function getExt( $file )
{
	$fim = explode( '.', $file );
	return strtolower( '.'.end( $fim ) );
}
function remove_acento( $palavra )
{
	$str = strtr($palavra, "áàãâéêíóôõúüçÁÀÃÂÉÊÍÓÔÕÚÜÇ ", "aaaaeeiooouucAAAAEEIOOOUUC_");
	return preg_replace('/[^A-Za-z0-9\.]/', '', $str );
}
function get_img( $dir, $file )
{
	return is_file( $dir.$file ) ? $dir.$file : $dir.'default.jpg';
}
function v_reais( $float )
{
	return number_format( $float, 2, ',','.' );
}
/**
 * @return boolean, true caso a URI seja a home do site
 */
function is_home(){
	return stripos( $_SERVER['REQUEST_URI'], 'index.html' ) 
		|| !stripos( $_SERVER['REQUEST_URI'], '.html' );
}
/**
 * @return string, class=""(html) de acordo com o URI atual
 */
function get_body_class(){
	if( is_home() ) return 'class="home"';
	
	$pieces = explode( '/', $_SERVER['REQUEST_URI'] );
	$class = Array();
	foreach( $pieces AS $part ){
		$class[] = str_replace( '.html', '', $part );
	}
	
	return 'class="'.trim(implode( ' ', $class )).'"';	
}
/**
 * @see get_body_class()
 */
function body_class(){ echo get_body_class(); }