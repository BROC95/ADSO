<?php



function Modifica_lista($fila,$silla,$opt,$listaA)
{
   





$Letras =  str_split($listaA);

$datLi = array();
$cont =0;
for ($i=0;$i<5;$i++)
{
    // for ($k=0;$k<1;$k++)
    // {
    $datou = array();
     for ($j=0;$j<5;$j++)
     {
        // $datou[$j]=$Letras[$j];
        $datou[$j]=$Letras[$cont];
        // print_r($Letras[$cont]);
        $cont++;
        // print_r($datou[$j],'\n');
     }
    // }

    array_push($datLi,$datou);
}


if ($datLi[$fila][$silla]=='L'){
    // echo "L Libre";
    $datLi[$fila][$silla]=$opt;
    if ($datLi[$fila][$silla]=='L'){
        $datLi[$fila][$silla]=='L';
        // echo "Ope invalida";
        echo '<script language="javascript">alert("La operación no puede ser realizada");</script>';
    }

}
elseif ($datLi[$fila][$silla]=='V'){
    // echo "V Vend";
    if ($opt != 'V')
    {
        // alert("Ya esta vendido");
        echo '<script language="javascript">alert("La operación no puede ser realizada");</script>';
    }
}

elseif ($datLi[$fila][$silla]=='R'){
    // echo "R Reser";
    $datLi[$fila][$silla]=$opt;
    if ($datLi[$fila][$silla]=='R'){
        $datLi[$fila][$silla]=='R';
        // echo "Ope invalida";
        echo '<script language="javascript">alert("La operación no puede ser realizada");</script>';
}
}





    return $datLi;
}
?>