function modifyAverage(num) {
    let str = '';
    str += num;
    while (true){
        let sum =0;
        let ave = 0;
        let counter =0;
        for (let i = 0; i < str.length; i++) {
            counter++;
            sum+=Number(str[i]);
            if(i===str.length-1){
                ave += sum/counter;
                if(ave>5){
                    break;
                }
                else {
                    str += '9';
                    sum=0;
                    ave=0;
                    counter=0;
                    i=-1;
                }
            }
        }
        if(ave>5){
            break;
        }
    }
    console.log(str);
}
modifyAverage(101);