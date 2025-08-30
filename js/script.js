// Adiciona um "ouvinte" que espera todo o HTML da página ser carregado
document.addEventListener('DOMContentLoaded', function() {

    // Encontra o formulário no HTML pelo seu ID
    const form = document.getElementById('contact-form');

    // Se o formulário existir na página
    if (form) {
        // adiciona um "ouvinte" para o evento de "submit" (envio)
        form.addEventListener('submit', function(event) {
            // Previne o comportamento padrão do formulário (que é recarregar a página)
            event.preventDefault();

            // Encontra os campos do formulário e a área de mensagem
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            const formMessage = document.getElementById('form-message');

            // Validação: verifica se algum dos campos está vazio
            if (nome === '' || email === '' || mensagem === '') {
                // Se estiver vazio, mostra uma mensagem de erro
                formMessage.textContent = 'Por favor, preencha todos os campos.';
                formMessage.style.color = 'red';
            } else {
                // Se todos os campos estiverem preenchidos, mostra uma de sucesso
                formMessage.textContent = 'Mensagem enviada com sucesso!';
                formMessage.style.color = 'green';
                
                // Limpa o formulário após o "envio"
                form.reset();
            }
        });
    }
});
