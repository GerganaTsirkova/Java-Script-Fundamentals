function Sum(nums){
    let sum = 0;
    //for (let num of nums)
        //sum += num;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

    }
    let result = sum*1.2;
    let vat = sum*0.2;
    console.log(sum);
    console.log(vat);
    console.log(result);
}
Sum([1.20, 2.60, 3.50]);