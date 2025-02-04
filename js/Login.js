document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const switchBtns = document.querySelectorAll('.switch-btn');
  const idProofType = registerForm.querySelector('[name="idProofType"]');
  const idProofNumber = registerForm.querySelector('[name="idProofNumber"]');
  const dateOfBirth = registerForm.querySelector('[name="dateOfBirth"]');

  // Function to switch between forms
  function switchForm(formType) {
    if (formType === 'login') {
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
      tabBtns[0].classList.add('active');
      tabBtns[1].classList.remove('active');
    } else {
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
      tabBtns[0].classList.remove('active');
      tabBtns[1].classList.add('active');
    }
  }

  // Function to check if user is 18+
  function isOver18(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age >= 18;
  }

  // Set max date for date of birth (today)
  const today = new Date().toISOString().split('T')[0];
  dateOfBirth.setAttribute('max', today);

  // ID Proof validation patterns
  const idPatterns = {
    aadhar: '^[0-9]{12}$',
    pan: '^[A-Z]{5}[0-9]{4}[A-Z]{1}$',
    passport: '^[A-Z]{1}[0-9]{7}$',
    driving: '^[A-Z]{2}[0-9]{13}$'
  };

  // Update ID number validation based on selected ID type
  idProofType.addEventListener('change', () => {
    const selectedType = idProofType.value;
    if (selectedType && idPatterns[selectedType]) {
      idProofNumber.pattern = idPatterns[selectedType];

      // Update placeholder based on selected ID type
      const placeholders = {
        aadhar: '12 digits number',
        pan: 'ABCDE1234F',
        passport: 'A1234567',
        driving: 'DL1234567890123'
      };
      idProofNumber.placeholder = placeholders[selectedType] || 'Enter ID number';
    } else {
      idProofNumber.removeAttribute('pattern');
    }
  });

  // Tab button click handlers
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchForm(btn.dataset.form);
    });
  });

  // Switch button click handlers
  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchForm(btn.dataset.form);
    });
  });

  // Form submit handlers
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);
    console.log('Login form submitted:', data);
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData);

    // Check age
    if (!isOver18(data.dateOfBirth)) {
      alert('You must be 18 or older to register.');
      return;
    }

    console.log('Registration form submitted:', data);
  });

  // Add age verification on date of birth change
  dateOfBirth.addEventListener('change', (e) => {
    const submitBtn = registerForm.querySelector('.submit-btn');
    const errorDiv = dateOfBirth.parentElement.querySelector('.error-message') ||
      document.createElement('div');
    errorDiv.className = 'error-message';

    if (!isOver18(e.target.value)) {
      errorDiv.textContent = 'You must be 18 or older to register';
      submitBtn.disabled = true;
      if (!dateOfBirth.parentElement.querySelector('.error-message')) {
        dateOfBirth.parentElement.appendChild(errorDiv);
      }
    } else {
      errorDiv.remove();
      submitBtn.disabled = false;
    }
  });
});