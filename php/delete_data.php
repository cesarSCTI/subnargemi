<?php
include 'conexion.php';

// Recibir datos para eliminar
$Id = $_POST['Id'];

// Consulta para eliminar el registro
$sql = "DELETE FROM db_externos WHERE Id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $Id);

if ($stmt->execute()) {
    echo "Registro eliminado con éxito";
} else {
    echo "Error al eliminar el registro: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
