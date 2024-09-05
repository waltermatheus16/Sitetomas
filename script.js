body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.header {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
}

.container {
    width: 80%;
    margin: 0px;
}

/* Estilos específicos para dispositivos menores (tablet e celular) */
@media (max-width: 1280px) {
    .container {
        width: 20%;
    }

    .header {
        padding: 15px;
    }
}

@media (max-width: 768px) {
    .header {
        font-size: 18px;
        padding: 10px;
    }

    .container {
        width: 95%;
    }
}

@media (max-width: 480px) {
    .header {
        font-size: 16px;
        padding: 5px;
    }

    .container {
        width: 100%;
    }
}

/* Estilo do cabeçalho */
header {
    background-color: #000000; /* Cor do cabeçalho */
    color: white;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0; /* Remove a margem do cabeçalho */
}




.logo {
    margin-right: 150px; /* Margem à direita para manter o logo afastado da borda */
}

.logo img {
    height: 130px;
}

nav {
    display: flex;
    flex-grow: 1; /* Permite que o nav ocupe o espaço disponível */
    margin-left: 400px; /* Ajusta a posição do nav para a direita */
}


nav ul {
    list-style: none;
    padding: 0;
    margin: 0; /* Remove margem */
}

nav ul li {
    display: inline;
    margin: 0 15px;
    position: relative;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 25px;
}


nav ul li:not(:last-child)::after {
    content: "";
    position: absolute;
    right: -15px; /* Ajuste a posição da listra */
    top: -10px;
    height: 30px;
    width: 3px; /* Espessura da listra */
    background-color: rgb(255, 255, 255); /* Cor da listra */
}

main {
    padding: 0; /* Remove o padding do main para eliminar espaços extras */
    text-align: center;
}

/* Estilo dos botões */
.button-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

/* Fundo específico para a seção dos botões */
#formulario {
    background-color: #ffffff; /* Cor de fundo para a seção de botões */
    background-image: url('Fondo degradado en tonos verdes _ Vector Gratis.jpeg'); /* Imagem de fundo específica para a seção */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 180px 0; /* Espaçamento interno da seção */
    margin: 0; /* Remove margens extras da seção */
}

/* Remove qualquer margem ou padding externo indesejado */
#formulario * {
    margin: 0;
    padding: 0;
}

#formulario h2 {
    font-size: 56px; /* Tamanho da fonte */
    font-weight: bold; /* Peso da fonte */
    color: #000000; /* Cor do texto */
    margin: 0; /* Remove a margem padrão */
    margin-top: -50px; /* Reduzido para mover o título mais para cima */
    padding-bottom: 30px; /* Espaço abaixo do título */
    line-height: 1.0; /* Altura da linha para espaçamento vertical do texto */
}

.insurance-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  /* Garante que os elementos internos estejam centralizados verticalmente */
    text-decoration: none;
    color: black;
    border: 2px solid #2a9d8f;
    border-radius: 10px;
    width: 300px;
    height: 200px; /* Ajuste para acomodar o botão interno */
    padding: 30px;
    background-color: transparent; /* Deixa o fundo do botão transparente */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, box-shadow 0.3s;
}

.insurance-button img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 50px; /* Ajuste o valor para o espaço desejado entre a imagem e o texto */
}

.insurance-button span {
    font-size: 16px;
    font-weight: bold;
    margin-top: 30px; /* Espaço entre a imagem e o texto, ajustado para aumentar o espaçamento */
    margin-bottom: 30px;
}

/* Estilo para o botão de oferta */
.offer-button {
    background-color: #2a9d8f; /* Cor de fundo do botão interno */
    color: white;              /* Cor do texto */
    padding: 15px 30px;        /* Ajuste de padding para o botão */
    border-radius: 10px;        /* Cantos arredondados */
    margin-top: auto;          /* Espaço entre o texto principal e o botão interno */
    cursor: pointer;           /* Cursor de indicação de clique */
    font-size: 18px;           /* Tamanho da fonte do botão interno */
    font-weight: bold;         /* Negrito para o texto */
    transition: background-color 0.3s;
    text-align: center;        /* Centraliza o texto dentro do botão */
    min-width: 120px;          /* Define uma largura mínima para consistência */
}

