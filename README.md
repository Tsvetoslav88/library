## Bike
Bike is a project for managing of bike. It consists of Back-end part(Spring boot REST API) and Front-end(Angular). The idea of the project is to demonstrate how Angular and Spring boot work together.

It provides folloing functionality: 
- Show all bikes which are available in the DB (public)
- Purchase a bike (only for register users)
- Bike registration (only for admin users)
- User registration (only for admin users)

The entry point for a user is a website which is available under the address: http://localhost:4200/

---

### Start up information

In order to run this application you need to install two tools: **Docker** & **Docker Compose**.

Instructions how to install **Docker** on [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/), [Windows](https://docs.docker.com/docker-for-windows/install/) , [Mac](https://docs.docker.com/docker-for-mac/install/) .

**Dosker Compose** is already included in installation packs for *Windows* and *Mac*, so only Ubuntu users needs to follow [this instructions](https://docs.docker.com/compose/install/) .


### How to run it?

An entire application can be ran with a single command in a terminal:

```
$ docker-compose up -d
```

If you want to stop it use following command:

```
$ docker-compose down
```

---
### Development information

#### Bike(REST API)

This is a Spring Boot (Java) based application that connects with a
database that and expose the REST endpoints that can be consumed by
frontend. It supports multiple HTTP REST methods like GET, POST, PUT and
DELETE 

Full list of available REST endpoints could be found in Swagger UI,
which could be called using link: **http://localhost:9090/swagger-ui.html**

This app is put in Docker container and its definition can be found
in a file *bike/Dockerfile*. 



1. Tech stack
   - [SQLite3](https://www.sqlite.org/download.html) `(sqlite-tools-win32-x86-3330000.zip for Windows)`
   - [Java9+](https://adoptopenjdk.net/)
   - [Maven3+](https://maven.apache.org/download.cgi)
   - [Spring Tool Suite](https://spring.io/tools) or Intellij
   - [Postman](https://www.postman.com/downloads/)
   - [Docker](https://www.docker.com/)

2. Building and running as a standalone application
   - Build project from using Maven - `mvn clean install`
   - Execute already built jar file = `java -jar target/bike-0.0.1-SNAPSHOT.jar`


3. Testing APIs
   - Load `Bike.postman_collection.json` collection into Postman and run some of the requests

**Note:** The Sqlite DB automationly created and populated with predefined data.


#### Bike-ui(Front-end)
This is a real endpoint for a user where they can review and manipulate their
bikes. It consumes the REST API endpoints provided by
*bike*.

This app is put in Docker container and its definition can be found
in a file *bike-ui/Dockerfile*. 

It can be entered using link: **http://localhost:4200/**

1. Prerequisites
   - [Node JS](https://nodejs.org/en/)
   - [Yarn package manager](https://classic.yarnpkg.com/en/docs/install) (Optional)
   - [Ng Bootstrap](https://ng-bootstrap.github.io/#/homeinstall)
   - Angular CLI: 10.1.7
   - Node: 12.18.4
   - [Docker](https://www.docker.com/)


**Note:** Check if the back-end part is up and runnig

2. Building and running as a standalone application
   - Build of the project - `npm install`
   - Run the project - `npm start`

- Access the SPA
  - http://localhost:4200 - Main screen
  - http://localhost:4200/server/api/v1/bikes - Bikes screen
  - http://localhost:4200/admin - Admin screen
  
3. Prod building and runnig
   - Build it - `ng build --prod`
   - Run it and access it - `node server.js`
