var inquirer = require('inquirer');
var fs = require('fs');

function generateMarkdown(data) {
  inquirer.prompt([

    {
      type:'list',
      name: 'badge',
      choices: ['MIT','Creative Commons'] 
   },
    {
       type:'input',
       name: 'second',
       message: 'What is your project called ?' 
    },
    {
        type:'input',
        name: 'third',
        message: 'Please give a brief Description!' 
     },
     {
      type: 'input',
      name: 'table of contents',
      message: 'Please press enter for table of contents',
    },
    {
      type: 'input',
      name: 'fourth',
      message: 'Usage',
    },
    
    {
      type: 'input',
      name: 'fifth',
      message: 'Installation',
    },
    {
      type: 'input',
      name: 'sixth',
      message: 'License',
    },
    {
      type: 'input',
      name: 'seventh',
      message: 'Contributing',
    },
    {
      type: 'input',
      name: 'eigth',
      message: 'Tests',
    },
    {
      type: 'input',
      name: 'ninth',
      message: 'Questions',
    },

  ])
  .then(function(answers)  {
    var badgeUrl = ''
    if(answers.badges === 'MIT') {
      badgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else  if (answers.badges === 'Creative Commons') {
      badgeUrl = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
    }
; 
      const readMeString = `
${badgeUrl}
# Title ${answers.second}
# Description ${answers.third}
# Table of Contents 
[Title](https://github.com/gentryhunt23/Unit-10-HW/tree/master/utils#title-generatemarkdown)
[Desciption](https://github.com/gentryhunt23/Unit-10-HW/tree/master/utils#description-this-project-uses-the-cli-to-generate-a-readmemd-file-to-desribe-the-contents-within-the-files-and-the-functionality-of-a-given-proect)
[Usage](https://github.com/gentryhunt23/Unit-10-HW/tree/master/utils#usage-1)
[Installation](https://github.com/gentryhunt23/Unit-10-HW/tree/master/utils#installation-2)
[License](https://github.com/gentryhunt23/Unit-10-HW/tree/master/utils#license-3)
[Contributing](https://github.com/gentryhunt23/Unit-10-HW/tree/master/utils#contributing-4)
[Tests](https://github.com/gentryhunt23/Unit-10-HW/tree/master/utils#tests-5)
[Questions](https://github.com/gentryhunt23/Unit-10-HW/tree/master/utils#questions-6)
# Usage ${answers.fourth}
# Installation ${answers.fifth}
# License ${answers.sixth}
# Contributing ${answers.seventh}
# Tests ${answers.eigth}
# Questions ${answers.ninth}

 
      `
      fs.writeFile('readMe.md',readMeString , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  })
  return `
# ${data}

`;
}

  module.exports = {
    generateMarkdown
  };