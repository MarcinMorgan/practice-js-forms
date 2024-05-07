const form = document.querySelector('form');

form.addEventListener('submit', function(element) {
    element.preventDefault();
    const formEmail = element.target.elements.login.value;
    checkEmail(formEmail);
    const formPass1 = element.target.elements.pass1.value;
    checkPassword(formPass1);
    const formPass2 = element.target.elements.pass2.value;
    checkIfSamePass(formPass1, formPass2);
    const formAccept = element.target.elements.accept.checked;
    checkAcceptance(formAccept);
})

function checkEmail(userEmail) {
    const formLogin = form.querySelector('[for="formLogin"]');
    if (userEmail.includes('@')) {
        formLogin.removeAttribute('style');
        console.log('done');
    }
    else {
        formLogin.setAttribute('style', 'color: red');
    }
}

function checkPassword (userPass1) {
    const formPass1 = form.querySelector('[for="formPass1"]');
    if (userPass1.length > 6) {
        formPass1.removeAttribute('style');
        console.log('done');
    }
    else {
        formPass1.setAttribute('style', 'color: red');
    }
}

function checkIfSamePass (userPass1, userPass2) {
    const formPass2 = form.querySelector('[for="formPass2"]');
    if (userPass1 === userPass2) {
        formPass2.removeAttribute('style');
        console.log('done');
    }
    else {
        formPass2.setAttribute('style', 'color: red');
    }
}

function checkAcceptance(userAcceptance) {
    const formAccept = form.querySelector('[for="formAccept"]');
    if (userAcceptance == true) {
        formAccept.removeAttribute('style');
        console.log('done');
    }
    else {
        formAccept.setAttribute('style', 'color: red');
    }
}