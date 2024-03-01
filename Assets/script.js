// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let employeesArray = [];
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // found information on indefinite while loops at: https://www.youtube.com/watch?v=BR9sBx3LBHU
  let moreEmployees = true;
  // creates a while loop to repeatedly ask the user for input 
  while (moreEmployees) {
    let firstName = prompt("Enter first name:");
    let lastName = prompt("Enter last name:");
    let salary = prompt("Enter salary:");
    // found info on isNaN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
    // sets default salary to 0 if user inputs a non number
    if (isNaN(salary)){
        salary = 0;
    // found info on parseInt syntax here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    // changes the user input from a string to an integer so that the table formats the salary as a currency
      } else  {
        salary = parseInt(salary);
      }
    // creates an object, employee, with the inputs from the user
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    // pushes each input from the user into an array of objects
    employeesArray.push(employee);
    let addAgain = confirm("Do you want to add another employee?");
    // ends the series of add employee loops once the user selects "cancel"
    if (!addAgain){
      return employeesArray;
    }
  }
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // found syntax on sum methods https://stackoverflow.com/questions/53106132/find-average-of-an-array-of-objects
  // selects for salary value of each object in the array and sums them up
  let sum = 0
  for (let i = 0; i < employeesArray.length; i++){
    sum += employeesArray[i].salary;
  }
  // divides the sum above by the length of the salary array to get the average salary
  let averageSalary = sum / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // my instructor Dan helped us with how to use the Math functionality to generate random numbers
  const randomEmployee = Math.floor(Math.random() * employeesArray.length)
  console.log(`Congratulations to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);