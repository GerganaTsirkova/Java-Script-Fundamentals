function cone(radius,height) {
    let s = Math.sqrt(radius*radius+height*height);
    let v = (1/3)*(Math.PI*radius*radius*height);
    let area = Math.PI*radius*(radius+s);
    console.log(`volume = ${v}`);
    console.log(`area = ${area}`);
}
cone(3,5);