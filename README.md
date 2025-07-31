#Chat Application

A full-stack real-time chat application built using **Node.js**, **Express**, **MongoDB Atlas**, and **Socket.io**.

## 🚀 Features

- Real-time messaging using Socket.io
- MongoDB database for storing users and messages
- RESTful APIs with Express
- Frontend (optional or included) built with modern tools like React
- Environment variable support for secure credentials

- <img width="1899" height="899" alt="image" src="https://github.com/user-attachments/assets/a7567616-9a85-4155-8150-76138944dd83" />
- <img width="1906" height="909" alt="image" src="https://github.com/user-attachments/assets/fc967809-a44f-413c-853d-90f3e290e1c7" />



## 📁 Project Structure
CHAT-APPLICATION/
│
├── backend/                         
│   ├── config/                      
│   ├── controllers/                
│   ├── middleware/                 
│   ├── models/                     
│   ├── routes/                     
│   ├── socket/                     
│   ├── .env                        
│   ├── index.js                    
│   ├── package.json                
│   ├── package-lock.json               
│
├── frontend/                       
│   ├── node_modules/
│   ├── public/                     
│   ├── src/                        
│   ├── .gitignore
│   ├── package.json                
│   ├── package-lock.json
│   └── tailwind.config.js          
│
└── README.md      

## ⚙️ Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB Atlas account


# Installation
# Install backend dependencies
- cd backend
- npm install
- If you have a frontend:
- cd ../frontend
- npm install
▶️ Running the App

# Backend
- npm run dev
- This uses nodemon if installed.

# Frontend 
- npm start

✅ Deployment
You can deploy this app on: 

Frontend: Vercel, Netlify

Backend: Render, Railway, or Heroku

Database: MongoDB Atlas (cloud-hosted)

💡 Troubleshooting
MongoServerError: bad auth : authentication failed
Ensure the password is URL-encoded.

Verify the user has access to the database on MongoDB Atlas.

Check that your IP is whitelisted in MongoDB Atlas (or use 0.0.0.0/0 for development).

🧑‍💻 Author
Bhavesh Yadav

