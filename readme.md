# Library Management System
## Project Configuration
This is the backend nodejs project written in TypeScript. To start the project, you need to have Nodejs installed on your computer. 

- Nodejs@latest
- Any Code editor

## Features

- Data storage is done using JSON file (Upto 5 Books are already loaded)
- Currently, can be used with any one customer id specified in `src/data/customers.json´
- Unit tests with jest and supertest
- Customer id 2 is for TDD
- Routes and controllers are REST API part and services directory has all the logic of functionalities.

## To test the project

```sh
npm i
npm run test
```

## Testcases

- List of books (Should be run with 200)
- Borrow a book (Should be run with 200)
- Borrow same book again (Should not be 200)
- Borrow other book (Should be run with 200)
- Borrow more than 2 (third) book (Should not be 200)
- Return a book

## To run the project

```sh
npm i
npm start
```