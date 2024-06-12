// validation.js

// Validar nombre
function validateName(name) {
    if (name.length < 3) {
        return { field: 'name', error: 'El nombre debe tener al menos 3 caracteres.' };
    }
    return { field: 'name', error: '' };
}

// Validar email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return { field: 'email', error: 'Por favor, ingrese un email válido.' };
    }
    return { field: 'email', error: '' };
}

// Validar celular
function validatePhone(phone) {
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        return { field: 'phone', error: 'Por favor, ingrese un número de celular válido (10 dígitos).' };
    }
    return { field: 'phone', error: '' };
}

// Validar fecha
function validateDate(date) {
    if (new Date(date) < new Date()) {
        return { field: 'date', error: 'Por favor, seleccione una fecha futura.' };
    }
    return { field: 'date', error: '' };
}

// Validar hora
function validateTime(time) {
    const timePattern = /^([0-1]\d|2[0-3]):([0-5]\d)$/;
    if (!timePattern.test(time)) {
        return { field: 'time', error: 'Por favor, ingrese una hora válida (HH:mm).' };
    }
    return { field: 'time', error: '' };
}

// Validar cantidad de personas
function validatePartySize(partySize) {
    if (partySize === '') {
        return { field: 'partySize', error: 'Por favor, seleccione la cantidad de personas.' };
    }
    return { field: 'partySize', error: '' };
}

// Mostrar mensajes de error
function showErrors(errors) {
    errors.forEach(error => {
        const field = $('#' + error.field);
        const errorFeedback = field.siblings('.invalid-feedback');
        if (error.error !== '') {
            field.addClass('is-invalid');
            if (errorFeedback.length === 0) {
                field.after('<div class="invalid-feedback">' + error.error + '</div>');
            } else {
                errorFeedback.text(error.error);
            }
        } else {
            field.removeClass('is-invalid');
            if (errorFeedback.length !== 0) {
                errorFeedback.remove();
            }
        }
    });
}

// Validar todo el formulario
$(document).ready(function () {
    $('#reservationForm').on('submit', function (event) {
        event.preventDefault(); // Previene el envío del formulario

        const errors = [];

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const date = $('#date').val().trim();
        const time = $('#time').val().trim();
        const partySize = $('#partySize').val().trim();

        errors.push(validateName(name));
        errors.push(validateEmail(email));
        errors.push(validatePhone(phone));
        errors.push(validateDate(date));
        errors.push(validateTime(time));
        errors.push(validatePartySize(partySize));

        // Mostrar errores
        showErrors(errors);

        // Verificar si hay errores
        const isValid = errors.every(error => error.error === '');
        
        if (isValid) {
            alert('La reserva ha sido enviada exitosamente');
            // Aquí puedes agregar el código para enviar el formulario, si está validado correctamente
            // this.submit();
        }
    });
});
