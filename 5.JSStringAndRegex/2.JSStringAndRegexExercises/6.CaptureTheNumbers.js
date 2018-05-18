function capture(arr) {
    let arrNumbers = [];
    let pattern = /\d+/g;
    let regex = new RegExp(pattern,'g');
    for (let str of arr) {
        let match = regex.exec(str);
        while(match){
            arrNumbers.push(match);
            match = regex.exec(str);
        }
    }
    console.log(arrNumbers.join(' '));
}
capture(['The300',
'What is that?',
'I think it’s the 3rd movie.',
'Lets watch it at 22:45']);
