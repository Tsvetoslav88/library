# Bike
Bike is a full stack application for Bike managing, consists of:

## Back-end part
1. Prerequisites
- [SQLite3](https://www.sqlite.org/download.html) `(sqlite-tools-win32-x86-3330000.zip for Windows)`
- [Java9+](https://adoptopenjdk.net/)
- [Maven3+](https://maven.apache.org/download.cgi)
- [Spring Tool Suite](https://spring.io/tools) or Intellij
- [Postman](https://www.postman.com/downloads/)

2. Bulding and runnig
- Building of the project
  - Go into main folder and run - `mvn clean install`
  - Or Run directly Spring boot project using IDE
- Load `Bike.postman_collection.json` collection into Postman and run some of the requests

**Note:** The DB is ready for use, so need additioanl action on it

## Frot-end part
1. Prerequisites
- [Node JS](https://nodejs.org/en/)
- [Yarn package manager](https://classic.yarnpkg.com/en/docs/install) (Optional)
- Angular CLI

2. Building and runnig

**Note:** Check if the back-end part is up and runnig

- Build of the project - `npm install`
- Run the project - `npm start`

- Access the SPA
  - http://localhost:4200 - Main screen
  - http://localhost:4200/server/api/v1/bikes - Bikes screen
  - http://localhost:4200/admin - Admin screen
  
3. Prod building and runnig
- Build it - `ng build --prod`
- Run it and access it - `node server.js`
