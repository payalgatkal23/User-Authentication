# 🔐 User Authentication System (MERN)

A full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to register and log in using email and password. This project demonstrates frontend-backend integration, REST API development, and database management.

---

## 🚀 Features

- User registration with email validation
- User login authentication
- React frontend for login & registration
- Express backend APIs
- MongoDB database for storing user data
- Axios used for API communication
- Basic form validation

---

## 🛠️ Tech Stack

### Frontend

- React
- Axios
- React Router

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

---

## 📁 Project Structure

```
project/
│
├── models/
│ └── user.js
│
├── routes/
│ └── userRoutes.js
│
├── controller/
│ └── usercontroller.js
│
├── server.js
│
└── client/
    └── src/
        ├── components/
        │   ├── Login.js
        │   └── Register.js
        └── App.js

```

---

## 🔗 API Endpoints

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| POST   | /register | Register new user |
| POST   | /login    | Login user        |

---

## ⚙️ How to Run Locally

### Install backend dependencies

```bash
npm install
```

### Start backend server

```bash
node server.js
```

### Start frontend

```bash
cd client
npm install
npm start
```

## 📌 Key Concepts Used

- MERN stack development
- REST API design
- Client-server communication
- React state management
- Form handling
- MongoDB data modeling

## 🚧 Future Improvements

- Implement JWT-based authentication
- Add protected routes (authentication middleware)
- Improve UI/UX design
- Add error handling on frontend

## 👩‍💻 Author

Payal Gatkal
GitHub: https://github.com/payalgatkal23
