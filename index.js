// // PLEASE NOTE TO TA'S. Anything in green is what I tried to get my answers to my 
// application to write to my index.md file.  I did talk to Zac and I tried to get it to work 
// for my application but I couldn't so I'm submitting what I have .

const fs=require("fs");
const inquirer = require('inquirer');
const util = require("util");
const writeFileAsync=util.promisify(fs.writeFile);



 function getUserInput() {
	return inquirer.prompt([
		{
			type: "input",
			message: "Please enter the title of your repository",
			name: "Title",
        },
        {
            type: "input",
            message:"Please enter the description of your Repository",
            name:"Description"
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

function generateMD(response){ 
    return `
#Please Enter The Title of Your Repository
${response.Title}

##Please Enter the Description of Your Repository
${response.Description}

##Please list a table of contents
${response.Contents}

##How do you install this program
${response.Installation}

##Please enter a license if any
${response.License}

##Please list any contributors
${response.Contributors}

##Do you hava a test for this application?
${response.Tests}

##Do you have any questions?
${response.Questions}

##What is your github username?
${response.Github} `
;
}

async function main() {
    const {response} = await getUserInput()

     .then(function(response)
    {
        const md=generateMD(response);
        return writeFileAsync("index.md", md);

    })
    .then(function(){
        console.log("Successfully wrote to index.md")
    })
    .catch (function (err){
        console.log(err);
    });
}

 main();

