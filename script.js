// [Variables are containers for data]

// [VARABLE IN JS,(Again declear and assign both possible) global space variable]:

// var A = "5 <br>" ;
// document.write(A);
// var A = 5;
// document.write(A);

// var A = 1
// var B=  2
// var C= 10
// document.write(Number(A) + Number(B));

// [LET IN JS,(Can assign again but can't declear) block space variable]:

// // let Ahmed = "Hello World  <br>";
// // document.write(Ahmed);
// let Bilal = "Hello world";
// document.write(Bilal);

// [CONSTANT IN JS,(Can't assign and declear both again) block space variable]:

// const A = 10;
// const B = 20;

// document.write(A + "<br>");
// document.write(B + "<br>");
// document.write(A = B)

// const student = {
//   name : "ali",
//   age : 20,
// }
// document.write(student["age"]);

//[TEMPLATE LITERALES IN JS ``(a way to have embed expression in string)]:

// let specialStrring = `This is template literal in js`;
// console.log(specialStrring);

// let obj = {
//   item: "pen",
//   price: 20,
// };
// let output = `The cost of ${obj.item} is ${obj.price}`;
// console.log(output);

//[ESCAPE CHARACTER (break line)]:

// console.log("Hello\nWorld");
// console.log("Hello\tWorld");
// let st = "Hello\nWorld";
// console.log(st.length); // 11 not 12 because two escape chrcs counts only one

//[STRING METHODS IN JS]:

// let str = "hellololo";
// // console.log(str.replaceAll("lo", "p"));
// console.log(str.charAt(0));
// let strr1 = "abcdefgh";
// // console.log(strr1.toUpperCase());
// console.log(strr1.replace("h", "y"));

// let strr2 = "ABCDEF";
// console.log(strr2.toLowerCase());
// console.log(strr2.slice(0, 3));
// console.log(strr1.concat(strr2));
// console.log(strr1 + strr2);

// let strr3 = "   Ahmed, How are you?    "; //removes space
// console.log(strr3.trim());

// let fullname = prompt("Enter your name without spaces");
// let username = "@" + fullname + fullname.length;
// console.log(username);

// [VOTING CHECK FUNCTION WITH IF/ELSE]:

// let Age = 16
// if(18<=Age && Age<=60){
//     document.write("You are eligible for voting");
// }
// else{
//     document.write("You are not eligible for voting");
// }

// [IF/ELSE DRIVING CHECK FUNCTION WITH INNER HTML]:

// function checkdrivingEligibility() {
//     let age = document.getElementById("any").value;
//     let result = document.getElementById("result");

//     if (age >= 18) {
//         result.innerHTML = "You are eligible to drive.";
//     } else {
//         result.innerHTML = "You are not eligible to drive.";
//     }
// }

// let mode = "dark";
// let color;

// if (mode==="dark"){
//   color ="black";
// } else if(mode==="blue"){
//   color = "blue";
// } else if(mode==="pink"){
//   color = "pink";
// } else {
//   color = "white";
// }

// document.write(color)

//[CHECKING EVEN OR ODD NUMBER]:

// let num = 9
// if (num%2===0){
//   document.write(num , " is even");
// } else {
//   document.write(num , " is odd")
// }

// let i = 0
// for (i=0;i<=100;i++){
//    if (i%2===0){
//   console.log(i)
// }
// }

// let i = 0
// for (i=0;i<=100;i++){
//    if (i%2!==0){
//   console.log(i)
// }
// }

// [TERNARY OPERATOR (A ? B : C)]:

// let age = 17;
// let result = age > 18 ? "yes" : "no";
// document.write(result);

// [ALERT BOX]:

// alert ("hello");

// var value = confirm("Do you like apple?")
// var result = value? "yes i like" : "i dont like";

// [PROMPT BOX]:

// let name = prompt ("Write any thing!:");
// document.write(name)

// [GRADING SYSTEM IF/ELSE]:

