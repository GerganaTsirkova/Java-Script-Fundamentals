function  figureArea(w,h,W,H) {
    let [s1,s2,s3] = [w*h,W*H,Math.min(W,w)*Math.min(H,h)];
    let result = s1+s2-s3;
    console.log(result);
}
