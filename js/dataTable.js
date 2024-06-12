$(document).ready(function() {
    $('#example').DataTable({
        "ajax": {
            "url": "./php/db.php",
            "type": "GET",
            "dataSrc": "data"
        },
        "columns": [
            {"data": "Numero_CM_CNRG" },
            {"data": "Macrored_subnargemi"},
            {"data": "Tipo_microorganismo"},
            {"data": "Genero"},
            {"data": "Especie"},
            {"data": "Nombre_depositante"},
            {"data": "Fuente_aislamiento"},
            {"data": "referencia_asociada"},
            {"data": "caracteristicas_funcionales"}
        ],
        "responsive": {
        "details": "false"
    }
    });
});