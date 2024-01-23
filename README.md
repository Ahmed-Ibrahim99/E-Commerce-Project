# E-Commerce Project

This is a sample e-commerce project created with Spring Boot for the backend and Angular for the frontend. The project uses PostgreSQL for the database, Spring Security for authentication and authorization, JWT for token-based authentication, JPA for data access, and OpenAPI for API documentation using Swagger. The frontend is built with PrimeNG, PrimeFlex, and CSS, and uses a proxy to connect to the backend.

## Description

This e-commerce project is designed for anyone who wants to buy tech products online. It provides a simple, easy-to-use interface for browsing products and placing orders.

## Technologies Used

The following technologies were used in the development of this project:

- Spring Boot 2.7.12-SNAPSHOT
- Angular
- PostgreSQL
- Docker
- Spring Security
- JWT
- JPA
- Swagger
- PrimeNG
- PrimeFlex

## Getting Started

To get started with this project, you'll need to clone the repository to your local machine and follow these steps:

### Prerequisites

- Java 17
- Node.js and npm
- PostgreSQL
- Docker and Docker Compose

### Installation

1. Clone the repository to your local machine: `git clone https://github.com/your-username/e-commerce-project.git`

2. Import the database schema from the `database.sql` file located in the root directory of the project into your PostgreSQL instance.

3. Open a terminal and navigate to the project's root directory.

4. Run the following command to start the backend server using Docker Compose: `docker-compose up`

5. Open another terminal and navigate to the frontend directory of the project.

6. Run the following command to install the frontend dependencies: `npm install`

7. Run the following command to start the frontend server: `ng serve`

### Usage

Once the backend and frontend servers are running, you can access the e-commerce application by opening a web browser and navigating to http://localhost:4200. This will show you the list of available tech products. If you want to order a product, you will need to log in.

### API Documentation

The API documentation for this project is available using Swagger. To view the API documentation, navigate to http://localhost:8080/swagger-ui.html in your web browser.

## Contributing

If you would like to contribute to this project, please open a pull request with your proposed changes.
