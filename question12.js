function array(numbers){
    let total = 0

    for(i=0; i<numbers.lenght ;i++){
        total += numbers[i]
    }

    return total

}

let nums = [2,4,9,7];
let result = array(nums)
console.log(result)
