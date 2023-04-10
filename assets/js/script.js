$(document).ready(function () {
    const $modalBody = $(".modal-body");
    const $modalText = $("#texto-modal")

    $(document).on("click", ".card", function() {
        const $card = $(this);
        const image = $card.find("img").attr("src");
        const title = $card.find("h3").text();
        const paragraph = $card.find("p").text();
        
        $modalText.empty().append(`<h3>${title}</h3>`);
        $modalText.append(`<p class="mb-0">${paragraph}</p>`);
        $modalBody.html(`<img src="${image}" class="img-fluid">`);
        $(".modal").modal("show");
    })

    $("#btn-comuniquemonos").click( () => {
        $("#comuniquemonos").attr("class", "d-block")
    })

    $("#btn-reserva").click( () => {
        $("#reserva").attr("class", "d-block")
    })

    $("#inp-comuniquemonos").click( function(e) {
        let form = $("#mi-form-com")
        if (form[0].checkValidity()) {
            e.preventDefault()
            let nombre = $('#com-nombre').val()
            let motivo = $('#motivo').val()
            let correo = $('#com-correo').val()

            if (motivo === 'Felicitaciones') {
                motivo = "felicitación"
            } else {
                motivo = motivo.slice(0, -1).toLowerCase()
            }
            alert(`Muchas gracias ${nombre}, hemos recibido su ${motivo} y enviaremos una pronta respuesta al correo ${correo}`)
        }
    })

    $("#inp-reserva").click( function(e) {
        let form = $("#mi-form-res")
        if (form[0].checkValidity()) {
            e.preventDefault()
            let nombre = $('#res-nombre').val()
            let correo = $('#res-correo').val()
            let asistentes = $('#res-cant-personas').val()

            alert(`Estimado/a ${nombre} agradecemos por reservar con nosotros. Hemos registrado ${asistentes} asistentes. Se ha enviado el código de confirmación al correo ${correo}
            ♥♥♥♥ Gracias por preferirnos ♥♥♥♥`)
        }
    })

})
