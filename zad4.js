const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const average = (...args) => args.reduce((sum, item) => sum + item) / args.length;
console.log(`Average of grades is ${average(...grades)}`);