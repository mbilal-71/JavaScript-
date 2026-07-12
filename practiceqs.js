// let DATA = " Do not fetch it. This is secret info";
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("Data =", DATA);
//   }
// }

// class Admin extends User {
//   constructor(name, email, role) {
//     super(name, email);
//     this.role = role;
//   }
//   editData() {
//     DATA = "some new value";
//   }
// }

// [In case if user not provides email]:

// class Admin extends User {
//   constructor(name, email) {
//     if (!email) {
//       throw new Error("Email is Compulsory");
//     }
//     super(name, email);
//   }
// }

// let admin1 = new Admin("admin", "admin@college.com", "teacher");
// console.log(admin1);
// admin1.editData();
// console.log(DATA);
// admin1.viewData();

// class student extends Admin {
//   constructor(name, email, role) {
//     super(name, email, role);
//   }
// }

// let student1 = new student("ahmed", "123@gmail.com", "student");
//  let student2 = new User("ali", "456S@gmail.com");
// console.log(student1);
// student1.viewData();
// student1.editData();
// console.log(DATA);

// let student1 = new User("ahmed", "123@gmail.com", "student");
// let student2 = new User("ali", "456S@gmail.com");
// console.log(student1);
// student1.viewData();
// student1.editData();
// console.log(DATA);

// const countVowels = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     )
//       count++;
//   }
//   return count;
// };

// console.log(countVowels("ahmed"));

// let ch = '*';

// if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
//     console.log("Alphabet");
// } else if (ch >= '0' && ch <= '9') {
//     console.log("Digit");
// } else {
//     console.log("Special Character");
// }

// let i=1;

// while(i<=10){

// console.log("7 x",i,"=",7*i);

// i++;


// let i= 0;
//  while(i<=10){
//     console.log("2 x",i,"=",2*i);
//     i++;
//  }

// PATTERN QUESTIONS:

// #1

// for (let i = 1; i <= 5; i++) {

//     let pattern = "";

//     for (let j = 1; j <= i; j++) {

//         pattern += i;

//     }

//     console.log(pattern);

// }

// #2:

for (let i = 5; i >= 1; i--) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {

        pattern += j;

    }

    console.log(pattern);

}

// #3:

// for (let i = 5; i >= 1; i--) {

//     let pattern = "";

//     for (let j = i; j >= 1; j--) {

//         pattern += j;

//     }

//     console.log(pattern);

// }

// #4

// for (let i = 1; i <= 5; i++) {

//     let pattern = "";

//     for (let j = 1; j <= i; j++) {

//         pattern += i;

//     }

//     console.log(pattern);

// }

// #5

// for (let i = 5; i >= 1; i--) {

//     let pattern = "";

//     for (let j = 1; j <= i; j++) {

//         pattern += i;

//     }

//     console.log(pattern);

// }

// #6

// for (let i = 1; i <= 5; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }

// #7

// for (let i = 5; i >= 1; i--) {

//     let pattern = "";

//     for (let j = 1; j <= i; j++) {

//         pattern += "*";

//     }

//     console.log(pattern);

// }

// #8

// for (let i = 1; i <= 5; i++) {

//     let pattern = "";

//     for (let j = 1; j <= 5; j++) {

//         pattern += "*";

//     }

//     console.log(pattern);

// }

// #9

// for (let i = 1; i <= 4; i++) {

//     let pattern = "";

//     for (let j = 1; j <= 4; j++) {

//         if (j % 2 == 1) {

//             pattern += "x";

//         } else {

//             pattern += "o";

//         }

//     }

//     console.log(pattern);

// }