.offer-button:hover {
    background-color: #20a855; /* Cor de fundo ao passar o mouse */
}

.insurance-button:hover {
    background-color: rgba(32, 168, 85, 0.2); /* Fundo translúcido ao passar o mouse */
    color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

#historia-visao {
    display: flex;
    background-color: #000000;
    justify-content: space-around;
    background-image: url('Fondo negro y gris con superposición de cuadrados geométricos y estilo de papel de sombra _ Vector Premium.jpeg');
    margin: 0px 0;
    height: 800px; /* Altura do section */
    align-items: center; /* Alinha os itens verticalmente ao centro */
}

/* Estilo base para os retângulos */
.retangulo {
    background-color: rgba(0, 0, 0, 0.7); /* Fundo escuro com transparência */
    border: 1px solid rgba(221, 221, 221, 0.5); /* Borda translúcida */
    background-image: url('Fondo degradado en tonos verdes _ Vector Gratis.jpeg');
    background-size: cover;
    background-position: center;
    border-radius: 90px; /* Bordas arredondadas */
    padding: 20px;
    height: 500px;
    width: 35%; /* Largura dos retângulos */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra para um efeito de profundidade */
    opacity: 0; /* Inicialmente invisível */
    transition: opacity 1s ease, transform 1s ease; /* Transições suaves */
}

/* Animações de entrada */
@keyframes moveInLeft {
    from {
        transform: translateX(-100%); /* Começa fora da tela à esquerda */
        opacity: 0;
    }
    to {
        transform: translateX(0); /* Move para a posição original */
        opacity: 1;
    }
}

@keyframes moveInRight {
    from {
        transform: translateX(100%); /* Começa fora da tela à direita */
        opacity: 0;
    }
    to {
        transform: translateX(0); /* Move para a posição original */
        opacity: 1;
    }
}

/* Adiciona a animação de entrada quando a classe 'visible' é aplicada */
.retangulo:nth-of-type(1).visible {
    animation: moveInLeft 1s ease-out forwards; /* Animação vindo da esquerda */
}

.retangulo:nth-of-type(2).visible {
    animation: moveInRight 1s ease-out forwards; /* Animação vindo da direita */
}





.retangulo h3 {
    font-size: 1.8em;
    margin-bottom: 15px;
    color: #000000; /* Cor do título */
    font-family: 'Arial', sans-serif; /* Fonte personalizada */
    text-transform: uppercase; /* Letras maiúsculas */
    letter-spacing: 1px; /* Espaçamento entre letras */
    text-align: center; /* Centralizar o título */
    border-bottom: 2px solid #000000; /* Linha inferior */
    padding-bottom: 10px; /* Espaçamento inferior */
}

.retangulo p {
    font-size: 1.2em;
    color: #000000; /* Cor do texto */
    line-height: 1.5; /* Espaçamento entre linhas */
    text-align: justify; /* Justificar texto */
    margin-bottom: 20px; /* Espaçamento inferior */
}

