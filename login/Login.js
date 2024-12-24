
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

  setTimeout(() => {
    alert("logged successfully.....")
    window.location.href = '../Code/index.html';
  }, 1000);
});
