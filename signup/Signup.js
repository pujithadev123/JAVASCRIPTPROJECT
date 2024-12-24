
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

  
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regEmail === '') {
    regEmailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(regEmail)) {
    regEmailError.textContent = 'Enter a valid email address.';
    isValid = false;
  }

 
  if (regPassword === '') {
    regPasswordError.textContent = 'Password is required.';
    isValid = false;
  } else if (regPassword.length < 6) {
    regPasswordError.textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (isValid) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name: regName, email: regEmail, password: regPassword });
    localStorage.setItem('users', JSON.stringify(users));

    
    setTimeout(() => {
      alert("Registration successfull..")
      window.location.href = '../login/index.html';
    }, 1000);
  }
});