.retangulo button {
    background-color: #000000; /* Cor do botão */
    color: #ffffff; /* Cor do texto do botão */
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.retangulo button:hover {
    background-color: #ff0000; /* Cor do botão ao passar o mouse */
}

@keyframes moveIn {
    from {
        transform: translateX(-100%) scale(0.8);
        opacity: 0;
    }
    to {
        transform: translateX(0) scale(1);
        opacity: 1;
    }
}

.retangulo:hover {
    transform: scale(1.05); /* Efeito de zoom ao passar o mouse */
}

.retangulo h3 {
    font-size: 1.8em;
    margin-bottom: 15px;
    color: #333; /* Cor do título */
    font-family: 'Arial', sans-serif; /* Fonte personalizada */
    text-transform: uppercase; /* Letras maiúsculas */
    letter-spacing: 1px; /* Espaçamento entre letras */
    text-align: center; /* Centralizar o título */
    border-bottom: 2px solid #000000; /* Linha inferior */
    padding-bottom: 10px; /* Espaçamento inferior */
}


.retangulo p {
    font-size: 1.2em;
    color: #000000; /* Cor do texto */
    line-height: 1.5; /* Espaçamento entre linhas */
    text-align: justify; /* Justificar texto */
    margin-bottom: 20px; /* Espaçamento inferior */
}

.retangulo button {
    background-color: #000000; /* Cor do botão */
    color: #ffffff; /* Cor do texto do botão */
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.retangulo button:hover {
    background-color: #333333; /* Cor do botão ao passar o mouse */
}

/* =================================================================*/


/* Parte Tipo de  Seguros */

#seguros {
    padding: 20px;
    background-color: #f5f5f5; /* Cor de fundo opcional */
    background-image: url('Fondo negro y gris con superposición de cuadrados geométricos y estilo de papel de sombra _ Vector Premium.jpeg');
    height: 1100px; /* Ajuste a altura conforme necessário */
  }

  
  
  #seguros h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 56px; /* Ajuste o valor conforme necessário */
    color: #ffffff;

  }
  
  .seguros-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    height: 600px; /* Ajuste a altura conforme necessário */
  }
  
  .seguro-item {
    background-color: #fff;
    background-image: url('Fondo\ degradado\ en\ tonos\ verdes\ _\ Vector\ Gratis.jpeg');
    background-size: cover;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    width: 450px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  #seguros .seguro-item img {
    width: 50%; /* Ajusta a largura para preencher o contêiner */
    height: auto; /* Mantém a proporção original */
    max-width: 300px; /* Define a largura máxima das imagens */
    max-height: 200px; /* Define a altura máxima das imagens */
    
  }
  
  .seguro-item h2 {
    font-size: 1.2em;
    margin: 20px 0;
   
  }
  
  .seguro-item ul {
    list-style: none; /* Remove os marcadores padrão */
    padding: 0; /* Remove o preenchimento padrão */
  }
  
  .seguro-item ul li::before {
    content: "\f00c"; /* Código do ícone de check mark no Font Awesome */
    font-family: "Font Awesome 5 Free"; /* Fonte do Font Awesome */
    font-weight: 900; /* Necessário para ícones de fonte */
    color: #000000; /* Cor do check mark */
    display: inline-block;
    margin-right: 0.3em; /* Ajuste o valor conforme necessário */
    margin-left: -0.5em; /* Adiciona um pequeno valor negativo para mover o ícone para a esquerda */
}

  .seguro-item ul li.no-check::before {
    content: ""; /* Remove o ícone */
  }
  
  .seguro-item ul li {
    text-align: center; /* Centraliza o texto dentro de cada item da lista */
  }
  
  #seguros h3 {
    text-align: center;
    margin-top: 20px;
  }

  .seguros-container h4 {
    margin-top: 10px; /* Adiciona espaço acima do h4 */
  }



  
  .seguro-item ul li {
    margin-bottom: 10px;
  }















/* =================================================================*/




/* Parte Mapa */

#navigation {
    background-color: #000000;
    padding: 20px;
    background-image: url(''); /* Certifique-se de adicionar a URL da imagem de fundo, se necessário */
    background-size: cover;
    min-height: 700px; /* Defina a altura mínima que deseja para a seção */
}

.container {
    position: relative;
    top: 30px; /* Ajuste este valor conforme necessário */
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-image: url('Fondo\ degradado\ en\ tonos\ verdes\ _\ Vector\ Gratis.jpeg'); /* Certifique-se de adicionar a URL da imagem de fundo, se necessário */
    background-size: cover;
    background-color: #000000;
    align-items: flex-start;
    max-width: 80%;
    margin: 0 auto;
    height: 600px;
    border-radius: 55px; /* Ajuste o valor conforme necessário para bordas mais ou menos arredondadas */

}

