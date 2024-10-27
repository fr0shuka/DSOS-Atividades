/**
     * Função para validar o formulário
     * @returns {boolean} Retorna true se o formulário for válido, false caso contrário
     */
function validateForm() {
    // Limpa mensagens de erro anteriores
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';

    // Obtém os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    let valid = true;

    // Validação do nome
    if (name === '') {
        document.getElementById('nameError').innerText = 'O nome é obrigatório.';
        valid = false;
    }

    // Validação do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Por favor, insira um e-mail válido.';
        valid = false;
    }

    // Validação do telefone
    if (!/^\d{9}$/.test(phone)) {
        document.getElementById('phoneError').innerText = 'O número de telemóvel deve ter exatamente 9 algarismos.';
        valid = false;
    }

    return valid;  // Retorna false se algum campo não for válido, impedindo o envio do formulário
}

