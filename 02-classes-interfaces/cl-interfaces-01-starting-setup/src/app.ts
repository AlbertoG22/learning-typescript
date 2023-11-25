class Department {
    static fiscalYear = 2023;
    // private readonly id: string;
    // private name: string;
    // private property
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    describe(this: Department) {
        console.log(`Department: (${this.id}):' ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT'); // primero debe llamarse el constructor del padre
        this.admins = admins; // antes de hacer cualquier inicialización
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if ( this.lastReport ) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if ( !value ) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) { // también podemos usar el shorcut
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if ( name === 'Alberto' ) {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    PrintReports() {
        console.log(this.reports);
    }
}

// static method
const employee1 = Department.createEmployee('Beto');
console.log(employee1);
// static property
console.log(Department.fiscalYear);

const accounting = new Department('id_01', 'Accounting');
accounting.addEmployee('Sergio');
accounting.addEmployee('Alberto');

const it = new ITDepartment('id_01', ['Beto']);
it.printEmployeeInformation();

const accounting2 = new AccountingDepartment('id_02', []);
accounting2.mostRecentReport = 'Final Report!';
accounting2.addReport('Something went wrong!');
console.log(accounting2.mostRecentReport); // se accede como si propiedad, no como método
accounting2.addEmployee('Alberto');
accounting2.PrintReports();

// accounting.addEmployee[2] = 'Martha'; // esto ya no es posible al hacer private la propiedad
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe(); // WRONG! -- no hay propiedad "name" en el objeto accountingCopy