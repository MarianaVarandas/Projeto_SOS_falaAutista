
document.getElementById('formCadastro').addEventListener('submit', function(e) {
  e.preventDefault();

  let nomeAutista = document.getElementById('nomeAutista').value;
  let nomeContato = document.getElementById('nomeContato').value;
  let telefoneContato = document.getElementById('telefoneContato').value;

  localStorage.setItem('nomeAutista', nomeAutista);
  localStorage.setItem('nomeContato', nomeContato);
  localStorage.setItem('telefoneContato', telefoneContato);

  window.location.href = "principal.html";
});
