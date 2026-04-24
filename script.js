let a = `sulthan pp`
console.log(typeof (a))

let x = 20
x = 25
console.log(x)

// // const b = 30
// // b = 35

// console.log(b)

var c = 50
console.log(c)

let success = false
console.log(typeof (success));

let obj =

{
  name: "sulthan pp",
  age: "21"
}

console.log(obj);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let array1 = ["apple", "orange", "grape"]
console.log(array);
console.log(array1);

//arithmatic operators

console.log(5 + 2);
console.log(5 - 2);
console.log(5 / 2);
console.log(5 * 2);
console.log(10 % 5);
let z = 10
console.log(z--);
console.log(z--);
let s = 10
console.log(s++);
console.log(s++);


// assignment operators

let f = 10

console.log(f += 5);
console.log(f -= 5);
console.log(f *= 5);
console.log(f /= 5);
console.log(f %= 5);


// comparison operators

let p = 5
let b = `5`

console.log(p == b);
console.log(p === b);
console.log(p != b);
console.log(p !== b);

let n = 10
let m = 10

console.log(p > b);
console.log(p < b);
console.log(n >= m);
console.log(n <= m);

//logical operators

console.log(5 > 3 && 4 < 10);
console.log(5 > 10 || 4 < 10);
console.log(!(5 > 3));

//ternary opertors 

let age = 15
let result = (age >= 18) ? "adult" : "minor"
console.log(result);

// questions....


// let num2 = 17
//  let result2=(num2%2==0)?"even":"odd" 
// console.log(result2);



// let k=20
// let l=5

// console .log(20+5);
// console .log(20-5);
// console .log(20*5);
// console .log(20/5);
// console .log(20%5);

// console .log(k+=l);
// console .log(k-=l);
// console .log(k*=l);
// console.log(k%=l);



// let mark = 67
// let result3=(mark>=90)?"a":"b"
// console .log(result3);

// let mark1 = 67
// let result4=(mark1>=75)?"b":"c"
// console .log(result4);


// let mark2 = 67
// let result5=(mark2>=50)?"c":"d"
// console .log(result5);


//conditional statements

let q = 20

if (q > 11) { console.log("q is greater"); }

else { console.log(" 11 is greater"); }

//

if (30 > 11) { console.log("30 is greater"); }

else { console.log(" 11 is greater"); }


//nested if

let agenes = 30
let licence = false

if (agenes >= 18) {
  console.log("you are eligible for driving");
  if (licence) {
    console.log("you can drive");

  } else {
    console.log("you can't drive");
  }
} else { console.log("you are not eligible"); }


//else if

let marks = 80
if (marks >= 100) {
  console.log("A");
}
else if (marks >= 90) {
  console.log("B");
} else if (marks >= 80) {
  console.log("c");
} else {
  console.log("failed");
}


// //??? if else odd or even

// // let number=20

// // if(number%2==0)
// //  { console.log (" number is even");}

// // else
// //   { console .log ("number is odd");}



// 1)

// let ageticket = 10
// let membershipcard = false

// if (ageticket >= 18) {
 
//   if (membershipcard) {
//     console.log(" ticket price is 200");

//   } else {
//     console.log("ticket price is 250");

//   }
// } else { 
//   if(membershipcard){
//     console.log("ticket price is 100");
    
//   }else{
//     console.log("ticket price 150");
    
//   }
// }




// let amount =1000
//   if (amount>=5000){
//     let price = amount*0.2
//     let total = amount - price
//     console .log("premium , 20% discount",total);
//   }


// else if (amount>=2000){
//   let price = amount*0.05
//   let total = amount - price
//    console .log("5% discount",total);
// }
// else if(amount>=1000){
//   let price = amount * 0.03
//   let total = amount-price
//    console .log("festival day,3 % discount",total);
// }
// else{
//    console .log("no discount");

// }

//switch case

let j = "monday"

switch(j){
case "sunday":
  console .log ("holiday");
   
  break ;

  case "monday":
    console .log("monday is a working day");
    break ;

    case " tuesday":
console .log(" tuesday is working day");

break;

default:
  console.log("not a valid day");
}



///loops


// 1)for loops
for (let i=0;i<=10;i++){
  console.log(i);
}



//2) while loop

let v=0
while (v<=8){
  console .log(v);
  v++
}

//3) do while loop

let h = 0
do {
  console .log(h);
  h++
}while(h<=6)


// for (let h=0;h<=20;h++)
// {
//   if(h%2==0)
//     console .log(h);
// }


//for in and off loop

let string= "sulthan pp"
for( let words in string) {
  console .log (words);
}

let string2= "sulthan pp"
for( let words of string2) {
  console .log (words);
}


let string3= [10,20,30,40,50]
for( let words in string3){
  console .log (words);
}
let string4= [10,20,30,40,50]
for( let words of string4){
  console .log (words);
}

//nested for loop