.text-container {
    flex: 1;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.text-container h2 {
    font-size: 48px;
    color: #000000;
    margin-bottom: 10px;
    font-family: 'Arial', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-left: 30px;
    padding-left: 0px; /* Ajuste o valor conforme necessário */
}

.text-container h1 {
    font-size: 38px;
    color: #000000;
    margin: 0;
    margin-top: 30px;
    margin-left: 0px; /* Ajuste este valor conforme necessário */
}

.map-container {
    flex: 1;
    display: flex;
    justify-content: center;
}

#navigation iframe {
    width: 100%;
    height: 600px;
    border: 0;
    border-radius: 10px;
    border-radius: 55px; /* Ajuste o valor conforme necessário para bordas mais ou menos arredondadas */
}





/* Parte Seguros y paginas */




#three-images-section {
    position: relative; /* Para que o pseudo-elemento seja posicionado em relação ao elemento pai */
    background-color: #ffffff; /* Cor de fundo para a seção de imagens */
    /*background-image: url('Fondo\ degradado\ en\ tonos\ verdes\ _\ Vector\ Gratis.jpeg'); /* Imagem de fundo específica para a seção */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 100px 0; /* Espaçamento interno da seção */
    z-index: 1; /* Garante que o conteúdo da seção fique acima do overlay */
}

#three-images-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Overlay preto com 50% de transparência */
    z-index: -9; /* Garante que o overlay fique atrás do conteúdo */
}

.respaldo-title {
    display: inline-block; /* Permite definir largura e altura do retângulo */
    padding: 90px 100px; /* Espaçamento interno dentro do retângulo */
    background-color: #20a855; /* Cor de fundo verde do retângulo */
    color: white; /* Cor do texto dentro do retângulo */
    border-radius: 90px; /* Cantos arredondados do retângulo */
    font-weight: bold; /* Texto em negrito */
    font-size: 24px; /* Tamanho da fonte */
    margin-bottom: 20px; /* Espaço abaixo do título */
}

#three-images-section h2 {
    font-size: 50px;
    margin-top: 1px;
    margin-bottom: 50px;
    color: #000000; /* Cor do texto do título */
}

/* Estilo para o contêiner das imagens */
.image-container {
    display: flex;          /* Usa Flexbox para layout */
    justify-content: center; /* Centraliza as imagens horizontalmente */
    flex-wrap: wrap;        /* Permite que as imagens quebrem para a linha seguinte */
    align-items: center;   /* Alinha as imagens verticalmente no centro, se necessário */
    gap: 40px;             /* Adiciona espaço entre as imagens */
    padding: 20px 0;       /* Espaçamento acima e abaixo do contêiner de imagens */
}

/* Estilo para as imagens soltas */
.image-container img {
    width: 320px; /* Largura fixa para as imagens */
    height: auto; /* Altura fixa para as imagens */
    object-fit: cover; /* Faz com que a imagem preencha o contêiner sem distorção */
    border-radius: 0; /* Remove bordas arredondadas */
    box-shadow: none; /* Remove a sombra da imagem */
    transition: transform 0.3s; /* Transição suave para o efeito de hover */
}

.break {
    flex-basis: 100%; /* Faz com que o elemento ocupe toda a largura */
    height: 0; /* Altura zero para não afetar o layout */
}

/* Efeito hover para a imagem */
.image-container img:hover {
    transform: scale(1.05); /* Aumenta levemente o tamanho ao passar o mouse */
}

#insurance-form {
    background-color: rgba(255, 255, 255, 0.9); /* Fundo branco com leve transparência */
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 50%;
    max-width: 500px;
    margin: 20px auto;
    text-align: left;
}

#insurance-form .form-group {
    margin-bottom: 20px;
}

#insurance-form label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
    color: #333;
}

