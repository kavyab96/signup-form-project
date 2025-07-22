document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', function (event) {

         //pass validation
          const password = document.getElementById('password');
         const passwordFeedback = document.getElementById('passwordFeedback');
        if(password.value.trim()){
           const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/;
            password.setCustomValidity('');
            if(!passwordPattern.test(password.value)){
                 password.setCustomValidity('Password must have minimum 8 charaters. should contain at least 1 letter , at least one digit and at least 1 special character.')
                 passwordFeedback.textContent = 'Password must have minimum 8 charaters. should contain at least 1 letter , at least one digit, at least 1 special character.';
            }
        }
         else{
            
            password.setCustomValidity('Please enter a password.');
            passwordFeedback.textContent = 'Please enter a password.';
        }
        
        

        // password compair       
        const confirmPassword = document.getElementById('confirmPassword');
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }

       

        // name
        const fullName = document.getElementById('fullName');
        const fullNameFeedback = document.getElementById('fullNameFeedback');
        if (fullName.value.trim() === "") {
            fullName.setCustomValidity('Please enter your full name.');
            fullNameFeedback.textContent = 'Please enter your full name.';
        } else {
            const namePattern = /^[A-Za-z]+( [A-Za-z]+)*$/;
            fullName.setCustomValidity('');
            fullNameFeedback.textContent = 'Please enter your full name.';
            if (!namePattern.test(fullName.value)) {
                fullName.setCustomValidity('Only letters and spaces are allowed')
                 fullNameFeedback.textContent = 'Only letters and spaces are allowed.';
            }
        }


        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');

    }, false);
});