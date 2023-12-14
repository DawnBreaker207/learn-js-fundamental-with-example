function power(number, enter){
    if(enter===0){
        return 1;
    }
    else{
        return number *power(number, enter -1);
    }
}
console.log(power(2,3));