// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(data => {
    // append the id value to the DOM
    document.body.innerHTML = data.id;
  })
  .catch(error => {
    // append the error message to the DOM
    document.body.innerHTML = error.message;
  });
}
