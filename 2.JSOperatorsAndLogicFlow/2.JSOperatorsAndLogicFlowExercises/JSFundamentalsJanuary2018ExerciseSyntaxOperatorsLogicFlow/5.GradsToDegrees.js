function degrees(grads) {
    grads = grads%400;
    let degrees =0;
    if(grads<0){
        degrees += (9/10)*grads+360;
    }
    else {
        degrees += (9/10)*grads;
    }
    console.log(degrees);
}
degrees(-50)