function validityChecker(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
    let firstResult = distance(x1,y1);
    if(firstResult%1===0){
        console.log(isValidPrint(x1,y1));
    }
    else {
        console.log(isInValidPrint(x1,y1));
    }
    let secondResult = distance(x2,y2);
    if(secondResult%1===0){
        console.log(isValidPrint(x2,y2));
    }
    else {
        console.log(isInValidPrint(x2,y2));
    }
    let thirdResult = distanceTwoPoints(x1,y1,x2,y2);
    if(thirdResult%1===0){
        console.log(isValid(x1,y1,x2,y2));
    }
    else {
        console.log(isInValid(x1,y1,x2,y2));
    }
    function distance(p,q) {
        return Math.sqrt( Math.pow((p-0),2) + Math.pow((q-0),2) );
    }
    function distanceTwoPoints(x1,y1,x2,y2){
        var a = Number(x1 - x2);
        var b = Number(y1 - y2);
        return Math.sqrt( a*a + b*b );
    }
    function isValidPrint(p,q) {
        return `{${p}, ${q}} to {0, 0} is valid`;
    }
    function isInValidPrint(p,q) {
        return `{${p}, ${q}} to {0, 0} is invalid`;
    }
    function isValid(x1,y1,x2,y2) {
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    }
    function isInValid(x1,y1,x2,y2) {
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
}
validityChecker([2,1,1,1]);