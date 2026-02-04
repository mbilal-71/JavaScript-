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

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "some new value";
  }
}
let admin1 = new Admin("admin", "admin@college.com");
console.log(admin1);
admin1.editData();
console.log(DATA);

// let student1 = new User("ahmed", "123@gmail.com");
// let student2 = new User("ali", "456S@gmail.com");
// console.log(student1);
// student1.viewData();
