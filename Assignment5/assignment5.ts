//FIRST

type Product = {
    name: string;
    price: number;
    description?: string;
    quantity?: number;
    isInStock: boolean;
    weight?: number;
 }
 
 type ProductRequired<Type> = {
     [P in keyof Type]-?: Type[P] ;
 }
 type Product1= ProductRequired<Product>;
 
 //SECOND
 
 type Person = {
     name:string;
     motherName: string;
     fatherName: string;
     DOB: string;
 }
 
 let anjani: Person ={name:"anjani", motherName:"abc", fatherName:"xyz", DOB:"01-01-2003"};
 
 
 function printDetails(person: Person): string
 {
   let result: string="";
   let value: string;
     for(let key in person) {
         value = person[key];
         if(result!="")
         {
             result+=", ";
         }
         result+= `${key}: ${value}`;
        // result+=key+": "+person1[key];
     }
    return result;
 
 }
 console.log(printDetails(anjani));
 
 //THIRD
 import {util} from "./utils";
 type Person1=
 {
     name:string;
     motherName: string;
     fatherName: string;
     DOB: string;
     age: number;
     address:
     {
         city: string;
         state: string;
         pincode: number;
     }
 }
let anjani1: Person1={name:"anjani", motherName:"abc", fatherName:"xyz", DOB:"01-01-2003", age:20, address:{city:"Hyderabad", state:"Telangana", pincode:50001}};

console.log(util.printDetails(anjani1).slice(0,-2));
