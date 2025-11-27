document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const loginEmail = document.getElementById('loginEmail').value.trim();
  const loginPassword = document.getElementById('loginPassword').value.trim();

  const loginEmailError = document.getElementById('loginEmailError');
  const loginPasswordError = document.getElementById('loginPasswordError');

  loginEmailError.textContent = '';
  loginPasswordError.textContent = '';

  let isValid = true;

  if (loginEmail === '') {
    loginEmailError.textContent = 'Email is required.';
    isValid = false;
  }
  if (loginPassword === '') {
    loginPasswordError.textContent = 'Password is required.';
    isValid = false;
  }

  if (isValid) {
    // ✅ Get users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // ✅ Check if entered credentials match any registered user
    let matchedUser = users.find(
      user => user.email === loginEmail && user.password === loginPassword
    );

    if (matchedUser) {
      // ✅ Successful login
      Swal.fire({
        title: "Login Successful!",
        text: `Welcome back, ${matchedUser.name}!`,
        icon: "success",
        confirmButtonText: "OK"
      }).then(() => {
        window.location.href = '../code/index.html'; // 👈 go to home page
      });
    } else {
      // ❌ Wrong credentials
      Swal.fire({
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
        icon: "error",
        confirmButtonText: "Retry"
      });
    }
  }
});
