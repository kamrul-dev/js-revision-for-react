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


