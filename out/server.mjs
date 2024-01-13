import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins
    methods: ["GET", "POST"], // Allow GET and POST methods
  },
});

app.use(express.json());
app.use(cors());

app.post("/:channelid", (req, res) => {
  const channelid = req.params.channelid;
  const message = req.body.message;
  io.to(channelid).emit("message", message);
  res.status(200).send({ status: "Message sent" });
});

io.on("connection", (socket) => {
  const channelid = socket.handshake.query.channelid;
  socket.join(channelid);
});

server.listen(3001, () => {
  console.log("https://socket.kloun.lol  is running");
});