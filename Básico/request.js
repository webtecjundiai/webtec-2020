function getUser() {
  fetch("https://api.github.com/users/Spinkers")
    .then(response => response.json())
    .then(data => {
      console.log(data); // Prints result from `response.json()` in getRequest
      setData(data);
    })
    .catch(error => console.error(error));
}

function setData(data) {
  document.getElementById("nome").innerText = data.name;
  document.getElementById("avatar").src = data.avatar_url;
  //   document.getElementById("city").innerText = data.location;
}
