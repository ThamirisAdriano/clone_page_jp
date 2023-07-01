document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert('Mensagem enviada com sucesso!'); // Exibe uma mensagem de confirmação
    this.reset(); // Limpa os campos do formulário
  });