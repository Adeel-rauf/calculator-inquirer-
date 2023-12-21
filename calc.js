import inquirer from 'inquirer';
let calc = await inquirer.prompt([
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number'
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number'
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Enter the operator',
        choices: ['Add', 'Subtract', 'Multiply', 'divide']
    },
]);
let result;
switch (calc.operator) {
    case 'Add':
        result = calc.num1 + calc.num2;
        console.log(`Adding ${calc.num1} & ${calc.num2} results in: ${result}`);
        break;
    case 'Subtract':
        result = calc.num1 - calc.num2;
        console.log(`Subtracting ${calc.num1} & ${calc.num2} results in: ${result}`);
        break;
    case 'Multiply':
        result = calc.num1 * calc.num2;
        console.log(`Multiplying ${calc.num1} & ${calc.num2} results in: ${result}`);
        break;
    case 'Divide':
        result = calc.num1 / calc.num2;
        console.log(`Dividing ${calc.num1} & ${calc.num2} results in: ${result}`);
        break;
}
