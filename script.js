// element selectors
const email = document.getElementById('email');
const button = document.querySelector('.notify');
const error = document.querySelector('.error')
button.addEventListener('click', () => {
    if(email.value === ''){
        error.style.display = 'block';
        email.placeholder = "example@email/com";
        email.style.borderColor = 'red';
    }
})

// to fade out error messages when clicked on the email box
email.addEventListener('focus', () => {
    error.style.display = "none";
    email.placeholder = "Your email address";
    email.style.borderColor = 'hsl(0, 0%, 59%)';
})