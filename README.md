# Voting-App-project

## The project description
The project was to create an app where the user can choose an option from multiple choices of a question.  This had to give the no.of votes received by each option every time a person votes. Only the people who have registered get the opportuniy. We were supposed to use nodejs.


## My journey
My folder structure
- Project
  * User_Registration
  * Voting database

### Step1: To create User Registration
The method:
Step1: Create a table in mySQL

Step2: Configure database connectivity. Create mySQL connection to database 

Step3: Create a register control or handler for user registration. Here we give 

           an insert query, to insert data into the database.
           
- i created a folder User_Registration where i did all the stuff related to user registration. 
- npm followed by db had to be installed to do the project. initializing sql gave me an error. successfully having it done after a 3-day struggle, i got a 'package.json' file which has all the information related to the packages installed for my project. 
- i created a table in mySQL naming it 'users'. this is for user registration. 
- I created 'login.html' - user registration form and 'login.js'- database connectivity and updating query file.  So, my folder had these three files including 'package.json'. 

Resources: 
- http://www.expertphp.in/article/user-login-and-registration-using-nodejs-and-mysql-with-example 
- https://medium.com/technoetics/handling-user-login-and-registration-using-nodejs-and-mysql-81b146e37419
- https://medium.com/technoetics/installing-and-setting-up-mysql-with-nodejs-in-ubuntu-75e0c0a693ba
           
Folder structure:
-User_Registration
 * node_modules- 
 * package.json- https://github.com/Pannaga01/Voting-App-project/blob/master/package.json
 * login.html- https://github.com/Pannaga01/Voting-App-project/blob/master/login.html
 * login.js- https://github.com/Pannaga01/Voting-App-project/blob/master/login.js
 
 Note: I am done with the user registration. Any user registered is added to the database. 
 

### Step2: To making 'voting app'
- I created the 'select.html' file which gives the option to choose a question. Each of the question was a button linked to an other html (using css for buttons) which has options for teach of the respective questions. 
- So i had four more files 'button1.html', 'button2.html', 'button3.html', 'button4.html'. Each of them had 4 option buttons (used bootstrap). 'select.html' was linked to "submit" of 'login.html'. 
- If an option is selected under a question, it has to update the vote number. for this i created an other table 'votes' which updates the no.of votes. So, i followed the same procedure for creating a table in mySQL. i found a code but in 'php' for updating the votes. (php file: https://github.com/Pannaga01/Voting-App-project/blob/master/insert.php)
 
 Folder Structure:
 - Vote database
  * node_modules
  * package1.json- https://github.com/Pannaga01/Voting-App-project/blob/master/package1.json
  * server.js
  * select.html- https://github.com/Pannaga01/Voting-App-project/blob/master/select.html
  * button1.html, button2.html, button3.html, button3.html
    - https://github.com/Pannaga01/Voting-App-project/blob/master/button1.html
    - https://github.com/Pannaga01/Voting-App-project/blob/master/button2.html
    - https://github.com/Pannaga01/Voting-App-project/blob/master/button3.html

Resources: 
- https://www.w3schools.com/css/css3_buttons.asp
- https://www.w3schools.com/bootstrap/bootstrap_buttons.asp
- https://www.tutorialrepublic.com/php-tutorial/php-mysql-insert-query.php
- https://www.dougv.com/2012/04/how-to-increment-a-counter-in-mysql-based-on-a-radio-button-click/


