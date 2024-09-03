document.addEventListener('DOMContentLoaded', function () {
    // Cria uma instância do IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' quando o elemento entra na viewport
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 }); // Ajusta o threshold conforme necessário

    // Seleciona todos os retângulos e observa cada um deles
    document.querySelectorAll('.retangulo').forEach(retangulo => {
        observer.observe(retangulo);
    });

    // Controla a abertura e fechamento do menu hambúrguer
    document.getElementById('menu-toggle').addEventListener('click', function() {
        var navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('active');
    });
});

function redirectToThankYouPage() {
    window.location.href = 'agradecimento.html';
    return false; // Previne o envio real do formulário
}
