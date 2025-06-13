// Número de celular para WhatsApp
const numeroWhatsApp = '+5517996149096';

// Alterna a visibilidade do formulário de contato
function toggleForm(event) {
  event.preventDefault();
  const form = document.getElementById('formContato');

  // Alterna exibição
  if (form.style.display === 'block') {
    form.style.display = 'none';
  } else {
    form.style.display = 'block';

    // Foca no campo de mensagem após mostrar o formulário
    setTimeout(() => {
      const campo = document.querySelector('.campo-mensagem');
      if (campo) campo.focus();
    }, 50);
  }
}

// Envia mensagem via WhatsApp
function enviarMensagem(e) {
  e.preventDefault();

  const campo = document.querySelector('.campo-mensagem');
  const mensagem = campo.value.trim();

  if (!mensagem) {
    alert("Digite uma mensagem antes de enviar!");
    campo.focus();
    return;
  }

  // Abre o link do WhatsApp com a mensagem codificada
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');

  // Limpa e esconde o formulário
  document.getElementById('formContato').reset();
  document.getElementById('formContato').style.display = 'none';
}