#insurance-form input[type="text"],
#insurance-form input[type="tel"],
#insurance-form input[type="email"],
#insurance-form input[type="date"],
#insurance-form input[type="number"]
 {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

#insurance-form button.submit {
    display: block; /* Faz o botão se comportar como um bloco para centralização */
    width: auto; /* Ajusta a largura do botão para o tamanho do conteúdo */
    max-width: 200px; /* Define uma largura máxima para o botão */
    margin: 20px auto; /* Centraliza o botão horizontalmente */
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: #2a9d8f; /* Cor de fundo do botão */
    color: white; /* Cor do texto */
    font-size: 18px; /* Tamanho da fonte */
    font-weight: bold; /* Texto em negrito */
    cursor: pointer; /* Cursor de indicação de clique */
    transition: background-color 0.3s, box-shadow 0.3s; /* Transição suave para hover */
    text-align: center; /* Centraliza o texto dentro do botão */
}

#insurance-form select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: #fff; /* Fundo branco */
    appearance: none; /* Remove a seta padrão do select */
    -webkit-appearance: none; /* Para navegadores WebKit */
    -moz-appearance: none; /* Para navegadores Mozilla */
    text-align: center; /* Centraliza o texto */
}

.form-group {
    text-align: center; /* Centraliza todo o grupo de formulário */
}

#tipo-documento {
    margin: 0 auto; /* Centraliza o elemento de seleção */
}



/* Efeito de hover para o botão de envio */
.submit:hover {
    background: linear-gradient(135deg, #1d7a63, #2a9d8f); /* Gradiente invertido ao passar o mouse */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); /* Sombra mais pronunciada */
    transform: translateY(-3px); /* Levanta o botão ao passar o mouse */
}

/* Efeito de foco no botão para acessibilidade */
.submit:focus {
    outline: 3px solid #1d7a63; /* Contorno ao focar no botão */
    outline-offset: 2px; /* Espaçamento do contorno */
}


.thank-you-section {
    text-align: center;
    margin: 0;
    padding: 100px 20px 20px; /* Aumenta o padding-top para mover o conteúdo para baixo */
    width: auto;
    height: 600px; /* Ajuste de altura, se necessário */
    background-color: #20a855;
    background-image: url('Fondo degradado en tonos verdes _ Vector Gratis.jpeg');
    background-size: cover; /* Faz a imagem cobrir toda a área */
    background-repeat: no-repeat; /* Impede a repetição da imagem */
    background-position: center; /* Centraliza a imagem */
    border-radius: 0;
    box-shadow: none;
}

.thank-you-section h2 {
    font-size: 10em;
    color: #ffffff; /* Cor do texto branco */
    margin-bottom: 10px; /* Margem inferior */
}

.thank-you-section h1 {
    font-size: 4em;
    color: #ffffff; /* Cor do texto branco */
    margin-bottom: 10px; /* Margem inferior */
}

.thank-you-section p {
    font-size: 1.2em;
    color: #ffffff; /* Cor do texto branco */
    line-height: 1.3; /* Espaçamento entre linhas */
}




/* =================================================================*/

/* rodapeeeeeee */


.footer {
    background-color: #282828; /* Cor de fundo do footer */
    color: #ffffff; /* Cor do texto */
    text-align: center;
    padding: 20px 0;
    position: relative;
    bottom: 0;
    width: 100%;
}

.footer h3 {
    margin-bottom: 10px;
    font-size: 24px;
}

.footer p {
    font-size: 14px;
    margin: 5px 0;
}

.social-icons {
    margin: 20px 0;
}

.social-icons a {
    color: #ffffff;
    margin: 0 10px;
    font-size: 50px;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: #1da1f2; /* Cor quando passa o mouse, pode ajustar conforme desejado */
}

.copyright {
    font-size: 12px;
    color: #cccccc;
}







/* Estilo para o menu Tablet */

@media (min-width: 770px) and (max-width: 1024px) {
.menu-container {
    display: flex;
    justify-content: flex-end; /* Alinha o conteúdo à direita */
    align-items: center;
    position: relative; /* Permite posicionamento absoluto do menu */
}

/* Mantenha o estilo existente para o toggle do menu */
.menu-toggle {
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
.nav-menu {
    display: flex;
    flex-direction: column;
    width: 550px; /* Ajuste conforme necessário */
    position: absolute; /* Corrigido de 'absolut' para 'absolute' */
    top: 80px; /* Ajuste conforme a altura do cabeçalho */
    right: 40px; /* Define um valor absoluto para o alinhamento */

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra para maior destaque */
}
.nav-menu ul {
    display: flex;
    list-style: flex;
    margin: 0;
    padding: 0;
}

.nav-menu ul li {
    margin: 0 15px;
}

.nav-menu ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}



#historia-visao {
display: flex;
background-color: #000000;
justify-content: space-around;
background-image: url('Fondo negro y gris con superposición de cuadrados geométricos y estilo de papel de sombra _ Vector Premium.jpeg');
margin: 0px 0;
 height: 800px !important; /* Altura do section */
align-items: center; /* Alinha os itens verticalmente ao centro */
}

.retangulo {
    position: relative;
    top: 0x;
    height: 100px; /* Aumenta a altura para dispositivos móveis */
    width: 40%; /* Ajusta a largura para dispositivos móveis */
}

}





