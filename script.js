/*
How do we assign a value to a variable?            A. With the key words -const- and -let-.
How do we change the value of a variable?          A. With the key word -let-  By using .pop  .upshift .push etc
How do we assign an existing variable to a new variable?  A. 
Remind me, what are declare, assign, and define?
What is pseudocoding and why should you do it?
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A. 90%
*/

//B.Strings///////////////////////////////////////////////////////////////////////////
let firstVariable = 'Hello World';
firstVariable = 23;
  let secondVariable = firstVariable
secondVariable = 'This is a new string'
/////What is the value of firstVariable?///// A. The last value assigned//////

let yourName = 'Patricia' 
let greeting = 'Hello, my name is'

console.log(greeting +  ` ${yourName}`)


//C.Booleans/////////////////////////////////////////////////////////////////////////

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a !== b);
  console.log(c - d === 41);
  console.log('Name' === 'Name');
 // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false !== false !== false !== false !== false !== true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  //////D. The Farm ////////////////////////////////////////////////////////////////////////////////////////

const animal = 'duck';
 if (animal === 'cow') {
    console.log('mooooo')
 }else {
    console.log('Hey! Youre not a cow.')
}
////////  E. Driver   ////////////////////////////////////////////////////////////////////////////////////////////

//let age= 16
//if (age >= 16) {
   // console.log('Here are the keys!');
//}else {
   // console.log(`Sorry, you're too young.`)
//}

////////// F. Loops ////////////////////////////////////////////////////////////////////////////////////////////
//1
//for(let i = 0; i <= 10; i++) {
   //console.log(i)
//}

//2
//for (let i = 10; i <= 400; i++) {
  //console.log(i)
//}

//3
//for( let i = 12; i < 4000; i += 3){
//  console.log(i)
//}
////// B. Get Even ///////////////////////////////////////////////////////////////////////////////////////////////////

for (let i =0; i <= 100; i++){

  if(i % 2 === 0 ) {
  console.log(`${i}`, 'is Even')

  }else {

  console.log(i)
  }
}

//////////// C. Give me Five ////////////////////////////////////////////////////

for (let i = 0; i <= 100; i++){
if(i % 5 === 0) {
  console.log('I found a', `${i}`, 'High five!')
}

else if (i % 3 === 0) {
  console.log(`I found a`, `${i}`, `Three is a crowd`)
}else if (i % 5 ===0 && i % 3 === 0)
   console.log(`I found a`, `${i}`, `High five! But Three is a crowd`)

    }

////////////D. Savings account//////////////////////////////////////////////////////////    

//1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.
let bank_account = 0
for (let i = 0; i <= 10; i++){
  bank_account += i
        console.log(bank_account);
    
}


//2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.
let bank_account2 = 0

for (let i = 0; i <= 100; i++){
  bank_account2 += i*2
        
}
console.log(bank_account2)

//Arrays % Control flow
/* A. Talk about it:
What are the things in an array called?   A. Properties
Do Arrays guarantee those things will be in order?   A. No
What real-life thing could you model with an array?  A. Anything that can be described */

//B. Easy Does It
//1.Create an array that contains three quotes and store it in a variable called quotes
const quotes = ['This is quote1', 'This is quote2', 'This is quote3']  


//C. Accessing elements
//Given the following array 
const randomThings = [1, 10, "Hello", true]

//1.How do you access the 1st element in the array?
//   A.console.log(randomThings[0])
//2.Change the value of "Hello"to "World"
randomThings.splice(2,1, 'World')
//3.Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

//////////D. Change Values //////////////////////////////////////////////////////////////////////////
//D. Change values
 /*Given the following array */  const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
/* A.*/let theEl = ourClass[2];
//Change the value of "Github" to "Octocat"d
/* A. */ ourClass.splice(4,1,'octocat')
//Add a new element, "Cloud City" to the array//
/*A. */ ourClass.push('Cloud City');
console.log(ourClass)

/////////E. Mix It Up /////////////////////////////////////////////////////////////////////////////////////
/*Given the following array: */ const myArray = [5, 10, 500, 20]

//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
/*A */  myArray.push('Aegon', 'nArray')
//Remove the 5 from the beginning of the array.
/* A. */ myArray.shift(0, 1)
//Add the string "Bob Marley"to the beginning of the array.
/* A. */ myArray.unshift('Bob Marley')
//Remove the string of your choice from the end of the array.
/*A. */ myArray.pop()
//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
/* A. */ Array.prototype.reverse()

