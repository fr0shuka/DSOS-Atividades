 // Função para mostrar a caixa de alerta
 function showAlert() {
    alert("Olá! Esta é uma caixa de alerta.");
}

// Função para trocar a imagem ao passar o rato
function changeImage(img, newSrc) {
    img.src = newSrc;
}

// Função para repor a imagem original quando o rato sai
function resetImage(img, originalSrc) {
    img.src = originalSrc;
}

// Função para mostrar/ocultar mais detalhes ao clicar
function showDetails() {
    var detailsDiv = document.getElementById("details");
    if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
    } else {
        detailsDiv.style.display = "none";
    }
}

        const divReplace = document.getElementById('divReplace');

        // Evento mouseover
        divReplace.addEventListener('mouseover', function() {
            divReplace.style.backgroundColor = '#ead5ac'; // Muda a cor de fundo
            divReplace.textContent = 'Você está aqui!'; // Altera o texto
        });

        // Evento mouseout
        divReplace.addEventListener('mouseout', function() {
            divReplace.style.backgroundColor = '#f4f4f4'; // Restaura a cor de fundo
            divReplace.textContent = 'Passe o mouse aqui!'; // Restaura o texto original
        });