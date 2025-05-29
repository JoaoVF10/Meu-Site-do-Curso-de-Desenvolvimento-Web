document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form-contrato');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio do formulário para testar
      
      const email = form.querySelector('input[type="email"]').value;
      const mensagem = form.querySelector('textarea').value;
  
      // Cria o card de mensagem
      const messageCard = document.createElement('div');
      messageCard.classList.add('message-card');
  
      if (email && mensagem) {
        messageCard.classList.add('success');
        messageCard.innerHTML = "Dúvida enviada com sucesso! Nosso time entrará em contato em breve.";
        form.reset(); // Reseta os campos do formulário
      } else {
        messageCard.classList.add('error');
        messageCard.innerHTML = "Por favor, preencha todos os campos.";
      }
      
      // Adiciona o card na página
      document.body.appendChild(messageCard);
      
      // Remove o card após 5 segundos
      setTimeout(() => {
        messageCard.remove();
      }, 5000);
    });
  });
  