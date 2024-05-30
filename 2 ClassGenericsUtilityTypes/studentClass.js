var Student = /** @class */ (function () {
    function Student(name, age, email, courseList, address) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.courseList = courseList;
        this.address = address;
    }
    Student.prototype.getDetails = function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Email:", this.email);
        console.log("Course List:", this.courseList);
        console.log("Address:", this.address);
    };
    return Student;
}());
var student1 = new Student("anjani", 20, "anjanibarlapati@gmail.com", ["HTML", "CSS", "JS"], { city: "Hyderabad", state: "Telangana", pincode: 50001 });
student1.getDetails();
