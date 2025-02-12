# `UserManager`

UserManager is a RESTful CRUD (Create, Read, Update, Delete) application built with Node.js, Express.js, and MongoDB. It provides a robust backend for managing user data, complete with API endpoints for creating, reading, updating, and deleting users.

##  `Features`
**`User Management`**
- Create new users with details like firstName, lastName, email, gender, and jobTitle.
- Fetch all users in HTML or JSON format.
- Update user details (e.g., modify lastName).
- Delete users from the database.

**`Database Integration`**
- Uses MongoDB for persistent data storage.
- Schema validation with Mongoose.
  
**`RESTful API`**
- Follows REST principles for easy integration with frontend or other services.

**`Logging`**
- Uses Morgan for HTTP request logging.

##  `Technologies Used`

- **`Backend`**: Node.js, Express.js.
- **`Database`**: MongoDB.
- **`Middleware`**: Morgan (for logging).
- **`Package Manager`**: npm.
- **`Version Control`**: Git.

## `Installation`

## Prerequisites
- **`Node.js`**(v18 or higher)
- **`MongoDB`**(local or cloud instance)
- **`Git`**(optional)
  
## Steps
 __1. Clone the repository :__
```
git clone https://github.com/JahidulHasanSuhel/UserManager.git
cd UserManager
```
__2. Install dependencies :__
```
npm install
```

__3. Set Up MongoDB :__

- Ensure MongoDB is running locally or update the connection string in `server.js` to point to your MongoDB instance.

- Default connection string: `mongodb://127.0.0.1:27017/suheldb`.

__4. Start the Server :__
```
npm start
```

__5. Access the Application :__

- The server will start on `http://localhost:3000`.

- Use tools like `Postman` or `curl` to interact with the API.

## `API Endpoints`
| HTTP Method | Endpoint           | Description                          |
|-------------|--------------------|--------------------------------------|
| `POST`      | `/posts`           | Create a new user.                   |
| `GET`       | `/users`           | Fetch all users in HTML format.      |
| `GET`       | `/userall`         | Fetch all users in JSON format.      |
| `PATCH`     | `/users/:id`       | Update a user's `lastName`.          |
| `DELETE`    | `/users/:id`       | Delete a user.                       |


## Example Requests
**Create a User**
**Endpoint:** `POST /posts`
**Request Body:**
```
{
  "firstName": "Muhammad",
  "lastName": "Suhel",
  "email": "Suhel@example.com",
  "gender": "Male",
  "jobTitle": "Software Engineer"
}
```
**Fetch All Users (HTML)**
**Endpoint:** `GET /users`
**Response:**
```
<ul>
  <li>Suhel - Suhel@example.com</li>
  <li>xyz - xyz@example.com</li>
</ul>
```
**Fetch All Users (JSON)**
**Endpoint:** `GET /userall`
**Response:**
```
[
  {
    "_id": "64f1b2c8e4b0a1a2b3c4d5e6",
    "firstName": "Muhammad",
    "lastName": "Suhel",
    "email": "Suhel@example.com",
    "gender": "Male",
    "jobTitle": "Software Engineer",
    "createdAt": "2023-09-01T12:00:00.000Z",
    "updatedAt": "2023-09-01T12:00:00.000Z"
  }
]
```
**Update a User**
**Endpoint:** `PATCH /users/:id`
**Response:**
```
{
  "status": "success"
}
```
**Delete a User**
**Endpoint:** `DELETE /users/:id`
**Response:**
```
{
  "status": "success"
}
```
## `Contributing`
Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.
