# Employee Payroll Bookkeeping

## Description
This project involved the creation of a program for a payroll manager to easily record and display the payroll information of a company's employees, as well as pick an employee from a random drawing and to log company-wide information like average salary.  The program already had working HTML and CSS code as well as the framework for some JavaScript functionality.  For this project, I added prompts for the "Add Employee" button that would request information from the user and return that information into an organized and sorted table on the webpage.  Additionally, I added the functionality for logging the average salary of the company's employees and picking a random employee as a drawing winner.

## Installation
N/A

## Usage
To use the webpage, follow [this link](https://njohnson2897.github.io/employee-payroll/)

The following screenshot demonstrates what the page should look like in a browser when the page first loads:
![payroll webpage screenshot 2](./Assets/images/employee-payroll-screenshot2.JPG)

To add employees to your payroll table, simply click the "Add Employees" button.  A series of prompts will appear asking for the employee's first name, last name, and salary.  For the salary prompt, only numerical inputs are accepted, otherwise the salary will be inputted at $0.  Following the salary prompt, a final prompt will ask  whether or not you would like to add another employee.  Click "OK" to add  another employee, or cancel to end the table there.  The table should automatically generate and look like this:
![payroll webpage screenshot](./Assets/images/employee-payroll-screenshot.JPG)

## Credits
I found information on indefinite while loops at: https://www.youtube.com/watch?v=BR9sBx3LBHU

I also found syntax on sum and filter methods at: https://stackoverflow.com/questions/53106132/find-average-of-an-array-of-objects

Information on isNaN function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

I also received some help from Juno Nguyen, a tutor with the Northwestern Coding Bootcamp, who helped me simplify my displayAverageSalary function by removing the an unnecessary filter method and instead draw the salary values directly from the array I had already created.