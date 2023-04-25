// 1. Mise en place de jQuery
$(function() {

    // 2. Récupération des contacts de l'API
    $.getJSON('https://jsonplaceholder.typicode.com/users', function(contacts) {

        // Permet de vider le contenu de la DIV
        $('.list-group').empty();

        // On parcourt la liste des contacts
        for (let contact of contacts) {
            $('.list-group').append(`
                <a href="#" class="list-group-item list-group-item-action">
                    ${contact.name}
                </a>
            `);
        }

    }); // getJSON
}); // $(function())