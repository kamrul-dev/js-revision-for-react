/* const data = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => console.log(data));
}
data();
 */

// ternary operator
const name = "kamrul";
console.log(name ? "true return" : "false return");

// let ,const 


//let
// ========
// redeclare is not possible
// reassign is possible
// has block scope

let a = 5;
a = 6;

console.loga(a); //output 6



// const 
// redeclare is not possible
// reasssign is not possible
// has block scope

const x = 100;
const x = 200; // redeclare is not possible in const
x = 100 // resasssng not possible in const