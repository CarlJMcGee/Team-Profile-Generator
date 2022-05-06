const EmployeeEng = require("../lib/Employee");
class Engineer extends EmployeeEng {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
}