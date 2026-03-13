# User Authentication System

A simple **MERN stack user authentication system** built using **React, Node.js, Express, and MongoDB**.  
Users can **register and log in** using their email and password. The project demonstrates **REST API development, React frontend integration, and MongoDB database operations**.

---

## Features

- User **registration** with unique email validation  
- User **login authentication**  
- **React frontend** for login and register forms  
- **Express backend APIs** for authentication  
- **MongoDB database** to store user credentials  
- **Axios** used in React to communicate with backend APIs  

---

## Tech Stack

### Frontend
- React
- Axios
- React Router

### Backend
- Node.js
- Express

### Database
- MongoDB
- Mongoose

---

## Project Structure

```
project
│
├── models
│   └── user.js
│
├── server.js
│
└── client
    └── src
        ├── components
        │   ├── Login.js
        │   └── Register.js
        └── App.js
```

---

## Run the Project

### Install backend dependencies

```bash
npm install
```

### Start backend server

```bash
node server.js
```

### Start React frontend

```bash
cd client
npm install
npm start
```

---

## Future Improvements

- Add **password hashing using bcrypt**
- Implement **JWT authentication**
- Improve **UI design**
- Add **protected routes**

---

## Author

**Payal Gatkal**  
GitHub: https://github.com/payalgatkal23
