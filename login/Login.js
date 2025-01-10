
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const loginEmail = document.getElementById('loginEmail').value.trim();
  const loginPassword = document.getElementById('loginPassword').value.trim();

  const loginEmailError = document.getElementById('loginEmailError');
  const loginPasswordError = document.getElementById('loginPasswordError');
  

  loginEmailError.textContent = '';
  loginPasswordError.textContent = '';
  

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === loginEmail);
   
  swal({
    title: "Login Successful!",
    text:  "Do you want to proceed to the next page?",
    icon: "success",
    button: "OK",
  }).then(() => {
    window.location.href = '../code/index.html';
  });
  
});
