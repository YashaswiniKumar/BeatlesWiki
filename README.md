# Cypress Automation project 

The test script performs the following steps
1.	Accesses wiki page: https://en.wikipedia.org/wiki/The_Beatles and assert
2.	Clicks on the first link to Paul McCartney’s Wikipedia page and assert
3.	Keeps track of the date Paul McCartney was born
4. 	Goes back to The Beatles page and assert
5.	Clicks on the first link to John Lennon’s Wikipedia page and assert
6.	Keeps track of the date that John Lennon was born
7.	Asserts that John Lennon was born before Paul McCartney

Steps to run the script

1. Install cypress with command
  
  > npm install cypress --save-dev
  
2. Run the Test script through terminal with the following command

  > npm run cy:AutomationTask
