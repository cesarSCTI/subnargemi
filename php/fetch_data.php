<?php
include 'conexion.php';

// Consulta para obtener datos
$sql = "SELECT Id, Numero_CM_CNRG, Macrored_subnargemi, Tipo_microorganismo, Genero, Especie, Nombre_depositante, Fuente_aislamiento, referencia_asociada, caracteristicas_funcionales FROM db_externos";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$conn->close();

// Convertir los datos a formato JSON
echo json_encode(array("data" => $data));
?>
