# Technical Test - Person Management (C#, SQL Server, and Angular)

##Atention!!!
You need to change the connection string in the Web.config file to connect to SQL Server.

## Overview
This is a simple CRUD (Create, Read, Update, Delete) API for managing person information, implemented in C# using ASP.NET Core and connected to a SQL Server database. The API allows users to perform operations such as adding new persons, retrieving person details, updating existing records, and deleting persons from the system. The frontend was developed using Angular 17.

## Technologies Used
- C#
- ASP.NET Core
- SQL Server
- RESTful API principles
- Angular 17

## API Endpoints
- **Endpoint:** `/api/Pessoa/{id}`

### 1. Get All persons
- **Description:** Retrieve a list of all persons in the system.

### 2. Get person by ID
- **Description:** Retrieve detailed information about a specific person using its unique identifier.

### 3. Add New Vehicle
- **Description:** Add a new person to the system.
- **Request Body:**
  ```json
	{
	  "Nome": "Pedro Souza",
	  "DataNascimento": "1995-11-10",
	  "Inativo": false,
	  "Nacionalidade": 1,
	  "RG": "654321",
	  "Passaporte": "EF654321"
	}


### 4. Update Person
- **Description:** Update information for a specific person.
- **Request Body:**
  ```json
	{
		"Codigo": 1,
		"Nome": "João Marcelo",
		"DataNascimento": "2002-11-06T00:00:00",
		"Inativo": false,
		"Nacionalidade": 1,
		"RG": "123456",
		"Passaporte": "AB123456"
	}


### 5. Delete Person
- **Description:** Delete a specific person from the system.

## Getting Started
1. Clone the repository to your local machine:
	```bash
	git clone https://github.com/zzTchelo/TechnicalTest.git

2. Open the solution in Visual Studio or your preferred C# IDE.

3. Configure the database connection in the `Web.config` file.

4. Build and run the application.

## Database Setup
Make sure to set up a SQL Server database and update the connection string in the `Web.config` file.

## Contributing
Contributions are welcome! If you'd like to improve the API, add new features, or fix any issues, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

## License
This project is licensed under the MIT License

## Contact
If you have any questions or suggestions, feel free to contact me by LinkedIn
