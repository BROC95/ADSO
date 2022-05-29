
<!DOCTYPE html>
<html>
<head>
    <title>TEATRO VENTA</title>
    <style type="text/css">
  body {
    color: purple;
    /* background-color: #d8da3d } */
  }
    table thead {
  color: #ffffff;
  background-color:#8080c0 ;
}
.h1{
  align-content: center;
  margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
#contenedor{
	width: 600px;
	margin-left: auto;
	margin-right: auto;
}
  </style>
</head>
<?php
# se incluye la libreria 
include('biblioteca.php');

?>

<body>
<?php

# Se verifica el estado de las variables entregadas por el formulario mediante el
# método POST

if (isset($_POST['enviar']))
{
  
 

# Se definen las variables de entrada
$fila =$_POST['Fila'];
$silla =$_POST['Silla'];
$opt =$_POST['Op'];
$ListaDat =$_POST['ListDat'];

if ($fila<6 && $silla<6)
{
 # Se deja las posiciones desde 0
$fila=$fila-1;
$silla=$silla-1;

# Se envia la informacion a la función que actualiza los datos
$datLi = Modifica_lista($fila,$silla,$opt,$ListaDat);

}
else{
  echo '<script language="javascript">alert("La operación no puede ser realizada");</script>';
  $datLi =array(array('L','L','L','L','L'),
  array('L','L','L','L','L'),
  array('L','L','L','L','L'),
  array('L','L','L','L','L'),
  array('L','L','L','L','L'),);
}

}
elseif (isset($_POST['borrar']) || !isset($_POST['enviar']))
 {
  # Si no existe borrar o si no se ha creado enviar 
  # Crea un array de dos dimensiones con todas las sillas Libres L 
  $datLi =array(array('L','L','L','L','L'),
  array('L','L','L','L','L'),
  array('L','L','L','L','L'),
  array('L','L','L','L','L'),
  array('L','L','L','L','L'),);
}








?>
<!-- Se crea la interface mediante tablas -->
    <h1 align="center">ESCENARIO</h1>
    <table width="60%" border="1px" align="center">
<thead>
<!-- Define con html  los enunciados de la tabla -->
    <tr align="center">
        <td>F\S</td>
        <td>1 s</td>
        <td>2 S</td>
        <td>3 S</td>
        <td>4 S</td>
        <td>5 S</td>
    </tr>
</thead>
<tbody>
    <tr>


    <?php 



   


    /*
   nombre: Breyner Ocampo Cárdenas
   programa de formación: Desarrollo web con PHP
   Código del Programa de Formación: 21730185
   Competencia: 220501007
   nombre archivo: evidencia4_BreynerOC.php
*/
?>
</tr>
</tbody>
  

    <div style='align-items:center'>

<form method="POST" action="index.php" style=" width: 100%;

margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;">
<!--  Se imprime el estado de las sillas + -->
<?php for ($i=0;$i<5;$i++)
{
  echo "<tr>";
  echo "<td>".$i+1;
  echo "<td>".$datLi[$i][0];
  echo "<td>".$datLi[$i][1];
  echo "<td>".$datLi[$i][2];
  echo "<td>".$datLi[$i][3];
  echo "<td>".$datLi[$i][4];
  echo "<tr>";
  

}

?>
 </table>
<!--  Se entrega los valores de las sillas  -->

<div id='contenedor'>


<input type="text" name="ListDat" value="
<?php for ($i=0;$i<5;$i++)
{
  

  echo $datLi[$i][0];
  echo $datLi[$i][1];
  echo $datLi[$i][2];
  echo $datLi[$i][3];
  echo $datLi[$i][4];
}
 
?>" style = 'display:none' >
 
<!--  Se crea un menú para el teatro fila, silla y opcion -->
<span> Fila: <input type="text" id="campo1" name="Fila" placeholders="Inserta una fila"/> </span>


<span> Puesto: <input type="text" id="campo2" name="Silla" placeholders="Inserta una silla"/> </span>

<section style="justify-content: center;">
<h2>Elija Puesto</h2>
<div>
<p>Por favor selecione:</p>
  <label  for="Reserva">Reserva <input type="radio" id="Reserva" name="Op" value="R"></label> <br>
  <label  for="Comprar">Comprar <input type="radio" id="Comprar" name="Op" value="V"></label> <br>
  <label  for="Liberar">Liberar <input type="radio" id="Liberar" name="Op" value="L"></label> <br>
</div>
<p>

<p>

</section>
<label ><input type="submit" value="Enviar" name="enviar"/> <input type="submit" value="Borrar" name="borrar"/></label>



</form>

  </div>
  </div>
</body>
</html>


