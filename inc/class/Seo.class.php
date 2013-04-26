<?php

class Seo
{
	private static $title_default = 'Strudel Folhadinho - SP';
	private static $key_default = '';
	private static $desc_default = 'Entregas na Região Metropolitana de São Paulo. Ligue (11) 96309-9227';

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
		$arr['key'] = self::$key_default;
		switch( $pg )
		{
			case 'class="como-e-feito"':
				$arr['desc'] = 'Preparo do original strudel de maçã. Peça online seu Strudel de Maçã, e outros sabores. '.self::$desc_default;
				$arr['title'] = 'Como é feito o Strudel de Maçã ?';
				$arr['canonical'] = self::$url . '/como-e-feito.html';
				break;

			case 'class="onde-comprar"':
				$arr['desc'] = 'Saiba onde comprar strudel de maçã em são paulo. '.self::$desc_default;
				$arr['title'] = 'Onde comprar Strudel de Maça em São Paulo ?';
				$arr['canonical'] = self::$url . '/onde-comprar.html';
				break;

			case 'class="strudel-de-maca"':
				$arr['desc'] = 'Compre agora o tradicional strudel de maçã. Peça OnLine seu Strudel de Maçã. '.self::$desc_default;
				$arr['title'] = 'Strudel de Maçã em São Paulo';
				$arr['canonical'] = self::$url . '/strudel-de-maca.html';
				break;

			case 'class="strudel-de-doce-de-leite"':
				$arr['desc'] = 'Prove o delicioso strudel de doce de leite. '.self::$desc_default;
				$arr['title'] = 'Strudel de Doce de Leite | '.self::$title_default;
				$arr['canonical'] = self::$url . '/strudel-de-doce-de-leite.html';
				break;

			case 'class="strudel-de-banana"':
				$arr['desc'] = 'O tropical strudel de banana. '.self::$desc_default;
				$arr['title'] = 'Strudel de Banana | '.self::$title_default;
				$arr['canonical'] = self::$url . '/strudel-de-banana.html';
				break;

			case 'class="strudel-de-frango-com-catupiry"':
				$arr['desc'] = 'Strudel de Frango com Catupiry '.self::$desc_default;
				$arr['title'] = 'Strudel de Frango com Catupiry | '.self::$title_default;
				$arr['canonical'] = self::$url . '/strudel-de-frango-com-catupiry.html';
				break;

			case 'class="strudel-de-palmito"':
				$arr['desc'] = 'Strudel de Palmito '.self::$desc_default;
				$arr['title'] = 'Strudel de Palmito | '.self::$title_default;
				$arr['canonical'] = self::$url . '/strudel-de-palmito.html';
				break;

			case 'class="strudel-de-bacalhau"':
				$arr['desc'] = 'Strudel de Bacalhau '.self::$desc_default;
				$arr['title'] = 'Strudel de Bacalhau | '.self::$title_default;
				$arr['canonical'] = self::$url . '/strudel-de-bacalhau.html';
				break;

			case 'class="apfelstrudel"':
				$arr['desc'] = 'Apfelstrudel, o original strudel de maçã. Receita tradicional hungara do apfelstrudel, conhecida nos países da Europa Central.';
				$arr['title'] = 'Apfelstrudel | '.self::$title_default;
				$arr['canonical'] = self::$url . '/apfelstrudel.html';
				break;

			case 'class="cardapio"':
				$arr['desc'] = 'Cardápio dos Strudels. '.self::$desc_default;
				$arr['title'] = 'Preço do Strudel | '.self::$title_default;
				$arr['canonical'] = self::$url . '/cardapio.html';
				break;

			case 'class="home"':
				$arr['desc'] = 'Compre Strudel de Maçã em São Paulo. '.self::$desc_default;
				$arr['title'] = 'Strudel de Maçã | '.self::$title_default;
				$arr['canonical'] = self::$url . '/';
				break;

			default:
				$arr['desc'] = self::$desc_default;
				$arr['title'] = 'Strudel de Maçã | '.self::$title_default;
				$arr['canonical'] = self::$url . '/';
				break;
		}

		return $arr;
	}
}//Seo