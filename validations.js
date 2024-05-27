$(document).ready(function () {
    $('#reservationForm').on('submit', function (event) {
        event.preventDefault(); // Previene el envío del formulario

        let isValid = true;
        let errorMessage = '';

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const date = $('#date').val().trim();
        const time = $('#time').val().trim();
        const partySize = $('#partySize').val().trim();

        // Validar Nombre
        if (name.length < 3) {
            isValid = false;
            errorMessage += 'El nombre debe tener al menos 3 caracteres.\n';
        }

        // Validar Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += 'Por favor, ingrese un email válido.\n';
        }

        // Validar Celular
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            isValid = false;
            errorMessage += 'Por favor, ingrese un número de celular válido (10 dígitos).\n';
        }

        // Validar Fecha
        if (new Date(date) < new Date()) {
            isValid = false;
            errorMessage += 'Por favor, seleccione una fecha futura.\n';
        }

        // Validar Hora
        const timePattern = /^([0-1]\d|2[0-3]):([0-5]\d)$/;
        if (!timePattern.test(time)) {
            isValid = false;
            errorMessage += 'Por favor, ingrese una hora válida (HH:mm).\n';
        }

        // Validar Cantidad de Personas
        if (partySize === '') {
            isValid = false;
            errorMessage += 'Por favor, seleccione la cantidad de personas.\n';
        }

        if (isValid) {
            alert('La reserva ha sido enviada exitosamente');
            // Aquí puedes agregar el código para enviar el formulario
        } else {
            alert(errorMessage);
        }
    });
});
    
    