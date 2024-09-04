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
    document.querySelectorAll('.retangulo').forEach(retangulo => {document.addEventListener('DOMContentLoaded', function () {
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
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();

    // Cria um objeto FormData a partir do formulário
    var formData = new FormData(document.getElementById('insurance-form'));

    // Envia os dados do formulário usando fetch para o Formspree
    fetch('https://formspree.io/f/xwpezljr', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Se a resposta for OK, redireciona para a página de agradecimento
            window.location.href = 'agradecimento.html';
        } else {
            // Se houver um problema, mostra uma mensagem de erro
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro ao enviar o formulário:', error);
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    });

    return false; // Impede o envio padrão do formulário
}
        observer.observe(retangulo);
    });

    // Controla a abertura e fechamento do menu hambúrguer
    document.getElementById('menu-toggle').addEventListener('click', function() {
        var navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('active');
    });
});

function redirectToThankYouPage() {
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();

    // Cria um objeto FormData a partir do formulário
    var formData = new FormData(document.getElementById('insurance-form'));

    // Envia os dados do formulário usando fetch para o Formspree
    fetch('https://formspree.io/f/xwpezljr', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Se a resposta for OK, redireciona para a página de agradecimento
            window.location.href = 'agradecimento.html';
        } else {
            // Se houver um problema, mostra uma mensagem de erro
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro ao enviar o formulário:', error);
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    });

    return false; // Impede o envio padrão do formulário
}