/* Estilos para o menu hambúrguer em dispositivos Celular */
/* Responsividade */
@media (max-width: 768px) {
    .menu-container {
        display: flex;
        justify-content: space-between; /* Garantir que o logo e o menu estejam alinhados */
        align-items: center;
        padding: 10px; /* Ajuste o padding se necessário */
        position: relative;
    }

    .menu-toggle {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .menu-toggle .bar {
        width: 30px;
        height: 3px;
        background-color: white;
        margin: 5px 0; /* Ajuste a margem verticalmente se necessário */
        transition: 0.3s;
    }

    .menu-toggle.active .bar:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .menu-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }

    .menu-toggle.active .bar:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .nav-menu {
        display: none;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 60px; /* Ajuste conforme a altura do cabeçalho e do hambúrguer */
        right: 0; /* Alinha o menu com o botão hambúrguer */
        background-color: #000000;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
    }

    .nav-menu.active {
        display: flex;
    }

    .nav-menu ul {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
    }

    .nav-menu ul li {
        margin: 10px 0;
    }

    .nav-menu ul li a {
        display: block;
        font-size: 20px;
        padding: 10px 20px;
        color: white;
        text-decoration: none;
    }



/* ================================================================= */

#seguros {
    padding: 20px;
    background-color: #f5f5f5; /* Cor de fundo opcional */
    background-image: url('Fondo negro y gris con superposición de cuadrados geométricos y estilo de papel de sombra _ Vector Premium.jpeg');
    height: 2550px; /* Ajuste a altura conforme necessário */
}


#seguros h1 {
    font-size: 36px; /* Reduz o tamanho da fonte para dispositivos móveis */
    margin-bottom: 10px;
}

.seguro-item {
    width: 100%; /* Ajusta a largura para 100% do contêiner pai em dispositivos móveis */
    max-width: 90%; /* Define a largura máxima dos itens */
    padding: 10px; /* Ajusta o padding para dispositivos móveis */
    margin: 0 auto; /* Centraliza o item dentro do contêiner pai */
    display: block; /* Garante que o item seja exibido como bloco */
}

#seguros .seguro-item img {
    max-height: 150px; /* Ajusta a altura máxima das imagens em dispositivos móveis */
}

.seguros-container {
    flex-direction: column; /* Organiza os itens em coluna em vez de linha em dispositivos móveis */
    height: auto; /* Remove a altura fixa para que os itens possam crescer conforme necessário */
}

/* ================================================================= */







