import express from "express";

import dotenv from "dotenv";

import authrouter from "./routes/auth.js";
import connectTomongodb from "./db/dbconnected.js";
import messageRoutes from "./routes/messagerouter.js";
import userRoutes from "./routes/userroute.js";
import cookieParser from "cookie-parser";
import { app, server } from "./Socket/socket.js";

dotenv.config();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

app.use("/api/auth", authrouter);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use(cookieParser());
connectTomongodb();

server.listen(5000, () => console.log("Server Running at 5000"));
