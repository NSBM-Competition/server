const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const http = require("http");
const { Server } = require("socket.io");

const GenerateQRRoute = require("./router/GenerateQRRoute/GenerateQRRoute")
const LoginRoute = require("./router/LoginRoute/LoginRoute")
const RegisterRoute = require("./router/RegisterRoute/RegisterRoute")
const RegisterUserDetailsRoute = require("./router/GetAllRegisteredUserDetailsRoute/GetAllRegisteredUserDetailsRoute")

require("./db/db")

// CREATE A EXPRESS APP
const app = express();


app.use(bodyParser.json());
app.use(cors())


app.use("/api/v1/user",LoginRoute)
app.use("/api/v1/user",RegisterRoute)
app.use("/api/v1/generate",GenerateQRRoute)
app.use("/api/v1/user",RegisterUserDetailsRoute)


// const server = http.createServer(app);


// const io = new Server(server, {
//         cors: {
//                 // origin: "http://localhost:3000",
//                 methods: ["GET", "POST"],
//         },
// });

// io.on("connection", (socket) => {
//     console.log("User connected ", socket.id);

//    socket.on("send_message", (data) => {
//                 console.log("Message Received ", data);

//                 io.emit("receive_message", data);
//         })


//    socket.on("disconnect", () => {
//                 console.log("User disconnected ", socket.id);
//         })


// });


// SET PORT
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
})