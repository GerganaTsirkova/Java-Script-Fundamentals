function round(arr){
    if(arr[1]>15){
        arr[1]=15;
    }
    let result = arr[0].toFixed(arr[1]);
    console.log(Number(result));
}
round([10.5, 3])