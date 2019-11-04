"use strict";
class Employee {
    constructor() {
        this.name = "";
        this.age = 0;
        this.dateofjoin = new Date();
        this.salary = 0;
        this.isMarried = false;
    }
}
var emp = new Employee();
emp.name = "Kedar";
emp.age = 20;
emp.salary = 3000;
emp.dateofjoin = new Date(2019, 3, 4);
emp.isMarried = false;
console.log(JSON.stringify(emp));
//# sourceMappingURL=index.js.map