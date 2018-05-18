function formFiller(name,email,number,arr) {
    for (let row of arr) {
        row = row.replace(/<![A-Za-z]+!>/g,name) ;
        row = row.replace(/<@[A-Za-z0-9]+@>/g,email);
        row = row.replace(/<\+[A-Za-z]+\+>/g,number);
        console.log(row);
    }

}
formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);