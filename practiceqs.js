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
