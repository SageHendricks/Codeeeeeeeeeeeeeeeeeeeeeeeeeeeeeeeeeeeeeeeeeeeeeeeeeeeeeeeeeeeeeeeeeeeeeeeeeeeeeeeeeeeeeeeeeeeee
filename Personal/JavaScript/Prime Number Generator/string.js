var num = 1;
var x = 1;
function Primer(num){
    if (num%2 == 0){
        continue;
    }
    if (num%x == 0){
        continue;
    }
    else {
        console.log(num);
        x = num;
    }
}
for (i = 0; i < 1000; i++) {
    Primer(num);
}

Primer(3)