<?php

if( $_SERVER['REQUEST_METHOD']=='POST' )
{
        $to = 'rocha_bruno@hotmail.com'; //para quem vai o email

        /* Mensagem */
        $message =
        '<strong>Nome: </strong>'.$_POST['nome'].'<br>'.
        '<strong>Telefone: </strong>'.$_POST['telefone'].'<br>'.
        '<strong>E-mail: </strong>'.$_POST['email'].'<br>'.
        '<strong>CEP: </strong>'.$_POST['cep'].'<br>'.
        '<strong>Número: </strong>'.$_POST['numero'].'<br>'.
        '<strong>Detalhes: </strong>'.$_POST['detalhes'].'<br>'.
        'Fez um pedido dos strudels: '.implode( ', ', $_POST['sabor'] ).'<br /><br />';



        $headers = "MIME-Version: 1.1".PHP_EOL;
        $headers .= "Content-type: text/html; charset=iso-8859-1".PHP_EOL;
        $headers .= "From: eu@wbruno.com.br".PHP_EOL; // remetente
        $headers .= "Return-Path: eu@wbruno.com.br".PHP_EOL; // return-path

        mail($to, '[PEDIDO] - Strudel via site Folhadinho', $message, $headers);

        echo $message;
        echo 'Enviado com sucesso!';
}