for (let  l=0;l<=10;l++){
  console .log(l);
  for (let o=1;o<=6;o++){
    console .log(`*`)
  }
}


///for loop experiment ; pattern print

let row= 5
for( let i=1;i<=row;i++){
  let pattern = ``
  for (j=1;j<=i;j++){
    pattern += "*"
  }
  console.log(pattern);
}


// function syntax

function  abc (){
  console.log("hello sulthaan");
}
abc()

// function with parameters

function paraams (name){

  console.log("hello" + name);
  
}
paraams("softroniics")


//function with return

function newfn(a,b){
  return a+b
}
console.log(newfn(11,3));


//function with expression

const fn = function(){

  console.log("function expression");
}
fn()


// arrow function

const arrowfn= () => {

 console.log("hello arrow function");
  
}
arrowfn()


// arrow function single line

const sum = (a,b)=> a+b
console .log (sum(3,6));


//callback function

function calculate (a,b,sum){
  console.log("finish the function");
  return sum(a,b)
}
function add (x,y){
  return x+y
}
console.log(calculate(10,3,add));


//closure

function outer(){
let count = 3
function inner(){
  count++
  console.log(count);
}
     return inner

}
let counter = outer ()
counter()
counter()
counter()

//find the sum of n number of natural numbers

function sumofnaturals(n){
let sum=0
for (let i=0;i<=n;i++){
  sum+=i
}
return sum
}
console.log(sumofnaturals(3));


//??find the sum of even number of natural numbers

function evennumbers(n){
  let sum=0
  for ( let i=2;i<=n;i+=2){

    console.log(i);
    sum+=i
  }

  return sum
}
console.log(evennumbers(57));


//array methods

const array2 =  [1,3,2,5,4]
console.log(array2);
console.log(array2.length);
console.log(array2.reverse());
console.log(array2.sort());
array2.push(10)
console.log(array2);
array2.pop()
console.log(array2);
array2.unshift(7)
console.log(array2);
array2.shift()
console.log(array2);

//using in double digit numbers

const array3 =  [1,8,23,82,67,74]
array3.sort((a,b)=>a-b)
console.log(array3);

for( let i=0;i<array3.length;i++){
console.log(array3[i]);
}

//slice and splice

const array5 = [1,3,4,6,7,8,4]
const slices = array5.slice(0,5)
console.log(slices);

const splice = array5.splice(0,4)
console.log(splice);

console.log(array5);

//some and every


const sub = [{name:`A`,score:60},{name:`B`,score:30},{name:`c`,score:50}]
const info = sub.some(function(obj){
  if(obj.score>50){
return true
  } else{

    return false
  }
})
console.log(info);

//joining
let array6 = [`mango`,`apple`,`orange`]
let joined = array6.join(",, ")
console.log(joined);
array6[2]="watermelon"
console.log(array6);


//destructuring
//taking values from an array and stored them in a varriables

let array7 = [10,20,30,40]
let  [A,...rest] = array7

console.log(rest);


let x1=20
let y1=30
console.log([x1,y1]);

[x1,y1] = [y1,x1]
console.log(x1);
console.log(y1);


//array functions
//higher order functions

//1.map 
//returns a new array

const nums=[1,2,3,4]
const result2= nums.map((num)=>num*3)
console.log(result2);

//2.foreach
//doesn't return anything

const nums1=[1,2,3]
nums1.forEach((num)=>console.log(num*2))

//3.filter
const nums2=[1,2,3,4]
const result7=nums.filter((num)=>num%2==0)
console.log(result7);

//4.find
const nums3=[1,2,3,4]
const result8=nums2.find((num)=>num%2==0)
console.log(result8);


//5.reduce

const nums5=[1,2,3,4]
const result9= nums.reduce((accumulator,current)=>{
  return accumulator+current
},0)
console.log(result9);

///works experience
1//
const names3 = [ "alex","john","baasith","sidan"]
const uppercasenames = names3.map((name)=>name.toUpperCase());

console.log(uppercasenames);

2//
const ages = [12, 17, 18, 21, 15, 30,40]
const resultages=ages.filter(age => age >=18)

console.log(resultages);

3//
const marks1 = [65,70,54,78,100,92,201]
const highestmark = marks1.reduce(( max, current)=>{
return current > max ? current : max
})
console.log(highestmark);

4//
const numbers1 = [1,23,43,45,67,78,109]
const maximumvalue = numbers1.reduce((max, current)=>{
return current > max ? current : max
})
console.log(maximumvalue);

5//
const strings = ["banana","apple","cherrry"]
const capitalized = strings.map(word=>
  word.charAt(0).toUpperCase() + word.slice(1)
)
console.log(capitalized);

6// 
const words1 = ["apple","bat","banana","cat","sulthaan"]
const minLength = 5
const lengthwords = words1.filter(word => word.length > minLength)
console.log(lengthwords);

7//

