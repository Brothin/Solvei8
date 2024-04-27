# Project description:
Created an MVP for a registry for Govt funded Training Centers which includes Spring or Play project with support for two APIs.

# Getting started

## Clone the repository
```
https://github.com/Brothin/Solvei8.git
```
```
cd Solvei8
```

## You need
- Database (MongoDB).

## Create your MongoDB account and database/cluster
• Create your own MongoDB account by visiting the MongoDB website and signing up for a new account.

• Create a new database or cluster by following the instructions provided in the MongoDB documentation. Remember to note down the "Connect to your application URI" for the database, as you will need it later. Also, make sure to change <password> with your own password.

• Add your current IP address to the MongoDB database's IP whitelist to allow connections (this is needed whenever your ip changes).

## Create .env file
Create a .env file to store your credentials. This file will store environment variables for the project to run.
```
MONGODB_URI = 'mongodb+srv://<username>:<password>@mongodburlhere'
PORT=3000
```

## Installation
To install and run this project - Install dependencies using npm and run server side of application.
```
npm install
npm start
```

## Error Handling
Any error related to a particular feature will be displayed on console as well as an error message will be sent to user in the form of json. It is handled by express-validator.
