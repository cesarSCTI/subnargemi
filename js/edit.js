$(document).ready(function() {
    var table = $('#example').DataTable({
        "scrollX": true,
        "pageLength": 5,
        "fixedColumns": {
            leftColumns: 5 
        },
        "language": {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ Registos",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        },
        "ajax": {
            "url": "../php/fetch_data.php",
            "type": "GET",
            "dataSrc": "data"
        },
        "columns": [
            { "data": "Id" },
            { "data": "Numero_CM_CNRG" },
            { "data": "Macrored_subnargemi" },
            { "data": "Tipo_microorganismo" },
            { "data": "Genero" },
            { "data": "Especie" },
            { "data": "Nombre_depositante" },
            { "data": "Fuente_aislamiento" },
            { "data": "referencia_asociada" },
            { "data": "caracteristicas_funcionales" },
            { 
                "data": null,
                "defaultContent": "<button class='editBtn'><i class='fa-regular fa-pen-to-square'></i></button> <button class='deleteBtn'><i class='fa-solid fa-xmark'></i></button>"
            }
        ]
    });

    $('#createForm').on('submit', function(event) {
        event.preventDefault();

        $.ajax({
            url: '../php/insert.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#responsecreate').html(response);
                $('#createForm')[0].reset(); 
                table.ajax.reload();
                setTimeout(function() {
                    $('#responsecreate').html("");
                }, 2500); 
            },
            error: function(xhr, status, error) {
                console.error(xhr);
                $('#responsecreate').html('Error: ' + error);
                setTimeout(function() {
                    $('#responsecreate').html("");
                }, 2500); 
            },
        });
    });

    // Edit button handler
    $('#example tbody').on('click', '.editBtn', function() {
        var data = $('#example').DataTable().row($(this).parents('tr')).data();
        $('#editar #editId').val(data.Id);
        $('#editar #editNumero_CM_CNRG').val(data.Numero_CM_CNRG);
        $('#editar #editMacrored_subnargemi').val(data.Macrored_subnargemi);
        $('#editar #editTipo_microorganismo').val(data.Tipo_microorganismo);
        $('#editar #editGenero').val(data.Genero);
        $('#editar #editEspecie').val(data.Especie);
        $('#editar #editNombre_depositante').val(data.Nombre_depositante);
        $('#editar #editFuente_aislamiento').val(data.Fuente_aislamiento);
        $('#editar #editReferencia_asociada').val(data.referencia_asociada);
        $('#editar #editCaracteristicas_funcionales').val(data.caracteristicas_funcionales);
        $('#editar #editModal').show();
    });

    // Submit edit form
    $('#editForm').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: '../php/edit_data.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#response').html(response);
                $('#editForm')[0].reset(); 
                $('#example').DataTable().ajax.reload();
                table.ajax.reload();
                setTimeout(function() {
                    $('#response').html("");
                }, 2500); 
            },
            error: function(xhr, status, error) {
                console.error(xhr);
                $('#response').html('Error: ' + error);
                setTimeout(function() {
                    $('#response').html("");
                }, 2500); 
            }
        });
    });

    // Delete button handler
    $('#example tbody').on('click', '.deleteBtn', function() {
        var data = table.row($(this).parents('tr')).data();
        if (confirm('¿Está seguro de que desea eliminar este registro?')) {
            $.ajax({
                url: '../php/delete_data.php',
                type: 'POST',
                data: { Id: data.Id },
                success: function(response) {
                    $('#response').html(response);
                    table.ajax.reload();
                },
                error: function(xhr, status, error) {
                    console.error(xhr);
                    $('#response').html('Error: ' + error);
                }
            });
        }
    });

});
