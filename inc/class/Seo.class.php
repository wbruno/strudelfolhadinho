<?php

class Seo
{
	private static $key_default = 'strudel, apfelstrudel, strudel folhadinho, strudel em são paulo';
	private static $desc_default = 'Faça Seu Pedido OnLine de Strudels em Diversos Sabores. Entregas na Região Metropolitana de São Paulo. Ligue (11) 96309-9227';
	
	public static function metas()
	{
		return self::pg( get_body_class() );
	}
	
	private static function pg( $pg )
	{
		switch( $pg )
		{				
			case 'class="como-e-feito"':
				$arr['desc'] = 'Preparo dos strudels. '.self::$desc_default;
				$arr['key'] = ''.self::$key_default;
				$arr['title'] = 'Como é feito? - ';
				$arr['canonical'] = 'http://strudelfolhadinho.com.br/como-e-feito.html';
				break;
				
			case 'class="como-comprar"':
				$arr['desc'] = 'Compre strudel de maçã, banana e doce de leite. '.self::$desc_default;
				$arr['key'] = 'comprar strudel maçã, '.self::$key_default;
				$arr['title'] = 'Como comprar? - ';
				$arr['canonical'] = 'http://strudelfolhadinho.com.br/como-comprar.html';
				break;
				
			case 'class="strudel-de-maca"':
				$arr['desc'] = 'Experimente o tradicional strudel de maçã. Peça OnLine seu Strudel de Maçã. Entregas na Região Metropolitana de São Paulo. Ligue (11) 96309-9227';
				$arr['key'] = 'apfel strudel, '.self::$key_default;
				$arr['title'] = 'Strudel de Maçã - ';
				$arr['canonical'] = 'http://strudelfolhadinho.com.br/strudel-de-maca.html';
				break;
				
			case 'class="strudel-de-doce-de-leite"':
				$arr['desc'] = 'Prove o delicioso strudel de doce de leite. '.self::$desc_default;
				$arr['key'] = 'strudel de doce de leite, '.self::$key_default;
				$arr['title'] = 'Strudel de Doce de Leite - ';
				$arr['canonical'] = 'http://strudelfolhadinho.com.br/strudel-de-doce-de-leite.html';
				break;
				
			case 'class="strudel-de-banana"':
				$arr['desc'] = 'O tropical strudel de banana. '.self::$desc_default;
				$arr['key'] = 'strudel de banana, '.self::$key_default;
				$arr['title'] = 'Strudel de Banana - ';
				$arr['canonical'] = 'http://strudelfolhadinho.com.br/strudel-de-banana.html';
				break;
				
			case 'class="carta-de-strudel"':
				$arr['desc'] = 'Carta com os sabores dos Strudels. '.self::$desc_default;
				$arr['key'] = 'diversos sabores de strudel, '.self::$key_default;
				$arr['title'] = 'Carta de Strudel - ';
				$arr['canonical'] = 'http://strudelfolhadinho.com.br/carta-de-strudel.html';
				break;
				
			case 'class="home"':
				$arr['desc'] = 'Strudel de Maçã em São Paulo. '.self::$desc_default;
				$arr['key'] = 'apfel strudel, '.self::$key_default;
				$arr['title'] = '';
				$arr['canonical'] = 'http://strudelfolhadinho.com.br/';
				break;

			default:
				$arr['desc'] = self::$desc_default;
				$arr['key'] = self::$key_default;
				$arr['title'] = '';
				$arr['canonical'] = 'http://strudelfolhadinho.com.br/';
				break;
		}
	
		return $arr;
	}
}//Seo