// let marks = prompt ("Enter your Marks!");
// if (marks>=90 && marks <=100) {
//   document.write("A+");
// } else if (marks>=80){
// document.write("B");
// } else if (marks>=60 && marks<=79) {
//   document.write("C")
// } else if (marks<50 && marks>=40) {
// document.write("D")
// } else {
// document.write("Fail");
// }

// [ADDITIONAL OPERATOR]:

// var a = prompt (15)
// var b = prompt (10)
// if (op == '+'){
//   document.write(a+b);
// }

//[UNARY OPERATOR]:

// let i = 5

// document.write(i++) // [Ye phly same value print krwye ga phr usky bd addition kry ga].
// newline();
// document.write(i)
// newline();
// document.write(++i) // [Ye value ma direct addition krwa k phr print hota ha].

// document.write(i--)
// newline();
// document.write(i)
// newline();
// document.write(--i)

//[CHECKS VALUES WHICH ARE NOT EQUAL TO]:

// let x = 8
// let y = 4
// document.write(x!=y);

// [Modulus Operator]:

// let a = 5
// let b = 2
// document.write(5%2)
// document.write(a**b)

// [LOGICAL OPERATORS]:

// [AND && operator (Both conditions should be true)]:

//    let a = 6;
//   let b = 8;

//   let cond1 = a<b
// let cond2 = a===6
// document.write(cond1&&cond2);

// [OR || OPERATOR(If only one condition true,result will be true)]:

//    let a = 6;
//   let b = 8;

//   let cond1 = a<b
// let cond2 = a===5 //false
// document.write(cond1 || cond2);

// [NOT ! OPERATOR(It reverts the value, true-->false and false-->true)]:

//    let a = 8;
//   let b = 6;

//   let cond1 = a > b
// let cond2 = a === 6
// document.write(!(cond1));

// [CALCULATOR USING OPERATORS]:

// var a = Number(prompt("enter first number"));
// var op = prompt("Enter operator (+, -, *, /)");
// var b = Number(prompt("enter second number"));

// if (op === "+") {
//   document.write(a + b);
// }
// else if (op === "-") {
//   document.write(a - b);
// }
// else if (op === "*") {
//   document.write(a * b);
// }
// else if (op === "/") {
//   document.write(a / b);
// }
// else {
//   document.write("Invalid operator");
// }

// [(*FUNCTIONS WITH PARAMETER*)]:

// [*NEWLINE FUNCTION]:

// document.write("Hello");
// newline();
// document.write("World");
// newline();
// document.write("how are you");
// }

function newline() {
  document.write("<br>");
}

// [*GREET FUNCTION]:

// function greet(Ahmed,Ali){
//   document.write("How are you?" + "   " + Ahmed + "   " + Ali);
// }
//   greet("Ahmed","Ali")

// [*FUNCTION GREET WITH NEWLINE]:

// function greet(name1, name2) {
//   document.write("How are you?" + "  " + name1 + "  " + name2);
// }
// greet("Ahmed", "Ali");
// newline();
// newline();

// [*FUNCTION SUM WITH NEWLINE]:

// function sum(a,b){
//   document.write(a+b);
// }
// sum(15,20);
// newline();
// sum(10,15);

// [*SUM FUNCTION]:

// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));

// let sum = a + b;
// document.write("Sum = " + sum);

// [*MULTIPLICATION]:

// let a = Number (prompt("Enter 1st no"));
// let b = Number (prompt("Enter 2nd no"));
// let multiply = (a*b)
// {
//   document.write("Ans =" + multiply)
// }

// [PRINT FUNCTION]:

// function print() {
//   document.write("What's Up?");
// }

// [SWITCH]:
// let x = prompt ("Which fruit do you like?")
// switch (x) {
// case "apple":
// document.write("I like apples."); break;
// case "mango":
// document.write("I like mangoes."); break;
// default:
// document.write("I like all Fruits");
// }

// [FOR LOOP]:

// for (var i = 100; i>0; i= i-1){
//   document.write(i + "<br> ");
// }

// let sum = 0;
// for (i=1;i<=5;i++){
//   sum = sum + i
// }
// document.write(sum)

// [WHILE LOOP]:

// var i = 1;
// while (i <= 5) {
//   document.write(i + "<br>");
//   i++;
// }

//[GAME QUESTION PRACTICE]:

// let gameNum = 25;
// let userNum = prompt("Guess the Game Number!");

// while (userNum != gameNum) {
//   userNum = prompt("You entered wrong number😑. Guess again!");
// }
// document.write("Congratulations you entered the correct number.");

// [DO/WHILE LOOP]:

// var i = 1;
// do {
//   document.write(i + "<br>");
//   i++;
// } while (i <= 5);

//[FOR/OF LOOP(used for strings)]:

// let str = "javascript";
// let size = 0;
// for (let val of str) {
//   console.log(val);
//   //   size++
// }
// console.log(size)

//[FOR/IN LOOP(used for objects)]:

// let student = {
//   Name : "Ali",
//   Age : 21,
//   CGPA : 4
// };
// for (let key in student){
//   console.log(key, student[key])
// }

// [FUNCTION WITH RETURN]:

// function sum(a, b) {
//   return a + b;
// }
// let s = sum(10, 20);
// document.write(s);

//[ARROWS FUNCTIONS(compact way to write a function)]://MODERN JS

// const arrowSum = (a, b) => {
//   console.log(a + b);
// };
// arrowSum(4, 5);

// const mul = (a, b) => {
//   console.log(a * b);
// };
// mul(9, 8);

// function countVowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// console.log(countVowels("bilal"));

// const countVowels = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// console.log(countVowels("bilal"));

// [NESTED LOOP]:

// [Counting upto 100]:

// for (let a = 1; a<=100 ; a+=10) {
//   for (var b = a; b<a+10; b+=1){
//     document.write(b + " |  ");
//   }
//   document.write("<br>");
// }

// [Counting upto 10]:

// for (let a = 1; a <= 5; a += 1) {
//   for (let b = a; b <= a + 5; b += 1) {
//     document.write(b + "    |    ");
//   }
//   document.write("<br>");
// }

// [Example]:

// for (var a = 1; a<=5; a+=1){
//   for (var b = 1; b<=a; b++){
//     document.write(b);
//   }
//   document.write("<br>");
// }

// [STARS EXAMPLE]:

// for (var a = 5; a>=1; a-- ){
//   for (var c =5; c>=1+a; c--){
//   document.write("&nbsp;")
// }
//   for (var b = 1; b<=a; b++){
//     document.write("*"+ " ");
//   }
//   document.write("<br>");
// }

// for (var a = 1; a <= 5; a++) {
//  for(c = 1; c<=5-a; c++){
//    document.write("&nbsp;");
//    }

//   for (var b = 1; b <= a; b++) {
//     document.write("*" + " ");
//      }
//    document.write("<br>");
//     }

// [CLICKED FUNCTION]:

// function clicked(){
//   document.write("Hello World")
// }

// for ( var a=1; a<=4; a++){
//   for (var b=1; b<=a; b++){
//     document.write(`${a*b} `);
//   }
//   document.write("<br>")
// }

// [PRIME NO IN JS WITH NESTED LOOP]:

// let n= Number(prompt("Enter a number"));
// let i,j;
// document.write(`Prime No list upto ${n} is <br>`)
// for(i=2;i<=n;i++){
//   for(j=2;j<=i-1;j++){
//     if (i%j==0){
//       break;
//     }
//   }
// if(i===j){
//   document.write(i + "<br>")
// }
// }

// for (let i = 5; i >= 1; i--) {
//   for (let j = i; j >= 1; j) {
//     document.write(j);
//   }
//   document.write("<br>");
// }

// [EXAMPLE]:

// for(var a=5;a>=1;a--){
//       for(var b=a; b>=1; b--){
//             document.write(b)
//       }
//       document.write("<br>")
// }

// [ARRAYS]:

// [Ex#1]:

// let a = 10;
// let b = 20;
// let c = 30;

// let numbers = [10, 20, 30];
// document.write(a)

// [Ex#2]:

// function newline() {
//   document.write("<br>");
// }

