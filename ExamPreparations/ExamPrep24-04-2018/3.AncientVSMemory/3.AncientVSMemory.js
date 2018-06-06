function solve(input) {
    let arr = [];
    for (let line of input) {
        let innerArr = line.split(/\s+/).map(Number);
        for (let number of innerArr) {
            arr.push(number);
        }
    }
    let result = '';
    let length = 0;
    let index = 0;
    while (true){
        if (arr.includes(32656)) {
            index = arr.indexOf(32656)
        }
        else {
            break;
        }
        let counter =0;
        if ((arr[index + 1] === 19759) && (arr[index + 2] === 32763)) {
            length = Number(arr[index + 4]);
            for (let i = index + 6; i <= index + 6 + length; i++) {
                let ch = String.fromCharCode(arr[i]);
                result += ch;
                counter = i;
            }
            console.log(result);
            result='';
            arr.splice(0,counter)
        }
    }
}

solve(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0 ',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0']);