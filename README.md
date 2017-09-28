## About the Greetings-web Application


- This application allows you to **greet** different people in 3 different languages.
- The user can be able to see how many times each person has been greeted.
- All the names that are greeted are stored in the database.


## Steps that must be taken before running the app on your computer.
 
 - You can access my application by forking the repository,that way you will have my repo on your machine.
 - This is an express application hence you will have to do some **installations**
 
 ## Modules that you will have to install.
 
 - Firstly,this app requires NodeJS for it to run so for you to check if you have NodeJS enter this command `node -v` on your terminal,it shall you the version of NodeJS that you have.
 - Type `npm init` to update the package.json file.
 - Now that you have `NodeJS`,you can install install **ExpressJS**.
  - You can install **ExpressJS** by entering this commmand on the terminal  `npm install express --save`.
 - Install **nodemon** that save you from starting the server everytime.
   - You can install **nodemon** using this command `npm install -g nodemon`    
 - Install `express-handlebars` that will use as a view engine.
     - Use this command to install `npm install express-handlebars --save`
 - Install **body-parser** by entering this command `npm install body-parser`.
 -Install **Mongoose** so that the names that are greeted can be stored to the database.
  -Enter this command when installing mongoose,`npm install mongoose`.

## Run the application on your machine.

-Navigate to the directory that has the the application on your command line.
-You are going to run this app using nodemon,so enter `nodemon` on the command line.
-Open a new terminal that you will use for mongo,enter `mongo`.
-You're now ready to go!

##Deployment sites that have my application

 - You can find my application on **Heroku**
 - [Check it here](murmuring-harbor-20208.herokuapp.com)
