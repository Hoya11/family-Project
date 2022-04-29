const express = require("express");
const connect = require("./schemas/index");
const cors = require("cors");
const app = express();
const port = 3000;

connect();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(port, "포트가 켜졌습니다.");
});