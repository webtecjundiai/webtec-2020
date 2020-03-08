'use strict';

function getToken() {
  const localStorageToken = localStorage.getItem('token');
  const sessionStorageToken = sessionStorage.getItem('token');

  // ======== FORMA REDUZIDA ========
  return localStorageToken || sessionStorageToken || null;

  // ======== FORMA EXTENDIDA ========
  // if (localStorageToken) {
  //   return localStorageToken;
  // }

  // if (sessionStorageToken) {
  //   return sessionStorageToken;
  // }

  // return null;
}

function setToken(token, rememberMe) {
  /*
    O Storage é um modo de armazenar dados a Web Storage API, que é um mecanismo
    fornecido pelos navegadores para armazenar dados simples de forma mais
    eficiente que os cookies.
    O localStorage guarda os dados após o navegador ser fechado, já no
    sessionStorage os dados são perdidos.
  */

  if (rememberMe) {
    localStorage.setItem('token', token);
  } else {
    sessionStorage.setItem('token', token);
  }
}