// let fruits = ["apple", "banana", "mango", "Strawbery"];
// document.write(fruits[0]);
// newline();
// document.write(fruits[1]);
// newline();
// document.write(fruits[2]);
// newline();
// document.write(fruits[3])

// [Ex#3]:

// let fruits = ["apple", "banana", "mango"];
// fruits[0] = "orange";
// document.write(fruits);

// [Ex#4]:

// let fruits = ["apple", "banana", "mango"];
// document.write(fruits.length);

// [Ex#5]:

// for (var a = 0; a <= 3; a++) {
//   document.write([a], "<br>");
// }

// [Ex#6]:

// let nums = [10, 20, 30, 40];
// for (let i = 1; i < nums.length; i++) {
//   document.write(nums[i] , "<br>");
// }

// [Ex#7]:

// 1️⃣ Start par ADD karna → unshift()

// let fruits = ["apple", "banana", "mango"];
// fruits.unshift("orange");
// document.write(fruits);

// 2️⃣ Start se REMOVE karna → shift()

// let fruits = ["apple", "banana", "mango"];
// fruits.shift();
// document.write(fruits);

// [Shift() removed value bhi return karta ha]:

// let fruits = ["apple", "banana", "mango"];
// let removed = fruits.shift();
// document.write(removed);

// | Method      | Function   | Position |
// | ----------- | ---------- | -------- |
// |  Unshift()  | Add        | Start    |
// |  Shift()    | Remove     | Start    |
// |  Push()     | Add        | End      |
// |  Pop()      | Remove     | End      |

// 3️⃣ End par ADD karna → push()

// let fruits = ["apple", "banana", "mango"];
// fruits.push("orange");
// document.write(fruits);

// 4️⃣ End se REMOVE karna → pop()

// let fruits = ["apple", "banana", "mango"];
// fruits.pop();
// document.write(fruits);

// [Pop() removed value bhi return karta ha]:

// let fruits = ["apple", "banana", "mango", "cheery", "grapes"];
// let removed = fruits.pop();
// document.write(removed);
// console.log(fruits);
// console.log(fruits.toString());
// let ar = [1, 2, 3, 4, 5, 6];
// fruits.splice(1, 2, "guava");

// [ARRAY METHODS]:

