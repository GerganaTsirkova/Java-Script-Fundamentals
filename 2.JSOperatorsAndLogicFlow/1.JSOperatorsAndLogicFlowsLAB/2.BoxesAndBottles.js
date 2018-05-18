function Boxes (bottles,bottlesPerBox) {
    let result=0.00;
    if(bottles>=bottlesPerBox)
    {
        result += Math.ceil(bottles/bottlesPerBox);
    }
    else {
        result = 1;
    }

    console.log(result);
}
Boxes(5,10)