/* ================================================================= */
.thank-you-section {
    text-align: center;
    margin: 0;
    padding: 100px 20px 20px; /* Aumenta o padding-top para mover o conteúdo para baixo */
    width: auto;
    height: 400px; /* Ajuste de altura, se necessário */
    background-color: #20a855;
    background-image: url('Fondo degradado en tonos verdes _ Vector Gratis.jpeg');
    background-size: cover; /* Faz a imagem cobrir toda a área */
    background-repeat: no-repeat; /* Impede a repetição da imagem */
    background-position: center; /* Centraliza a imagem */
    border-radius: 0;
    box-shadow: none;
}


.thank-you-section h2 {
    font-size: 64px; /* Tamanho ajustado para telas pequenas */
}

.thank-you-section h1 {
    font-size: 28px; /* Tamanho ajustado para telas pequenas */
}

.thank-you-section {
    padding: 15px; /* Reduz o padding em dispositivos móveis */
}




/* ================================================================= */


/* Parte mapa */






    #navigation {
        padding: 15px; /* Reduz o padding em telas menores */
        min-height: 1000px; /* Ajusta a altura mínima para telas menores */
    }

        .container {
        flex-direction: column; /* Empilha o texto e o mapa verticalmente em telas menores */
        align-items: center;
        max-width: 90%; /* Ajusta o tamanho máximo para telas menores */
        height: 900px; /* Permite que a altura se ajuste ao conteúdo */
        border-radius: 55px; /* Ajuste o valor conforme necessário para bordas mais ou menos arredondadas */

    }

    .text-container {
        margin-right: 0; /* Remove a margem direita em telas menores */
        text-align: center; /* Centraliza o texto */
    }

    .text-container h2 {
        font-size: 28px; /* Ajusta o tamanho da fonte */
        margin-left: 0; /* Remove a margem esquerda */
    }

    .text-container h1 {
        font-size: 20px; /* Ajusta o tamanho da fonte */
        margin-left: 0; /* Remove a margem esquerda */
    }



        #navigation iframe {
            height: 500px; /* Ajusta a altura para telas menores */
        }
    









/* ================================================================= */

    /* Historia e visão */

#historia-visao {
    display: flex;
    background-color: #000000;
    justify-content: space-between; /* ou space-evenly */
    background-image: url('Fondo negro y gris con superposición de cuadrados geométricos y estilo de papel de sombra _ Vector Premium.jpeg');
    margin: 0px 0;
    height: 1500px;
    align-items: center;
}

.retangulo {
    position: relative;
    top: -50x;
    height: 150px; /* Aumenta a altura para dispositivos móveis */
    width: 37%; /* Ajusta a largura para dispositivos móveis */
}


.retangulo p {
    font-size: 1.2em;
    color: #000000; /* Cor do texto */
    line-height: 1.5; /* Espaçamento entre linhas */
    text-align: justify; /* Justificar texto */
    margin-bottom: 20px; /* Espaçamento inferior */
    
}



    /* Efeito ao clicar no botão de menu hambúrguer */

}







