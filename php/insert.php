<?php
include 'conexion.php';

// Recibir datos del formulario
$Numero_CM_CNRG = $_POST['Numero_CM_CNRG'];
$Macrored_subnargemi = $_POST['Macrored_subnargemi'];
$Tipo_microorganismo = $_POST['Tipo_microorganismo'];
$Genero = $_POST['Genero'];
$Especie = $_POST['Especie'];
$Nombre_depositante = $_POST['Nombre_depositante'];
$Fuente_aislamiento = $_POST['Fuente_aislamiento'];
$referencia_asociada = $_POST['Referencia_asociada'];
$caracteristicas_funcionales = $_POST['Caracteristicas_funcionales'];

// Preparar y ejecutar la consulta SQL para insertar datos
$sql = "INSERT INTO db_externos (Numero_CM_CNRG, Macrored_subnargemi, Tipo_microorganismo, Genero, Especie, Nombre_depositante, Fuente_aislamiento, referencia_asociada, caracteristicas_funcionales) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("sssssssss", $Numero_CM_CNRG, $Macrored_subnargemi, $Tipo_microorganismo, $Genero, $Especie, $Nombre_depositante, $Fuente_aislamiento, $referencia_asociada, $caracteristicas_funcionales);

    if ($stmt->execute()) {
        echo "Datos insertados exitosamente.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>

