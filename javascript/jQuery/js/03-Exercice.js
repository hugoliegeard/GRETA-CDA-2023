
$(function() {

    // Récupération des data de l'API
    $.getJSON('https://ipapi.co/json', function(data) {
        $('.ip').append(`
            <div class="alert alert-warning">
                Votre adresse IP : ${data.ip} - ${data.region}.
                <br>Les connexions à ce site sont monitorées. 
                <u>Toutes tentatives d'intrusions feront l'objet de poursuite.</u>
            </div>
        `);
    });

});

$('#connect').submit(function (event) {

    event.preventDefault();
    const pseudo = $('#pseudo');

    // Permet d'enclencher la validation bootstrap.
    this.classList.add('was-validated');

    // (API JS) Permet de vérifier si le formulaire est valide.
    if(this.checkValidity()) {
        $(this).prepend(`
            <div class="alert alert-success">
                Connexion réussi ! Bonjour ${pseudo.val()}
            </div>
        `)
        this.classList.remove('was-validated');
    } else {
        $(this).prepend(`
            <div class="alert alert-danger">
                Merci de vérifier vos informations.
            </div>
        `)
    }
})