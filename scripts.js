let cart = [];

function showCart() {
    const cartItemsModal = document.getElementById("cartModal");
    cartItemsModal.innerHTML = "";
    if (cart.length === 0) {
        cartItemsModal.innerHTML = "<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-body'>El carrito está vacío</div><div class='modal-footer'><button type='button' class='btn btn-secondary' data-dismiss='modal'>Cerrar</button></div></div></div>";
    } else {
    }
    $('#cartModal').modal('show');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

function validarFormulario() {
    var rut = document.getElementById("rut").value.trim();
    var apellidoPaterno = document.getElementById("apellido_paterno").value.trim();
    var apellidoMaterno = document.getElementById("apellido_materno").value.trim();
    var nombre = document.getElementById("nombre").value.trim();
    var edad = parseInt(document.getElementById("edad").value.trim(), 10);
    var genero = document.getElementById("genero").value;
    var celular = document.getElementById("celular").value.trim();

    var errores = [];

    // Validación de RUT
    if (rut.length < 9 || rut.length > 10) {
        errores.push("El RUT debe tener entre 9 y 10 caracteres.");
    }

    if (nombre.length < 3 || nombre.length > 20) {
        errores.push("El nombre debe tener entre 3 y 20 caracteres.");
    }

    if (apellidoPaterno.length < 3 || apellidoPaterno.length > 20) {
        errores.push("El apellido paterno debe tener entre 3 y 20 caracteres.");
    }

    if (apellidoMaterno.length < 3 || apellidoMaterno.length > 20) {
        errores.push("El apellido materno debe tener entre 3 y 20 caracteres.");
    }

    if (isNaN(edad) || edad < 18 || edad > 35) {
        errores.push("La edad debe estar entre 18 y 35 años.");
    }

    if (genero === "") {
        errores.push("Debe seleccionar un género.");
    }

    if (celular.length < 9 || celular.length > 12) {
        errores.push("El número de celular debe tener entre 9 y 12 caracteres.");
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    }

    return true;
}

function mostrarErrores(errores) {
    var mensaje = "Por favor, corrija los siguientes errores:\n\n";
    errores.forEach(function(error) {
        mensaje += "- " + error + "\n";
    });
    alert(mensaje);
}

function mostrarNotificacion() {
    alert("¡El formulario ha sido enviado con éxito!");
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}

function generarCarta() {
    var rut = document.getElementById("rut").value;
    var apellidoPaterno = document.getElementById("apellido_paterno").value;
    var apellidoMaterno = document.getElementById("apellido_materno").value;
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var profesion = document.getElementById("profesion").value;
    var motivacion = document.getElementById("motivacion").value;

    var carta = "Carta de Presentación y Motivación para Postular al Trabajo Ambiental en Chiloé\n\n";
    carta += "Nombre: " + nombre + "\n";
    carta += "Apellido Paterno: " + apellidoPaterno + "\n";
    carta += "Apellido Materno: " + apellidoMaterno + "\n";
    carta += "Rut: " + rut + "\n";
    carta += "Fecha de Nacimiento: " + fechaNacimiento + "\n";
    carta += "Edad: " + edad + "\n";
    carta += "Género: " + genero + "\n";
    carta += "Email: " + email + "\n";
    carta += "Celular: " + celular + "\n";
    carta += "Profesión: " + profesion + "\n\n";
    carta += "Motivación para Postular al Trabajo:\n" + motivacion;

    document.getElementById("carta").value = carta;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("crear_carta").addEventListener("click", function() {
        if (validarFormulario()) {
            generarCarta();
        }
    });

    document.getElementById("enviar").addEventListener("click", function(event) {
        if (validarFormulario()) {
            mostrarNotificacion();
            limpiarFormulario();
            event.preventDefault();
        }
    });
});
