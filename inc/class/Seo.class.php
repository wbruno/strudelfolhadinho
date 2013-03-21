<?php

class Seo
{
	private static $title_default = 'Strudel Folhadinho - SP';
	private static $key_default = 'strudel, apfelstrudel, strudel folhadinho, strudel em são paulo';
	private static $desc_default = 'Faça Seu Pedido OnLine de Strudel em Diversos Sabores. Entregas na Região Metropolitana de São Paulo. Ligue (11) 96309-9227';
	
	private static $url = 'http://strudelfolhadinho.com.br';

	public static function metas()
	{
		return self::pg( get_body_class() );
	}
	public static function getURL(){
		return self::$url;
	}
	
	private static function pg( $pg )
	{
		switch( $pg )
		{
			case 'class="como-e-feito"':
				$arr['desc'] = 'Preparo dos strudels. '.self::$desc_default;
				$arr['key'] = ''.self::$key_default;
				$arr['title'] = 'Como é feito o Strudel de Maça ?';
				$arr['canonical'] = self::$url . '/como-e-feito.html';
				break;
				
			case 'class="como-comprar"':
				$arr['desc'] = 'Compre strudel de maçã, banana e doce de leite. '.self::$desc_default;
				$arr['key'] = 'comprar strudel maçã, '.self::$key_default;
				$arr['title'] = 'Como comprar Strudel de Maça em São Paulo ?';
				$arr['canonical'] = self::$url . '/como-comprar.html';
				break;
				
			case 'class="strudel-de-maca"':
				$arr['desc'] = 'Experimente o tradicional strudel de maçã. Peça OnLine seu Strudel de Maçã. Entregas na Região Metropolitana de São Paulo. Ligue (11) 96309-9227';
				$arr['key'] = 'apfel strudel, '.self::$key_default;
				$arr['title'] = 'Strudel de Maça em São Paulo';
				$arr['canonical'] = self::$url . '/strudel-de-maca.html';
				break;
				
			case 'class="strudel-de-doce-de-leite"':
				$arr['desc'] = 'Prove o delicioso strudel de doce de leite. '.self::$desc_default;
				$arr['key'] = 'strudel de doce de leite, '.self::$key_default;
				$arr['title'] = 'Strudel de Doce de Leite | '.self::$title_default;
				$arr['canonical'] = self::$url . '/strudel-de-doce-de-leite.html';
				break;
				
			case 'class="strudel-de-banana"':
				$arr['desc'] = 'O tropical strudel de banana. '.self::$desc_default;
				$arr['key'] = 'strudel de banana, '.self::$key_default;
				$arr['title'] = 'Strudel de Banana | '.self::$title_default;
				$arr['canonical'] = self::$url . '/strudel-de-banana.html';
				break;
				
			case 'class="strudel-de-frango-com-catupiry"':
				$arr['desc'] = 'Strudel de Frango com Catupiry '.self::$desc_default;
				$arr['key'] = 'strudel de frango com catupiry, '.self::$key_default;
				$arr['title'] = 'Strudel de Frango com Catupiry | '.self::$title_default;
				$arr['canonical'] = self::$url . '/strudel-de-frango-com-catupiry.html';
				break;
				
			case 'class="strudel-de-palmito"':
				$arr['desc'] = 'Strudel de Palmito '.self::$desc_default;
				$arr['key'] = 'strudel de palmito, '.self::$key_default;
				$arr['title'] = 'Strudel de Palmito | '.self::$title_default;
				$arr['canonical'] = self::$url . '/strudel-de-palmito.html';
				break;
				
			case 'class="cardapio"':
				$arr['desc'] = 'Cardápio dos Strudels. '.self::$desc_default;
				$arr['key'] = 'diversos sabores de strudel, '.self::$key_default;
				$arr['title'] = 'Cardápio dos Strudels | '.self::$title_default;
				$arr['canonical'] = self::$url . '/cardapio.html';
				break;
				
			case 'class="home"':
				$arr['desc'] = 'Strudel de Maçã em São Paulo. '.self::$desc_default;
				$arr['key'] = 'apfel strudel, strudel de maça, '.self::$key_default;
				$arr['title'] = 'Strudel de Maçã | '.self::$title_default;
				$arr['canonical'] = self::$url . '/';
				break;

			default:
				$arr['desc'] = self::$desc_default;
				$arr['key'] = self::$key_default;
				$arr['title'] = 'Strudel de Maçã | '.self::$title_default;
				$arr['canonical'] = self::$url . '/';
				break;
		}
	
		return $arr;
	}
}//Seo