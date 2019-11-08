function Employee(name, id, title) {
    this.name = name;
    this.id = id;
    this.title = title;
}
function Manager(officeNumber) {
    Employee.call(this, name, id, title)
    this.officeNumber = officeNumber;
}
function Engineer(github) {
    Employee.call(this, name, id, title)
    this.github = github;
}
function Intern(school) {
    Employee.call(this, name, id, title)
    this.school = school
}

Employee.prototype.getName = function () {
    return this.name
}

Employee.prototype.getId = function () {
    return this.id
}

Employee.prototype.getEmail = function () {
    return this.email
}

Employee.prototype.getRole = function () {

}
Engineer.prototype.getGitHub = function () {
    return this.github
}
Intern.prototype.getSchool = function () {
    return this.school
}


module.exports = Employee;

const ron = new Intern(arizona, this, aaron, job, intern)

ron.getName()