@media (max-width: 468px) {
    .menu-container {
        margin-right: 20px;
    }

    


    .menu-toggle .bar {
        width: 25px;
        height: 2px;
        background-color: white;
        margin: 5px -70px; /* Ajuste a margem conforme necessário */
        transition: 0.3s;
    }

    .nav-menu {
        top: 160px; /* Ajustado para a altura do cabeçalho em dispositivos menores */
    }

    .nav-menu ul li a {
        font-size: 18px;
        padding: 8px 16px;
    }

    #seguros h1 {
        font-size: 28px;
        margin-bottom: 8px;
    }

    .seguro-item {
        max-width: 95%;
        padding: 8px;
    }

    #seguros .seguro-item img {
        max-height: 120px;
    }

    #historia-visao {
        display: flex;
        background-color: #000000;
        justify-content: space-between; /* ou space-evenly */
        background-image: url('Fondo negro y gris con superposición de cuadrados geométricos y estilo de papel de sombra _ Vector Premium.jpeg');
        margin: 0px 0;
        height: 1600px;
        align-items: center;
    }

    .retangulo {
        position: relative;
        top: -50x;
        height: 1500px; /* Aumenta a altura para dispositivos móveis */
        width: 37%; /* Ajusta a largura para dispositivos móveis */
    }






    #seguros {
        padding: 20px;
        background-color: #f5f5f5; /* Cor de fundo opcional */
        background-image: url('Fondo negro y gris con superposición de cuadrados geométricos y estilo de papel de sombra _ Vector Premium.jpeg');
        height: 2450px; /* Ajuste a altura conforme necessário */
    }
    
    
    #seguros h1 {
        font-size: 28px;
        margin-bottom: 8px;
        text-align: center; /* Centraliza o texto */
    }
    
    .seguro-item h2 {
        font-size: 1.2em;
        margin: 20px 0;
        text-align: center; /* Centraliza o texto */
    }


    ul {
        list-style: none; /* Remove os marcadores da lista */
        padding: 0;
        text-align: center; /* Centraliza o texto dos itens */
    }
    
    li {
        display: block; /* Faz com que os itens se comportem como blocos em linha */
        text-align: center;
        margin: 10px 0; /* Adiciona espaço entre os itens */
    }
    
    /* Estilo específico para itens com a classe no-check */
    li.no-check {
        padding: 0 10px; /* Adiciona espaço interno à esquerda e à direita */
        text-align: center !important; 
    }




    
    .seguro-item {
        width: 100%; /* Ajusta a largura para 100% do contêiner pai em dispositivos móveis */
        max-width: 90%; /* Define a largura máxima dos itens */
        padding: 10px; /* Ajusta o padding para dispositivos móveis */
        margin: 20px auto; /* Centraliza o item dentro do contêiner pai */
        display: block; /* Garante que o item seja exibido como bloco */
    }
    
    #seguros .seguro-item img {
        max-width: 100%; /* Ajusta a largura máxima para 100% do contêiner pai */
        height: auto; /* Mantém a proporção da imagem */
        display: block; /* Garante que a imagem seja exibida como um bloco */
        margin: 0 auto; /* Centraliza a imagem no contêiner */
    }
    
    .seguros-container {
        flex-direction: column; /* Organiza os itens em coluna em vez de linha em dispositivos móveis */
        height: auto; /* Remove a altura fixa para que os itens possam crescer conforme necessário */
    }



    
}


@media (max-width: 375px) {
    @media (max-width: 468px) {
        .menu-container {
            margin-right: 20px;
        }
    
        
    
    
        .menu-toggle .bar {
            width: 25px;
            height: 2px;
            background-color: white;
            margin: 5px -70px; /* Ajuste a margem conforme necessário */
            transition: 0.3s;
        }
    
        .nav-menu {
            top: 160px; /* Ajustado para a altura do cabeçalho em dispositivos menores */
        }
    
        .nav-menu ul li a {
            font-size: 18px;
            padding: 8px 16px;
        }
    
        #seguros h1 {
            font-size: 28px;
            margin-bottom: 8px;
            text-align: center; /* Centraliza o texto */
        }
        
        .seguro-item h2 {
            font-size: 1.2em;
            margin: 15px 0;
            text-align: center; /* Centraliza o texto */
        }
    
        .seguro-item {
            max-width: 95%;
            padding: 8px;
        }
    
        #seguros .seguro-item img {
            max-height: 120px;
        }
    
        #historia-visao {
            display: flex;
            background-color: #000000;
            justify-content: space-between; /* ou space-evenly */
            background-image: url('Fondo negro y gris con superposición de cuadrados geométricos y estilo de papel de sombra _ Vector Premium.jpeg');
            margin: 0px 0;
            height: 1800px;
            align-items: center;
        }
    
        .retangulo {
            position: relative;
            top: -50x;
            height: 1700px; /* Aumenta a altura para dispositivos móveis */
            width: 37%; /* Ajusta a largura para dispositivos móveis */
        }
    
    }
}
