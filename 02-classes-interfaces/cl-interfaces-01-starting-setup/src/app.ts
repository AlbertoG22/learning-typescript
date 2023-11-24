class Department {
    name: string;
    // private property
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this:Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');
accounting.addEmployee('Sergio');
accounting.addEmployee('Alberto');

accounting.addEmployee[2] = 'Martha'; // esto ya no es posible al hacer private la propiedad

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe(); // WRONG! -- no hay propiedad "name" en el objeto accountingCopy