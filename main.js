// console Things
console.log("Hello World - for console logging");
console.warn("This is an warning");
console.error("This is an error");

// var, let , const

// type of Variable 

const name = "Kazi";
const age = 26;

// String Concatenation

const msg = "My name is " + name + ". And I am " + age;
console.log(msg);

// Template string

console.log(`My name is ${name}. And I am ${age}.`);

const s = "Hello,World";
console.log(s.split(','));

// Arrays
const fruits = ['apples', "mangoes", 1];
console.log(fruits);
console.log(fruits[1]);
fruits[3] = "grapes";
console.log(fruits);
fruits.push("banana");
console.log(fruits);
fruits.unshift("pom");
console.log(fruits);
fruits.pop();
console.log(fruits);

console.clear()
// Object Literals
const person = {
    fullName: 'Kazi Arafat',
    personAge: 26,
    company: 'Cognizant Technology Solutions',
    address: {
        street: "Newtown Action Area III",
        state: "WB",
    },
    hobbies: ['playing football', 'listening to music', 'gadget surfing']
};

person.email = "arafatkazi2448@gmail.com";

console.log(person)

console.log(person.fullName, person.personAge, person.hobbies[0], person.address.state);

const {
    fullName,
    personAge,
    address: {
        state
    }
} = person;
console.log(fullName);
console.log(state);

const todos = [{
        id: 1,
        text: "Meeting ",
        isCompleted: true
    },
    {
        id: 2,
        text: "Shopping ",
        isCompleted: false
    }
];

console.log(todos);

todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// Loops - for,while,for-of,foreach,map,filter

// for
for (let i = 0; i < 10; i++) {
    console.log(`For loop counter ${i}`);
};

//while
let i = 0;
while (i < 10) {
    console.log(`While loop counter ${i}`);
    i++;
};

// for of
for (let todo of todos) {
    console.log(todo);
    console.log(todo.text);
};

// foreach
console.log("forEach Application");
todos.forEach(function (todo) {
    console.log(todo)
});

// map - returns array 
console.log("Map Application");
const todosText = todos.map(function (todo) {
    return todo.text
});
console.log(todosText);

// filter - returns array based on condition
console.log("filter Application");
const completedTask = todos.filter(function (todo) {
    return todo.isCompleted === true
});
console.log(completedTask);

// chaining map and filter
const completedTaskText = todos.filter(function (todo) {
    return todo.isCompleted === true
}).map(function(cmpltd){
    return cmpltd.text.trim()
});
console.log(completedTaskText);
