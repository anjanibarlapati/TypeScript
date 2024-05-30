interface Address{
    city:string;
    state:string;
    pincode:number;
}
interface Student
{
    name: string;
    age:number;
    email:string;
    courseList:string[];
    address: Address;
}
var student1:Student={
    name:"Anjani",
    age:20,
    email:"anjanibarlapati@gmail.com",
    courseList:["HTML","CSS","JavaScript","TypeScript"],
    address:{
        city:"Hyderabad",
        state:"Telangana",
        pincode:500001,
    },
}
let student2:Student={
    name:"Anjali",
    age:21,
    email:"anjaligogu@gmail.com",
    courseList:["Git","CSS","JavaScript","TypeScript"],
    address:{
        city:"Peddapalli",
        state:"Telangana",
        pincode:505172,
    },
}
let student3:Student={
    name:"Rekha",
    age:21,
    email:"rekhakorepu@gmail.com",
    courseList:["Git","CSS","JavaScript","TypeScript","React"],
    address:{
        city:"Sircilla",
        state:"Telangana",
        pincode:505301,
    },
}
console.log(student1);
console.log(student2);
console.log(student3);
