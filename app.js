/* const str1 = "Kamrul ";
const str2 = "Hasan";
console.log("hello ", + str1 + str2);

// 1.  template string
console.log(`hello, ${str1} ${str2}`);

 */


/* // 2.  spread operator
const numbers = [1, 3, 4 , 5, 6]
const numbers2 = [12, 13];

// access elements by spread operator without array symbol
console.log(...numbers2, ...numbers); 

// access element by spread operator and make a new array 
console.log([...numbers2, ...numbers]); */



// 3. Object destructuring
// rest parameter
let animal = {
  name: 'dog',
  color: 'brown',
  age: 7,
};
// const {name, color, age} = animal;
const { name, ...rest } = animal || {}; // ...rest parameter console the rest of the elements and used empty object || {}  for prevent error. It occurs when object is undefined.

console.log(rest);


const sum = ({name, age}) => {
  console.log(name);
  console.log(age);
};
sum(animal);



