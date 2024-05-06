$(document).ready(function(){
    // Função para fechar o menu de navegação quando um link é clicado
    $(".nav-link").on('click', function(event) {
        // Verifica se o menu de navegação está expandido
        if ($(".navbar-collapse").hasClass("show")) {
            // Fecha o menu de navegação
            $(".navbar-collapse").collapse('hide');
        }
    });

});
