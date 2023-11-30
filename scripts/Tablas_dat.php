
<!DOCTYPE html>
<html>
<head>
    <title>Tabla arrays</title>
    <style type="text/css">
  body {
    color: purple;
    /* background-color: #d8da3d } */
  }
    table thead {
  color: #ffffff;
  background-color:#8080c0 ;
}
  </style>
</head>


<body>
    <h1 align="center">LISTADO DE USUARIOS</h1>
    <table width="60%" border="1px" align="center">
<thead>
<!-- Define con html  los enunciados de la tabla -->
    <tr align="center">
        <td>Nombre</td>
        <td>Dirección</td>
        <td>Teléfono</td>
        <td>Fecha de Cumpleaños</td>
        <td>Color Favorito</td>
        <td>Significado</td>
    </tr>
</thead>
<tbody>
    <tr>

    
    <?php 

    /*
   nombre: Breyner Ocampo Cárdenas
   programa de formación: Desarrollo web con PHP
   Código del Programa de Formación: 21730185
   nombre archivo: evidencia2_BreynerOC.php
*/

//  Se define un array multidimensional con la información a monstrar
    $datos = array(
        array('Nombre'=>'Juan Pérez',
                'Direccion'=>'Cra. 45#45-56',
                'Telefono'=>'3456789',
                'FechaCumpleaños'=>'23/12/1997',
                'ColorFavorito'=>'Amarillo')
        ,array('Nombre'=>'Pablo Manrique',
                'Direccion'=>'Cra. 23#12-19 Sur',
                'Telefono'=>'3214567',
                'FechaCumpleaños'=>'12/10/1980',
                'ColorFavorito'=>'Verde'
                ) ,
        array('Nombre'=>'Nancy Peña',
                'Direccion'=>'Av. 34#16-12',
                'Telefono'=>'2135423',
                'FechaCumpleaños'=>'07/06/2000',
                'ColorFavorito'=>'Morado'
                ) ,
        array('Nombre'=>'Breyner Ocampo Cárdenas',
                'Direccion'=>'Av. 34#16-11',
                'Telefono'=>'2196663',
                'FechaCumpleaños'=>'23/10/1995',
                'ColorFavorito'=>'Gris'
                )
);
// Se define un array tipo clave => valor  con el significado de cada color  
$Significado = array('Verde'=>'Divertido',
        'Gris'=>'Serio o triste',
        'Amarillo'=>'Riqueza y Alegria');
//  Variable que define el mensaje cuando no se encuentre el significado del color
$Noesta = 'No se encuentra significado';

//  Ciclo foreach que lista la información por persona y clave en una tabla 
foreach($datos as $dat)
{
echo "<tr>";
echo "<td>".$dat['Nombre'];
echo "<td>".$dat['Direccion'];
echo "<td>".$dat['Telefono'];
echo "<td>".$dat['FechaCumpleaños'];
echo "<td>".$dat['ColorFavorito'];
//  Condicion que verifica si el color se encuentra en el array significado para definir el valor en la tabla
if (array_key_exists($dat['ColorFavorito'], $Significado)){
    echo "<td>".$Significado[$dat['ColorFavorito']];
}
else{
    echo "<td>".$Noesta;
}

echo "</tr>";

}
?>
</tr>
</tbody>
    </table>

</body>
</html>


