
const inquirer = require('inquirer');
const create = require ("./createReadme");


function getUserInput() {
	return inquirer.prompt([
		{
			type: "input",
			message: "Please enter the title of your repository",
			name: "title",
        },
        {
            type: "input",
            message:"Please enter the description of your Repository",
            name:"description"
        },
        {
            type: "input",
            message: "Please list a table of Contents",
            name: "Contents",
        },
        {
            type: "input",
            message: "How do you install this program?",
            name: "Installation",
        },
        {
            type: "input",
            message: "Please enter a license if any",
            name: "License",
        },
        {
            type: "input",
            message: "Please list any contributors",
            name: "Contributors",
        },
        {
            type: "input",
            message: "Do you have a test for this application?",
            name: "Tests",
        },
        {
            type: "input",
            messages: "Any questions?",
            name: "Questions",
    },
		{
            type: "input",
            messages:"What is your github username?",
            name:"Github",

        },

	])
}



async function main() {
	const { username } = await getUserInput();

}

main();


