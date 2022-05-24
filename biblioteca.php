<?php 

//Declaración de funciones

function operaciones($num1,$num2,$opcion='S') {
    if ($opcion =="S")
    {
        return $num1+$num2;
    }
    elseif ($opcion =="R")
    {
        return $num1-$num2;
    }
    elseif ($opcion =="M")
    {
        return $num1*$num2;
    }
    elseif ($opcion =="D")
    {
     
        if($num1==0){
            return 'Error división por cero';
        }
        elseif($num2==0){
            return 'Error división por cero';
        }
        else{
            
            return $num1/$num2;
        
        }
        
       
    }
       
       
}


//Fin de declaración de funciones

// mostrarTexto("Me gusta mucho la web de aprenderaprogramar.com");

?>