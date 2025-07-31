// // const express = require('express')// method-1
// import express from "express"; // method-2
// import dotenv from "dotenv"; 
// import connectDB from "./config/database.js";
// import userRoute from "./routes/userRoute.js";
// import messageRoute from "./routes/messageRoute.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import { app,server } from "./socket/socket.js";
// import path from "path";
// dotenv.config({});

 
// const PORT = process.env.PORT || 5000;

// const _dirname = path.resolve();

// // middleware
// app.use(express.urlencoded({extended:true}));
// app.use(express.json()); 
// app.use(cookieParser());
// const corsOption={
//     origin:'http://localhost:3000',
//     credentials:true
// };
// app.use(cors(corsOption)); 


// // routes
// app.use("/api/v1/user",userRoute); 
// app.use("/api/v1/message",messageRoute, "/fronted/dist");
// app.get('*',(_,res)=>{
//     res.sendFile(path.resolve(_dirname, "fronted", "dist", "index.html"));
// })
 
// app.use(express.static(path.join(_dirname)))


// server.listen(PORT, ()=>{
//     connectDB();
//     console.log(`Server listen at port ${PORT}`);
// });
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;
const _dirname = path.resolve();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOption));

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);

// Serve frontend
app.use(express.static(path.join(_dirname, "frontend", "build")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});

// Start server
server.listen(PORT, () => {
  connectDB();
  console.log(`Server listening at port ${PORT}`);
});


