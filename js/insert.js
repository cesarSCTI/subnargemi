$(document).ready(function() {
    $('#dataForm').on('submit', function(event) {
        event.preventDefault();

        $.ajax({
            url: '../php/insert.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#response').html(response);
                $('#dataForm')[0].reset(); // Resetea el formulario después de enviar los datos
            },
            error: function(xhr, status, error) {
                console.error(xhr);
                $('#response').html('Error: ' + error);
            }
        });
    });
});
