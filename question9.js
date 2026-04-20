let student = {
    name: "david",
    age: 40,
    grade: 'A'
};


let count = 0

for(let key in student){
    if (student.hasOwnProperty(key)){
        count++
    }
    
}
console.log(count);
