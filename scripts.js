function expandirTarjeta(element) {
    if (element.classList.contains('expandida')) {
        element.classList.remove('expandida');
    } else {
        element.classList.add('expandida');
        element.onclick = function() {
            element.classList.remove('expandida');
        };
    }
}

document.body.addEventListener('click', function(event) {
    if (!event.target.closest('.tarjeta')) {
        var tarjetas = document.querySelectorAll('.tarjeta.expandida');
        tarjetas.forEach(function(tarjeta) {
            tarjeta.classList.remove('expandida');
        });
    }
});