console.log(myArray)
/////////// F. Biggie Smalls ////////////////////////////////////////////////////////////////////////////////
//Create a variable that contains an integer.
/*A.*/  let soco = 200
//Write an if ... elsestatement that:
/*A.*/ 
   if(soco < 100){
         console.log('little number')
}  else if (soco >= 100) {
        console.log('big number')
}

//console.log()s "little number" if the number is entered is less than 100
/*A.*/
//console.log()s big numberif the number is greater than or equal to 100.
/*A.*/

///////// G. Monkey in the Middle /////////////////////////////////////////////////////////////////////////////////
//Write an if ... else if ... else statement:
/*A.*/  let scared = 80
    if(scared < 5){
  console.log('Little Number!!!')
}else if(scared > 10) {
  console.log('Big Number!!!')
}else{
  console.log('Monkey')
}

//console.log()little numberif the number entered is less than 5.
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey".

//////// H. Whats in your Closet////////////////////////////////////////////////////////////////////////////////////

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
/*A.*/  console.log('Kristyn is rocking that'  + ' ' + kristynsCloset[2] + ' ' + 'today!' );

//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
/*A.*/ kristynsCloset.splice (6,0, 'raybans')

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
/*A.*/  kristynsCloset[5]= 'stained knit hat'
console.log(kristynsCloset)
//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
/*A.*/  let thomShirt = thomsCloset[0][0]
console.log(thomShirt)
//In the same way, access one item from Thom's pants array.
/*A.*/  let thomPants = thomsCloset [1][0]
//console.log(thomPants)
//Access one item from Thom's accessories array.
/*A.*/let thomAnt = thomsCloset[2][0]
/////console.log(thomAnt)

//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
/*A.*/  console.log(`Thom is looking fierce in a ${thomShirt}, ${thomPants} and ${thomAnt}!`)

//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
/*A.*/ thomsCloset[1][2] = 'Footie Pajamas'
console.log(thomsCloset[1][2]);

///////////IV. Functions /////////////////////////////////////////////////////////////////////////////////////////

const printGreeting = (name) => {

  console.log(`Hello dear ${name}!`)
}

printGreeting('Patrica')

///////////// B. pringCool   ////////////////////////////////////////////////////////////////////////////////////

const printCool = (name) => {
      return `${name} is cool!!!!!`
}
console.log(printCool('Victoria'));

///////////  C.  calculateCube   //////////////////////////////////////////////////////////////////////////////////////////


const calculateCube = (number) => {
  return number * number * number
}
console.log(calculateCube(5));

//////////    D. isVowel    //////////////////////////////////////////////////////////////////////////////////////////////////

const isVowel = (a, e, i, o, u) => {
    
    for(let i = 0; i < isVowel.length; i++) {
      if(i == isVowel) {
        return true;
      }else {
        return false
      }
    }
   
}

console.log(isVowel[a])

/////////  E. getTwoLengths  /////////////////////////////////////////////////////////////////////////////////////////////

const getTwoLengths = (str1, str2) => {
  return [str1.length, str2.length];
};
console.log(getTwoLengths("Hank", "Hippopopalous"));
 
/////////////   F. getMultipleLengths /////////////////////////////////////////////////////////////////////////////////////////////

const getMultipleLengths = (arr) => {
  let newArray = [];
  arr.forEach((element) => {
    newArray.push(element.length);
  });
  return newArray;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
 
/////////// G.  maxOfThree  /////////////////////////////////////////////////////////////////////////////////////////////////////////

const maxOfThree = (num1, num2, num3) => {
  let max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }
  return max;
};
console.log(maxOfThree(1, 90, 13));

////////////  H. printLongestWord   //////////////////////////////////////////////////////////////////////////////


//const maxWord = (word) => {
//	let longestWord = arr[0];
//	for(let i = 0; i < str.length;i++){
//		word = arr[i];
//		if(word.length > longestWord.length){
		//	longestWord = word;
//		}

//		}return word;
	//}
	

//console.log(word("BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"));

const user = {
  name: 'Kitten',
  email: 'hulaa@gmail.com',
  age: '2',
  purchased: ''

};
user.email = 'sdfkjskdfj@asldfkj.com';
user.location = '';
//user.purchased.push('carbohydrates', 'peace of mind', 'Merino Jodhyphurs')
//console.log(user.purchased[2])

////////////  E. Object within object  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

user.friend = { name: "Jane Doe", email:"jane@biz.biz", age: 23, purchased:[], location:'Somewhere in America'}
console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push("The One Ring")
user.friend.purchased.push('A Latte')
 console.log(user)

 ///////// F. Loops ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 for (let i = 0; i < user.purchased.length; i++){
     console.log(user.purchased[i])
for (let i = 0; i < user.friend.purchased.length; i++){
         console.log(user.friend.purchased[i])}


}