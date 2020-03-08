'use strict';

window.addEventListener('load', () => {
  const url = 'https://api.github.com/users';

  // Seleciona todos os formulários com a classe 'needs-validation'
  const form = document.querySelector('form.needs-validation');

  form.addEventListener('submit', async (e) => {
    // Impedimos o comportamento normal pois precisamos fazer a requisição antes
    e.preventDefault();
    e.stopPropagation();

    // Se o formulário não for válido apenas retornamos para evitar que o resto
    // do código seja processado
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    
    // =========== ESTRUTURA DO FETCH ===========
    // fetch(url)
    //   .then((response) => {
    //     console.log(response);

    //     // A função 'json()' lê a propriedade 'body' e o retorna em formato JSON
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // O parâmetro 'data' é o retorno da função 'json()'
    //     console.log(data);
    //   });
    
    // =========== MODOS DE ESCREVER O FETCH ===========
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    
    // fetch(url)
    //   .then((response) => {
    //     return response.json().then((data) => {
    //       console.log(data);
    //     })
    //   });
    
    // fetch(url)
    //   .then(async (response) => {
    //     const data = await response.json();
    //     console.log(data);
    //   });

    // const response = await fetch(url);
    // const data = await response.json();
    
    let data;
    try {
      const response = await fetch(url);
      // 'data' é o token que a requisição retorna
      data = await response.json();
    } catch (error) {
      document.querySelector('#login-error-alert').classList.add('show');
      return;
    }

    // Pegamos o valor do checkbox "Lembrar de mim", eles retornam um booleano
    const stayLoggedIn = document.querySelector('input#stay-logged-in').checked;
    setToken(data, stayLoggedIn);
  }, false);
});