//[FOR/EACH LOOP]:// Higher order function/method --> Which takes another function in its parameter

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function print(a) {
//   console.log(a);
// });

// arr.forEach((a, idx, arr) => {
//   console.log(a, idx, arr);
// });

// let arr = [2, 3, 4, 5, 6];
// let calcsq = (num) => {
//   console.log(num * num);
// };
// arr.forEach(calcsq);

//[arr.MAP]:

// let arr = [67, 54, 87];
// let newArray = arr.map((val) => {
//   return val;
// });
// console.log(newArray);

//[arr.FILTER]:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenArray = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(evenArray);

//[arr.REDUCE]:

// let arr = [1, 2, 3, 4];
// let output = arr.reduce((pre, curr) => {
//   return pre * curr;
// });
// let output = arr.reduce((pre, curr) => {
//   return pre > curr ? pre : curr;
// });
// console.log(output);

// let marks = [97, 87, 65, 43, 90, 93];
// let toppers = marks.filter((val) => {
//   return val >= 90;
// });
// console.log(toppers);

// let n = prompt("Enter a number:");
// let arr = [];

// for (let i = 1; i <= n; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);

// let sum = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(sum);
// let product = arr.reduce((prev, curr) => {
//   return prev * curr;
// });
// console.log(product);

// let n = Number(prompt("Enter a number:"));
// let arr = [];

// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }

// // let sum = arr.reduce((p, c) => p + c, 0);
// // let product = arr.reduce((p, c) => p * c, 1);

// console.log(arr, sum, product);

// [NEW ARRAY()]:

// var arr= new Array([1,2,3,4);
// document.write(arr.indexOf(2));
// document.write("<br>")
// document.write(arr[0][3]);

// [arr.indexOf]:

// var arr = [10, 20, 30, 40];
// document.write(arr.indexOf(20));

// [arr.sort/ reverse]:

// var arr= [3,2,1,4]
// document.write(arr.sort());
// newline();
// document.write(arr.sort().reverse());

// var arr = [5, 2, 9, 1, 7];
// arr.sort(function (a, b) {
//   return a-b;
// });
// document.write(arr);

//  var arr = [5,4,8,1]
//  arr.sort(function(a,b){
//   return b-a;
//  });
//  document.write(arr[0])

// [arr.pop/push]:

// var arr = [10, 20, 30, 40];
// arr.pop();
// document.write(arr);

// var arr= [5,6,7]
// arr.push(8);
// document.write(arr)

// [MULTI DIMENSIONAL ARRAY]:

// var ary = [
//   ["Amir", "Male", 21, "BSCS"],
//   ["Asim", "Male", 21, "BSSE"],
//   ["Ahmed", "Male", 21, "BSCS"],
//   ["Bilal", "Male", 21, "BSSE"],
// ];
// document.write(ary[0][0]);

// for (var a = 0; a < ary.length; a++) {
//   for (b = 0; b < ary[a].length; b++) {
//     document.write(ary[a][b] + " | ");
//   }
//   document.write("<br>");

// var ary = [
//   ["Amir", "Male", 21, "BSCS"],
//   ["Asim", "Male", 21, "BSSE"],
//   ["Ahmed", "Male", 21, "BSCS"],
//   ["Bilal", "Male", 21, "BSSE"],
// ];

// for (var a = 0; a < ary.length; a++) {
//   for (var b = 0; b < ary[a].length; b++) {
//     document.write(ary[a][b] + " | ");
//   }
//   document.write("<br>");
// newline();
// }

// let heroes = ["spiderman", "ironman", "hulk", "thor"];
// // for (let el of heroes) {
// //   console.log(el);
// // }
// for (i = 0; i < heroes.length; i++) {
//   console.log(heroes[i]);
// }

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks) {
//   sum += val;
// }
// let avg = sum / marks.length;
// console.log(sum);
// console.log(`Avg marks of class is ${avg}`);

// let item = [500, 600, 700, 800];

// let i = 0;
// for (let val of item) {
//   let offer = val / 10;
//   item[i] = item[i] - offer;
//   console.log(item[i]);
//   i++;
// }

// for (i = 0; i < item.length; i++) {
//   let offer = item[i] / 10;
//   item[i] -= offer;
// }
// console.log(item);

//  [OBJECTS]:

//     var obj = {
//   name: "Amir",
//   age: 21,
//   gender: "Male"
// };

// document.write(obj.name);

// var obj = {name:"Amir",age:21,gender:"Male"}
// document.write(obj.name);

//  var obj2 = new Object();
//  obj2.name = "Asim"
//  document.write(obj2.name);

//  var currentDate = new Date;
//   document.write(currentDate);

// var ary = new Object();
// ary.name = "amir";
// document.write(ary.name);

// var obj = {
//   name: "Amir",
//   age: 21,
//   gender: "Male",
// };

// for (let key in obj) {
//   document.write(obj[key] + "<br>");
// }

// [DOM (DOCUMENT OBJECT MODEL) Dom tree includes--> Tree nodes, Comments, Elements(these'r Majors)]:

// console.dir(window);
// console.dir(document);
// console.log(document.body);
// console.log(document.head);

// [document.getElementById]:

// console.log(document.getElementById("h1"));
// console.dir(document.getElementById("h1"));

// [getElementsByClassName]:

// console.log(document.getElementsByClassName("text"));
// console.dir(document.getElementsByClassName("text"));

// [document.getElementsByTagName]:

// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByTagName("p"));

//[QUERY SELECTOR]:

// let elmt = document.querySelector("#h1");
// console.log(elmt);
// console.log(elmt.tagName);
// console.log(document.body.firstElementChild);
// console.log(document.body.firstChild);
// console.log(document.body.firstChild.nodeType);
// let element = document.querySelector(".text");
// console.log(element);
// console.log(document.querySelector("div").children);
// let element1 = document.querySelector("p");
// console.log(element1);
// let elements = document.querySelectorAll("p");
// console.log(elements);
// let div = document.querySelector("div");
// console.log(div);
// console.dir(div);
// console.log(div.innerText);
// console.log(div.innerHTML);
// console.log(div.textContent); //<h1> shows hidden visibility also (style.css)
// let heading = document.querySelector("h1");
// console.log(heading);
// console.log((heading.innerText = "New Heading"));
// console.log((heading.innerHTML = "<i>New Heading</i>"));
// console.log(heading.textContent);

// let h2 = document.querySelector("h2");
// console.log(h2);
// console.log(h2.innerText);
// h2.innerText = h2.innerText + "How are you World?";

// let divs = document.querySelectorAll(".box");
// let i = 1;
// for (div of divs) {
//   div.innerText = `New unique value ${i}`;
//   i++;
// }

//[ATTRIBUTES]:

// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "New Class")); //shows in elements section

//[STYLE]:

// let div = document.querySelector("div");
// div.style.borderRadius = "10px";
// console.log(div.style);
// div.style.backgroundColor = "red";
// div.style.fontSize = "20px";
// div.innerText = "Hello";
// div.innerHTML = "How are you?";
// div.style.padding = "10px";
// let span = document.querySelector("span");
// span.style.display = "block";
// span.style.textAlign = "center";
// span.style.padding = "5px";

//[INSERT ELEMENTS]:

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";
// newbtn.onclick = function () {
//   console.log("Button was clicked");
// };
// let div = document.querySelector("div");
// newbtn.style.margin = "7px";
// div.prepend(newbtn); // prepends adds at the start of node (inside)
// div.append(newbtn); // append adds at the end of node (inside)
// div.before(newbtn); // adds at the start of node (outside)
// div.after(newbtn); //  adds at the end of node (outside)
// const paragraph = document.body.appendChild(document.createElement("p"));
// paragraph.innerText = "Hello world";
// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi,Iam new!</>";
// document.querySelector("body").prepend(newHeading);
// newHeading.style.color = "white";

//[DELETE ELEMENT]:

// let para = document.querySelector("p");
// para.remove();
// // newHeading.remove();

//[PRACTICE QUESTIONS]:

// #1
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";
// newbtn.onclick = function () {
//   console.log("You just clicked a button");
// };
// newbtn.style.color = "white";
// newbtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newbtn);

//#2

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newClass"));
// console.log(para.classList.add("newClass"));
// console.log(para.classList.remove("newClass"));
// console.log(para.classList);

//[EVENTS IN BROWSER]: //change in state of an object

// let btn = document.querySelector("#btn");
// btn.onclick = () => {
//   console.log("Hello World!");
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("You just hover the box");
// };

//[EVENT OBJECT]:

// div.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   //   console.log(evt.clientX, evt.clientY);
// };

//[EVENT LISTNER]:

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   console.log("You just clicked the button-handler 1");
// });
// btn.addEventListener("click", () => {
//   console.log("You just clicked the button-handler 2");
// });
// const handler3 = () => {
//   console.log("You just clicked the button-handler 3");
// };
// btn.addEventListener("click", handler3);

// btn.addEventListener("click", () => {
//   console.log("You just clicked the button-handler 4");
// });

//[REMOVE EVENT]:

// btn.removeEventListener("click", handler3);

//[LIGHT AND DARK MODE BUTTON]:

// let modebtn = document.querySelector("#Mode");
// let body = document.querySelector("body");
// let currMode = "Light";
// modebtn.addEventListener("click", () => {
//   if (currMode === "Light") {
//     currMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currMode = "Light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }
// });

// let modebtn = document.querySelector("#Mode");
// let body = document.querySelector("body");
// let currmode = "dark";

// modebtn.addEventListener("click", () => {
//   if (currmode === "dark") {
//     currmode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   } else {
//     currmode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   }
// });

// [JSON File]:

//     let jsonData = `{
//   "name": "Ali",
//   "age": 20
// }`;

//     let obj = JSON.parse(jsonData)
//     console.log(obj.age)
