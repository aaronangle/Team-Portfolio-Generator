const fs = require("fs")
const util = require("util")
const { Engineer } = require("./employee.js")
const { Intern } = require("./employee.js")
const { Manager } = require("./employee.js")
const mainPath = (__dirname, '../HTML/index.html')
const managerPath = (__dirname, '../HTML/manager.html')
const engineerPath = (__dirname, '../HTML/engineer.html')
const internPath = (__dirname, '../HTML/intern.html')
const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)


async function renderEmployees(employees) {
    const html = [];
    try {
        const [
            managerTemplate,
            internTemplate,
            engineerTemplate,
            mainTemplate
        ] = await Promise.all([
            readFile(managerPath, "utf8"),
            readFile(internPath, "utf8"),
            readFile(engineerPath, "utf8"),
            readFile(mainPath, "utf8"),
        ]);

        html.push(
            employees
                .filter(employee => employee instanceof Manager)
                .map(employee => {
                    let template = managerTemplate;
                    for (const key in employee) {
                        template = replacePlaceholder(template, key, employee[key])
                    }
                    return template
                })
                .join("")
        )

        html.push(
            employees
                .filter(employee => employee instanceof Intern)
                .map(employee => {
                    let template = internTemplate;
                    for (const key in employee) {
                        template = replacePlaceholder(template, key, employee[key])
                    }
                    return template
                })
                .join("")
        )

        html.push(
            employees
                .filter(employee => employee instanceof Engineer)
                .map(employee => {
                    let template = engineerTemplate;
                    for (const key in employee) {
                        template = replacePlaceholder(template, key, employee[key])
                    }
                    return template
                })
                .join("")
        )

        await writeFile("Build/index.html", replacePlaceholder(mainTemplate, "body", html.join("")))
    }
    catch (err) {
        console.log(err)
    }

}

function replacePlaceholder(template, target, value) {
    const regex = new RegExp("{{" + target + "}}", "gm");
    const newTemplate = template.replace(regex, value);
    return newTemplate;
}

module.exports = renderEmployees;