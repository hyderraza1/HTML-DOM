function validate(e) {
    e.preventDefault()
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgbox = document.getElementById('message')

    let message = '';

    if (email === '') {
        message = 'Please enter your email.';
        msgbox.style.color = 'red';
    } else if (pass === '') {
        message = 'Password is Required';
        msgbox.style.color = 'red';
    } else if (age === '') {
        message = 'Age must be 18 or above 18';
        msgbox.style.color = 'red';
    }

    else {
        message = "Login Success";
        msgbox.style.box = 'Blue';
    }
    msgbox.innerText=message
}