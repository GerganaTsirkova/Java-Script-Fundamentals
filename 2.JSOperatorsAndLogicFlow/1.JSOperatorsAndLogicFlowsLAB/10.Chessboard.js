function  chessboard(num) {
    console.log('<div class="chessboard">');
    for (let i = 1; i <= num; i++) {
        console.log('  <div>');
        if(i%2 !==0)
        {
            for (let j = 1; j <= num; j++) {
                if(j%2 !== 0){
                    console.log('    <span class="black"></span>');
                }
                else{
                    console.log('    <span class="white"></span>')
                }
            }
        }
        else {
            for (let j = 1; j <= num; j++) {
                if(j%2 !== 0){
                    console.log('    <span class="white"></span>');
                }
                else{
                    console.log('    <span class="black"></span>')
                }
            }
        }
        console.log('</div>');
    }
    console.log('  </div>');
}
chessboard(2)