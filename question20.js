const users = [
  { name: 'david', age: 25 },
  { name: 'dave', age: 30 },
  { name: 'chu', age: 35 }
];

const averageAge = users.reduce((total, user) => total + user.age, 0) / users.length;

console.log(averageAge); 
