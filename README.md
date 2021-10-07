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
   - Build and run as a standalone application
     - Build project from using Maven - `mvn clean install`
     - Execute already built jar file = `java -jar target/bike-0.0.1-SNAPSHOT.jar`
   - Build and run as a docker image
     -  Build docker file - `docker build -t bike:latest .`
     -  Run already built docker file - `docker run -d -p 9090:9090 -t bike:latest`


3. Testing APIs
- Load `Bike.postman_collection.json` collection into Postman and run some of the requests

**Note:** The Sqlite DB automationly created and populated with predefined data.

## Front-end part
1. Prerequisites
- [Node JS](https://nodejs.org/en/)
- [Yarn package manager](https://classic.yarnpkg.com/en/docs/install) (Optional)
- [Ng Bootstrap](https://ng-bootstrap.github.io/#/homeinstall)
- Angular CLI: 10.1.7
- Node: 12.18.4


**Note:** Check if the back-end part is up and runnig

2. Building and runnig
   _Build of the project - `npm install`
   _Run the project - `npm start`

- Access the SPA
  - http://localhost:4200 - Main screen
  - http://localhost:4200/server/api/v1/bikes - Bikes screen
  - http://localhost:4200/admin - Admin screen
  
3. Prod building and runnig
- Build it - `ng build --prod`
- Run it and access it - `node server.js`
