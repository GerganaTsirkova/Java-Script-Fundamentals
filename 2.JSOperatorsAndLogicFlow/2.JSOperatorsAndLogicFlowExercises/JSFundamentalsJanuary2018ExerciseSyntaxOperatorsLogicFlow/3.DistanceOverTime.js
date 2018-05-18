function distance(arr) {
    let time = arr[2]/3600;
    let s1 = arr[0]*time;
    let s2 = arr[1]*time;
    let distance = Math.abs(s1-s2);
    console.log(distance*1000);
}
distance([0,60,3600])