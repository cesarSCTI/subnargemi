<?php
$servername = "localhost";
$username = "root"; // Tu usuario de MySQL
$password = ""; // Tu contraseña de MySQL
$dbname = "subnargemi"; // Nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

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
