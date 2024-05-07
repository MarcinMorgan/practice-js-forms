const form = document.querySelector('form');
const labelList = form.querySelectorAll('label');
let checkList = [];

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
    labelList.forEach(markWrongInputs);
})

function checkEmail(userEmail) {
    if (userEmail.includes('@')) {
        checkList[0] = 'correct';
        console.log('done');
    }
    else {
        checkList[0] = 'wrong';
    }
}

function checkPassword (userPass1) {
    if (userPass1.length > 6) {
        checkList[1] = 'correct';
        console.log('done');
    }
    else {
        checkList[1] = 'wrong';
    }
}

function checkIfSamePass (userPass1, userPass2) {
    if (userPass1 === userPass2) {
        checkList[2] = 'correct';
        console.log('done');
    }
    else {
        checkList[2] = 'wrong';
    }
}

function checkAcceptance(userAcceptance) {
    if (userAcceptance === true) {
        checkList[3] = 'correct';
        console.log('done');
    }
    else {
        checkList[3] = 'wrong';
    }
}

function markWrongInputs(labels, index) {
    if (checkList[index] === 'correct') {
        labels.removeAttribute('style');
    }
    else {
        labels.setAttribute('style', 'color: red');
    }
}