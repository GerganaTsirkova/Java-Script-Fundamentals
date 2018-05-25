function solve(arr) {
    let text = arr[0];
    let array = text.split(/[^A-Za-z_]+/g).filter(e=>e !=='');
    let obj = {};
    for (let word of array) {
        if(!obj.hasOwnProperty(word)){
            obj[word] = 1;
        }
        else {
            obj[word] ++;
        }
    }
    console.log(JSON.stringify(obj));
}