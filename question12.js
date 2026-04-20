function array(num){
    let total = 0
    

    for(i=0; i<num.lenght ;i++){
        total += num[i];
    }

    return total;

}

let nums = array([2,4,9,7]) ;
console.log(nums)
