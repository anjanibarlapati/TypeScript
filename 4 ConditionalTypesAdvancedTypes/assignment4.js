/*
Create a function to update few properties from Student object
it should not allow all properties, restrict type to allow to accept name and email (and donot hard code name and email, it should be derived from Student type)
Create a type which takes input type and returns Yes if passed type is string otherwise No
Create an employee lead relationship with example
Write a function to iterate through employees and print {Employee.name} is Lead , if they are they are lead otherwise {Employee.name} is not lead
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var anjani = { name: "anjani", age: 20, email: "anjani@gmail.com", address: { city: "Hyderabad", state: "Telanga", pincode: 500001 } };
console.log(anjani);
/*
function upadte<KEY extends keyof UpdateProperties>(anjani:Student, key:KEY, value:UpdateProperties[KEY])
{
          anjani[key]=value;
}
upadte(anjani, "name", "abc");
upadte(anjani, "email", "abc@gmail.com");
// upadte(anjani,"age",20);  It gives error as age in not key of updateProperties
*/
function update1(anjani, updates) {
    /*for (let key in updates)
      {
        anjani[key]=updates[key];
      }
      */
    return __assign(__assign({}, anjani), updates);
}
anjani = update1(anjani, { "name": "abc", "email": "abc@gmail.com" });
console.log(anjani);
//SECOND
var x = "abc";
var y = 1;
var z = false;
var employees1 = [];
employees1[0] = { name: "employee1", email: "employee2@gmail.com", age: 28, phoneNumber: 1234567890 };
employees1[1] = { name: "employee2", email: "employee2@gmail.com", age: 28, phoneNumber: 1234567890, employeeLead: employees1[0] };
employees1[2] = { name: "employee3", email: "employee3@gmail.com", age: 28, phoneNumber: 1234567890, employeeLead: employees1[1] };
employees1[3] = { name: "employee4", email: "employee4@gmail.com", age: 28, phoneNumber: 1234567890, employeeLead: employees1[0] };
function isLead(employee) {
    for (var i = 0; i < employees1.length; i++) {
        var e = employees1[i];
        if (e.employeeLead != null && e.employeeLead === employee) {
            //console.log("yes");
            return true;
        }
    }
    return false;
}
//isLead(employees[0]);
function printTeamLeadOrNot1(employees1) {
    employees1.forEach(function (employee) {
        if (isLead(employee)) {
            console.log(employee.name + " is a team lead");
        }
        else {
            console.log(employee.name + " is not a team lead");
        }
    });
}
printTeamLeadOrNot1(employees1);
/*type Employee={
  name: string;
  email: string;
  age: number;
  phoneNumber: number;
  employeeLead?:Employee;
  isEmployeeLead: boolean
}
let employees:Employee[]=[];

employees[0] = {name:"employee1", email:"employee2@gmail.com", age:28, phoneNumber:1234567890, isEmployeeLead: true };
employees[1] = {name:"employee2", email:"employee2@gmail.com", age:28, phoneNumber:1234567890, employeeLead:employees[0], isEmployeeLead:true };
employees[2] = {name:"employee3", email:"employee3@gmail.com", age:28, phoneNumber:1234567890, employeeLead:employees[1] ,isEmployeeLead: false};
employees[3] = {name:"employee4", email:"employee4@gmail.com", age:28, phoneNumber:1234567890, employeeLead:employees[0] ,isEmployeeLead: false};

/* Here employeeArray[0] is team lead of employeeArray[1] and employeeArray[1] is lead of employeeArray[2]. So checking whether an employee is lead or not based
on employeeLead property exist or not for an employee does not work. Because, here employeeArray[1] has employeeLead property and also he is lead for employeeArray[2].
So, I used another key isEmployeeLead.



function printTeamLeadOrNot(employees:Employee[])
{
employees.forEach((employee)=>
  {
        if(employee.isEmployeeLead)
          {
            console.log(employee.name +" is a team lead");
          }
          else
          {
            console.log(employee.name +" is not a team lead");
          }
  });
}

printTeamLeadOrNot(employees);
*/ 
