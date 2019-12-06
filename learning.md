# Crash Course on Javascripts
---------------------------------------------------
 * A scripting language and conmforms to ECMAScripts.
 * Multi-paradigm
 * Runs on client/browser and on server as well(node.js)
 * Node.js Javascript runtime
 * it is both serverside and client side language. built FSA by node.js
 * Can built modile apps by using frameworks like React Native,NativeScript,Ionic
 * Desktop apps using Electron.js 

# Things to Learn
----------------------------------------------------------
  1. Variables and Data types
  2. Arrays
  3. Object Literals
  4. Methods for strings, arrays etc
  5. loops - for, while, forEach, map
  6. conditionals if ternary switch
  7. Functions Normal and Arrow
  8. OOP Prototypes and classes
  9. DOM (Document Object Model)selection
  10. DOM manipulation
  11. Events
  12. Basic Form Validation

# Basic Understandings
------------------------------------------------------------------------
 1. We should use browser's console to debug the pages. and in js file we should use console.log for debugging purpose.

 2. MDN documentation is best for JS documentation.

 3. console.log() prints element in an HTML like tree
 where as console.dir() prints element in JSON like tree. This is only for chrome.

 4. Variables in Js can be decleared in the way **var, let , const**
  
   var   | Not used frequenly as it is old method for declaring variable
   ------|------------------------------------------------------------------------
   let   | used to declare variable ECMA script 6 standard. We can re initialize 
         | valiables declared by let.
   ------|------------------------------------------------------------------------
   const |Used to declare variable, but variable can not be reinitialized.and must 
         | be initialized during declaration
   ------|-------------------------------------------------------------------------
  Use const for declaring variables unless you want to change them later.

 5. Data types: **String, Numbers, Boolean, null, undefined**.
    There is no float or decimal data types they all are numbers.

 6. For concatenating the string use template string format.

 7. Object literals are key-value pairs in js.

 8. We can use structing of the objects.
 
 ```javascript
 const person = {
    fullName: 'Kazi Arafat',
    personAge: 26,
    company: 'Cognizant Technology Solutions',
    address: 
    {
        street: "Newtown Action Area III",
        state: "WB",
    },
    hobbies : ['playing football','listening to music','gadget surfing']
 }
 ```
 we can use name age as variable like below

 ```javascript
 const {fullName, personAge, address: {state}} = person;
 console.log(fullName);
 console.log(state);
 ```
 Generally we use .(dot) operator to access the key from object.

 9. We can convert object literals to json using ***JSON.stringify(ObjectLiteral)*** method. and vice versa by using 
 ***JSON.parse(jsonString)***

 10. *** == vs === *** 
  > ==  This only checks the value.  
  > === This checks values as well as type.

 11. Array methods **pop(),shift(),splice()** :
 ***pop()*** : pop removes last element from array. 
 ***shift()*** : removes element from starting
 ***splice()*** : alters array by adding or removing elements from array.
  `syntax arrayElement.splice(startingIndex,no of elements to be removed,items to be added)`

 For more array methods and Array [please refer here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

