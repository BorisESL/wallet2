$(document).ready(function () {
    // Datos de usuario para la autenticación
    let usuarioValido = {
        correo: 'boris@gmail.com',
        contraseña: '12345'
    };

    $('#loginForm').submit(function (event) {
        event.preventDefault();

        // Obtener los valores de correo y contraseña del formulario
        let correo = $('#email').val();
        let contraseña = $('#password').val();

        // Verificar las credenciales
        if (correo === usuarioValido.correo && contraseña === usuarioValido.contraseña) {
            // Credenciales válidas, redirigir a la página menú principal
            window.location.href = './pages/menup.html';
        } else {
            // Credenciales inválidas, mostrar mensaje de error
            const alertMessage = $("#alertMessage");

            const appendAlert = (message, type) => {
                const wrapper = document.createElement('div')
                wrapper.innerHTML = [
                    `<div class="alert alert-info alert-dismissible" role="alert">`,
                    `   <div>${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                    '</div>'
                ].join('')

                alertMessage.append(wrapper)
            }

            appendAlert('Usuario o contraseña incorrectos. Inténtalo de nuevo.', 'danger')

            setTimeout(() => {
                alertMessage.fadeOut("slow", function () {

                });
            }, 3000);

        }
    });
});