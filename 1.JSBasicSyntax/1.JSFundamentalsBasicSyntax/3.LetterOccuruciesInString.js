function  String(input, letter) {
    let counter = 0;
    for (let inputElement of input) {
        if(inputElement===letter){
            counter++;
        }

    }
    console.log(counter);
}
