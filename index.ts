class Employee{
    name:string="";
    age:number=0;
    dateofjoin:Date =  new Date();
    salary:number=0;
    isMarried:boolean=false;
}

var emp:Employee = new Employee();
emp.name ="Kedar";
emp.age =20;
emp.salary =3000;
emp.dateofjoin = new Date(2019,3,4);
emp.isMarried =false;

console.log(JSON.stringify(emp));