<?php
$servername = "localhost";
$username = "root"; // Tu usuario de MySQL
$password = ""; // Tu contraseña de MySQL
$dbname = "subnargemi"; // Nombre de tu base de datos

header('Content-Type: application/json');

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

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
