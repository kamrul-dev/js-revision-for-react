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



/* // 3. Object destructuring
// rest parameter
let animal = {
  name: 'dog',
  color: 'brown',
  age: 7,
};
// const {name, color, age} = animal;
const { name, ...rest } = animal || {}; // ...rest parameter console the rest of the elements and used empty object || {}  for prevent error. It occurs when object is undefined.

console.log(rest);
 */

/* 
const sum = ({name, age}) => {
  console.log(name);
  console.log(age);
};
sum(animal); */


const dreamGirl = [
  {
    dream1: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: "https://www.facebook.com/",
            followers: "12545",
            status: "single",
            friendsList: [
              { name: "rofik" },
              { name: "jobbar" },
              { name: "salam" },
              { name: "borkot" },
              undefined,
            ],
          },
        },
        { instagram: "https://www.instagram.com/" },
        { twitter: "https://twitter.com/" },
        { github: "https://github.com/" },
        { phone: ["01254823212", "02152457"] },
      ],
    },
  },
];

// console.log(dreamGirl[0].dream1.contactInfo[0].facebook.friendsList);

const friends = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList;
console.log(friends);

for(const friend of friends){
  console.log(friend);
}

/* 
const numbers = [
  'hero',
  'manna',
  'salman',
  'rina khan',
  'mis daina'
]
for(let i = 0; i < numbers.length; i++){
  const element = numbers[i];
  console.log(element);
}

for(const element of numbers){
  console.log(element);
}
 */

const object = { a: 1, b: 2, c: 3 };
// console.log(object["a"]);   //return value of a

for (const property in object) {
  // console.log(property);
  console.log(object);
  console.log(object[property]);
    console.log(`${property}: ${object[property]}`);
}



// const numbers = [1, 2, 3 , 4, 5, 6, 7, 8, 9];
// /* const temp = [];
// for(const element of numbers){
//   const square = element * element;
//   temp.push(square); 
// }
// console.log(temp);; */

// const result = numbers.map( x => x * x);
// console.log(result);


const products = [
  { id: 1, name: "apple", price: 500, color: "golden" },
  { id: 2, name: "xiaomi", price: 124, color: "black" },
  { id: 3, name: "samsung", price: 200, color: "black" },
  { id: 4, name: "samsung2", price: 200, color: "black" },
  { id: 5, name: "lenovo", price: 300, color: "pink" },
  { id: 6, name: "xiaomi", price: 100, color: "pink" },
  { id: 7, name: "lenovo", price: 300, color: "pink" },
];

const result = products.filter((pd) => pd.id !== 1);
console.log(result);