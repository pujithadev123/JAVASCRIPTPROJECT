
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const regName = document.getElementById('regName').value.trim();
  const regEmail = document.getElementById('regEmail').value.trim();
  const regPassword = document.getElementById('regPassword').value.trim();

  const regNameError = document.getElementById('regNameError');
  const regEmailError = document.getElementById('regEmailError');
  const regPasswordError = document.getElementById('regPasswordError');

  regNameError.textContent = '';
  regEmailError.textContent = '';
  regPasswordError.textContent = '';

  let isValid = true;

  if (regName === '') {
    regNameError.textContent = 'Name is required.';
    isValid = false;
  }

  const emailPattern = 
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
;
  if (regEmail === '') {
    regEmailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(regEmail)) {
    regEmailError.textContent = 'Enter a valid email address.';
    isValid = false;
  }

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regPassword === '') {
    regPasswordError.textContent = 'Password is required.';
    isValid = false;
  } else if (!passwordPattern.test(regPassword)) {
    regPasswordError.textContent = 'Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.';
    isValid = false;
  }

  if (isValid) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name: regName, email: regEmail, password: regPassword });
    localStorage.setItem('users', JSON.stringify(users));

    swal({
      title: "Registration Successful!",
      text: "Do you want to proceed to the next page?",
      icon: "success",
      button: "OK",
    }).then(() => {
      window.location.href = '../login/index.html';
    });
  }
});

// Password visibility toggle (Now works properly!)
document.getElementById("icon").addEventListener("click", function () {
  let passwordInput = document.getElementById("regPassword");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
  }
});


