function concatenateReverse(arr) {
    arr = arr.join('').split('').reverse().join('');
    console.log(arr);
}
concatenateReverse(['I', 'am', 'student']);