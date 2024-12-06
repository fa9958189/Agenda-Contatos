const form = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obtém os valores dos campos
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  // Verifica se os campos estão preenchidos
  if (!name || !phone) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Cria uma nova linha na tabela
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
  `;

  // Adiciona a nova linha à tabela
  contactList.appendChild(newRow);

  // Limpa os campos do formulário
  form.reset();

  // Foca no primeiro campo do formulário
  document.getElementById('name').focus();
});
