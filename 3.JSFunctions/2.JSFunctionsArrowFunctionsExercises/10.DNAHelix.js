function dna(num) {
    for (let i = 1; i <= num; i++) {
        switch (i%5) {
            case 1: one(i);break;
            case 2: two(i);break;
            case 3: three(i);break;
            case 4: four(i);break;
            case 0: five(i);break;
        }
    }
    function one(n){
        switch (n%4) {
            case 1:
                console.log('**AT**');
                break;
            case 2:
                console.log('*A--T*');
                break;
            case 3:
                console.log('A----T');
                break;
            case 0:
                console.log('*A--T*');
                break;
        }
    }
    function two(n){
        switch (n%4) {
            case 1:
                console.log('**CG**');
                break;
            case 2:
                console.log('*C--G*');
                break;
            case 3:
                console.log('C----G');
                break;
            case 0:
                console.log('*C--G*');
                break;
        }
    }
    function three(n){
        switch (n%4) {
            case 1:
                console.log('**TT**');
                break;
            case 2:
                console.log('*T--T*');
                break;
            case 3:
                console.log('T----T');
                break;
            case 0:
                console.log('*T--T*');
                break;
        }
    }
    function four(n){
        switch (n%4) {
            case 1:
                console.log('**AG**');
                break;
            case 2:
                console.log('*A--G*');
                break;
            case 3:
                console.log('A----G');
                break;
            case 0:
                console.log('*A--G*');
                break;
        }
    }
    function five(n){
        switch (n%4) {
            case 1:
                console.log('**GG**');
                break;
            case 2:
                console.log('*G--G*');
                break;
            case 3:
                console.log('G----G');
                break;
            case 0:
                console.log('*G--G*');
                break;
        }
    }
}
dna(10)