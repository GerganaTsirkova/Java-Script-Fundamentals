function emailValidation(str) {
    let regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g;
    if(regex.test(str)){
        console.log('Valid');
    }
    else {
        console.log('Invalid');
    }
}
emailValidation('valid@email.bg');