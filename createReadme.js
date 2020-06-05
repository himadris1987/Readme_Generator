const fs = require ("fs");
const util = require ("util");
const writeFilePromise= util.promisify(fs.writeFile);

// const generateFileName = function (fileExtenstion ="md")

// // const create = async function (Title, Description, Contents,
// //     Installation, License, Contributors, Test, Questions, Github){
// //    const markdown =
// //    "Please Enter Title of Repository"
// //    $[Title]
// //    "Please Enter the Description of Repository"
// //    $[Description]
// //    "Please list a table of contents"
// //    $[Contents]
// //    "How do you install this program"
// //    $[Installation]
// //    "Please Enter a license if any"
// //    $[License]
// //    "Please list any contributors"
// //    $[Contributors]
// //    "Do you hava test for this application?"
// //    $[Tests]
// //    "Do you have any questions?"
// //    $[Questions]
// //    "What is your github username?"
// //    $[Github]

//    await writeFilePromise(generateFileName(), markdown)
// }