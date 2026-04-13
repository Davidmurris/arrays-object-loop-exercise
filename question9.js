let student = {
    name: "david",
    age: 40,
    grade: 'A'
};

for(let key in student){
    console.log(key + ':' + student[key].length)
    console.log(key.length)
}