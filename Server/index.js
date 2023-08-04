const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const http = require("http").createServer(app);
const io = require("socket.io")(http);
var ConnectedClientList = [];
io.on("connection", (socket) => {
  ConnectedClientList.push(socket.handshake.query["name"]);
  io.emit("userAdded", { ConnectedClientList });
  socket.on("disconnect", () => {
    ConnectedClientList = ConnectedClientList.filter(
      (x) => x != socket.handshake.query["name"]
    );
    io.emit("userAdded", { ConnectedClientList });
  });

  socket.on("message", ({ name, message, to }) => {
    io.emit("message", { name, message, to });
  });
});
const bodyParser = require("body-parser");
const mysql = require("mysql2");
//const cors = require("cors");
const { Router } = require("express");
// const fileUpload = require("express-fileupload");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/images", express.static("images"));


var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));

// app.use(fileUpload());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "werfa",
});

app.get("/system/reboot", (req, res) => {
  process.exit(1)
})


var a = 0;
app.post("/api/ins_payment", (req, res) => {


  a++;
  console.log(a);
  const name ="werfa";
  
  const sqlInsert =
    "UPDATE werfano SET No = ? WHERE name = ? ";
  db.query(
    sqlInsert,
    [a, name,],
    (error, result) => {
      if (error) {
        console.log(error);
      }
    }
  );
});



app.get("/api/get/payli", (req, res) => {
  const name = "werfa";
  const sqlGet = "SELECT * FROM werfano WHERE name = ?";
  db.query(sqlGet, [name], (error, result) => {
    res.send(result);
  });
});


http.listen(5000, () => {
  console.log("Server is running on port 5000");
});
