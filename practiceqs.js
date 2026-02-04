let DATA = " Do not fetch it. This is secret info";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Data =", DATA);
  }
}

let student1 = new User("ahmed", "123@gmail.com");
let student2 = new User("ali", "456S@gmail.com");
console.log(student1);
student1.viewData();
