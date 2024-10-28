document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseMessage = document.getElementById('responseMessage');


    if (!name || !email || !message) {
        responseMessage.innerHTML = `
            <div class="alert alert-danger">
                Tutti i campi sono obbligatori. Per favore, compilali tutti.
            </div>
        `;
        return;
    }

    const successMessage = `
        <div class="alert alert-success">
            Grazie ${name}, il tuo messaggio è stato inviato con successo!<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Messaggio:</strong> ${message}
        </div>
    `;

    responseMessage.innerHTML = successMessage;

    this.reset();
});
