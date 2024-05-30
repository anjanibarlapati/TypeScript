type Address={
    city: string;
    state: string;
    pincode: number;
}
class Student
{
    name: string;
    age: number;
    email: string;
    courseList: Array<string>;
    address: Address;

    constructor(name:string, age:number, email:string, courseList: Array<string>, address:Address)
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.courseList = courseList;
        this.address= address;
    }

    getDetails()
    {
        console.log("Name:",this.name);
        console.log("Age:", this.age);
        console.log("Email:", this.email);
        console.log("Course List:", this.courseList);
        console.log("Address:", this.address);
    }
}

let student1 = new Student("anjani", 20, "anjanibarlapati@gmail.com", ["HTML", "CSS", "JS"], {city: "Hyderabad", state: "Telangana", pincode: 50001});
student1.getDetails();