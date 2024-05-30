interface Address
{
    city:string;
    state:string;
    pincode:number;
}
interface Student
{
    name:string;
    age:number;
    email:string;
    courseList:string[];
    address: Address;
}

type CreateReadonlyStudent<Type> = {

    readonly [X in keyof Type] :Type[X];
}

type ReadonlyStudent= CreateReadonlyStudent<Student>;

let anjani: ReadonlyStudent=
{
    name: "anjani",
    age :20,
    email: "anjanib@gmail.com",
    courseList: ["Git", "TS"],
    address: {city: "HYD", state: "Telangana", pincode: 500001},
}
console.log(anjani);
