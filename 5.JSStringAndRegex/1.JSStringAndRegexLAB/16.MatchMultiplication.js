function solve(str) {
    let pattern = /( (-*[0-9]+\.*[0-9]*)\s*\*\s*(-*[0-9]+\.*[0-9]*) )/g;
    let regex = new RegExp(pattern,'g');
    let m = regex.exec(str);
    while (m){
        str = str.replace(/(-*[0-9]+\.*[0-9]*)\s*\*\s*(-*[0-9]+\.*[0-9]*)/,Number(m[2])*Number(m[3]));
        m = regex.exec(str);
    }
    console.log(str);
}
solve('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');