const numbers22 = [1,2,3,4,5,6,7,8,9,10]
const evenodd = numbers22.map(num =>
  num % 2 === 0 ? "even":"odd"

);
console.log(evenodd);

8//
const wordslg = ["Apple","Banana","Kiwi","Dates","strawberry"]
const longestword = wordslg.reduce((longest, current)=>{
return current.length > longest.length ? current:longest;
})

console.log(longestword);

9//
const numbersss = [1, -2, 3, -4, 5, -6]
const negtvenumber = numbersss.map(num=> -num);
console.log(negtvenumber);

10//
const numberssss = [-2,1,-4,5,-7,8,-9]
const postnumbers = numberssss.filter(num => num > 0)

console.log(postnumbers);

//string 

//1.length

let string1 = "hello sulthaaan"
console.log(string1.length);

//2.toUpperCase()/toLowerCase()

let text = "hello madam"
console.log(text.toUpperCase());
console.log(text.toLowerCase());

//3.trim ; remove spaces
//  from start and end,

let messg = "       hi,javascript       "
console.log(messg);
console.log(messg.trim());

////4. slice ( start / end)
//extract part of string
let string31 = "javascriptttttttttt"
console.log(string31.slice(2,12));

//or

let string32 = "javaascriptttt"
console.log(string32.slice(2,-5));


//5. substring (start, end)
// similar to slice ( no negative index)

let strnggs = "javascript"
console.log(strnggs.substring(0,-5));

//6. replace 
//replace first match only

let text2 = " i like javascript"
console.log(text2.replace("like","love"))

//replaceall
let text3 = "hi hi hi"
console.log(text3.replaceAll("hi","hello"));

//7. includes ()
//  check  if text exists (true/false)
let msg = "hello , boss"
console.log(msg.includes("boss"));

//8.indexoff()/ last index of()

let text44 = "hello boss boss"
console.log(text44.indexOf("boss"));
console.log(text44.lastIndexOf("boss"));


//9.split()
// convert string to array
let data = "apple, banana, mango"
console.log(data.split(","));

//10.charAt (index) 
let strng33 = "boss"
console.log(strng33.charAt(0));

//11.concat
let aa = " hello"
let bb = " boss"
console.log(aa.concat(bb));
//or
console.log(aa+bb);

//12. startswith()/endswith()
let texttt = "javaScript"
console.log(texttt.startsWith("javs"));
console.log(texttt.endsWith("Script"));

//13.repeat()

let str11 = "hi";
console.log(str11.repeat(4));

//14. vowels

let strs = "javascript"
let count = 0
let vowels = `Aaesopt`
for(let i=0;i<=strs.length;i++){
if(vowels.includes(strs[i]))
count++
}
console.log("vowels",count);


let strs1 = "hello"
let rev = ``
for( let i=strs1.length-2;i>=0;i--){

  rev+=strs1[i]
}
console.log(rev);


//? palindrome
 function checkpalindrome(word){
const reversed =word.split(``).reverse().join(``);
if(word === reversed ){
return "it is a palindrome"
}else {
  return "it is not a palindrome"
}
 }
 console.log(checkpalindrome("malayalam"));
 
 console.log(checkpalindrome("akshay"));
 
//demo function for ppt

//  function  abc (){
//   console.log("hello hi sulthaan");
// }
// abc()


// function paraams (name){

//   console.log("hello" + name);
  
// }
// paraams("softroniics")



// function newfn(a,b){
//   return a+b
// }
// console.log(newfn(11,3));



// const fn1 = function(){

//   console.log("function sulthaan");
// }
// fn1()



// const arrowfn1= () => {

//  console.log("hello arrow function");
  
// }
// arrowfn1()



// function calculate (a,b,sum){
//   console.log("finish the function");
//   return sum(a,b)
// }
// function add (x,y){
//   return x+y
// }
// console.log(calculate(10,3,add));



// function outer(){
// let count = 4
// function inner(){
//   count++
//   console.log(count);
// }
//      return inner

// }
// let counter1 = outer ()
// counter1()
// counter1()
// counter1()


//object methods

let students = {

name : "sulthaan",
age : 20,
place:"malappuram",
address : {
pin : 4452,
phone:704489549

    }
}
console.log(students);


console.log(students["age"]);
console.log(students["place"]);

console.log(students.age);
console.log(students.address.pin);

students.age = 22
console.log(students.age);






const data2a = new Object()
data2a.name="sulthaaan"
data2a.age=20

console.log(data2a);

//destructuring

let students1 = {

name:"ajith",
age1:22,
place:"manjeri",
marks :{
  maths:21,
  biology:32
  }
}
let {name,age1} = students1
console.log(name);
let {name:studentname} = students1
console.log(studentname);

let {marks:{biology}} = students1
console.log(biology);


//spread operator

const st = {...students1,email:"ppsulthan77@gmail"}
console.log(st);

console.log(delete students1.place);
console.log(students1);
