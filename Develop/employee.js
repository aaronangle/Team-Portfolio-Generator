class Employee {
    constructor(name, id, email) {
        if (!name) {
            throw new Error("Expected value of name")
        }
        if (isNaN(id) || id < 0) {
            throw new Error("Expected a number")
        }
        if (!email) {
            throw new Error("Expected an email")
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }
    returnName() {
        return this.name
    }
}

class Manager extends Employee {
    constructor(name, id, email, number) {
        if (isNaN(number) || number < 0) {
            throw new Error("Expected a number")
        }
        super(name, id, email)
        this.number = number;
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        if (!school) {
            throw new Error("Expected a school")
        }
        super(name, id, email)
        this.school = school
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (!github) {
            throw new Error("Expected a github")
        }
        super(name, id, email)
        this.github = github;
    }
}

module.exports = {
    Employee,
    Engineer,
    Intern,
    Manager
}