function username(arr) {
    let users = [];
    for (let i = 0; i < arr.length; i++) {
        let email = arr[i].split('@');
        let user = email[0]+'.';
        let secondPartEmail = email[1];
        let arrayOfSecondPart = secondPartEmail.split('.');
        for (let j = 0; j < arrayOfSecondPart.length; j++) {
            let str=arrayOfSecondPart[j];
            user += str[0];
        }
        users.push(user);
    }
    console.log(users.join(', '));
}
username(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);