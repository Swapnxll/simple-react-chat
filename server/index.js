import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";

// Configuration
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors());

// Socket.IO handlers
io.on("connection", (socket) => {
  console.log("new client connected");

  socket.on("message", (message) => {
    console.log("message received:", message);
    io.emit("message", message); // Broadcast to all clients
  });

  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});

// Start the server
const port = 5000;
server.listen(port, () => {
  console.log("server is listening on port 5000");
});
