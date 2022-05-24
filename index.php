
<!DOCTYPE html>
<html>
<head>
    <title>Funciones</title>
    <style type="text/css">
   
  body {
    color: purple;
    text-align: center;
    margin: auto;
    top: 100%;
    margin-top: 200px;
    /* background-color: #d8da3d } */
  }




  </style>
</head>


<body>
  <div class="contenedor">

  <div class="hijo">
  <h1 >Operaciones</h1>




    
<?php 

/*
nombre: Breyner Ocampo Cárdenas
programa de formación:  Uso de funciones.
Código del Programa de Formación: 220501007
nombre archivo: evidencia3_BreynerOC.php
*/



?>


<div>

<form style=" width: 100%;

margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;">

<!--  Se define la entrada de las variables num1, cnum2 y opcion con name como identificador -->
<!--  Se crea un menú -->
<span> Número 1 <input type="text" id="campo1" name="campo1" placeholders="Inserta un dato"/> </span>


<span> Número 2 <input type="text" id="campo2" name="campo2" placeholders="Inserta un dato"/> </span>

<section>
<h2>Elija una operación</h2>
<p>
  <label for="card">
    <span>Operación:</span>
  </label>
  <select id="card" name="usercard">
    <option value="S">S</option>
    <option value="R">R</option>
    <option value="M">M</option>
    <option value="D">D</option>
  </select>
</p>
<p>

<p>

</section>
<input type="submit" value="Enviar  "/>


</form>


<?php
# se incluye la libreria 
include('biblioteca.php');

?>

<?php
# Se verifica si esta definidas las variables
if(isset($_GET["campo1"],$_GET["campo2"],$_GET["usercard"])): 
{

# Se toman los valores números
$num1=  $_GET["campo1"];
$num2=  $_GET["campo2"];
$opt=  $_GET["usercard"];

# Se invoca la función operación con los parametros de entrada definidos
echo "<h1>Resultado: ",operaciones($num1,$num2,$opt),"</h1>";

}
endif;


?>



<?php

?>
  </div>
 

  </div>
  


</body>
</html>


