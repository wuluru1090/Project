const express = require("express");
const app = express(); // create express app
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "final_project",
});

app.use(cors()); //跨來源資料共用
app.use(express.json()); //用來解析json檔，因為前端回傳的是json object = app.use(bodyParser.son())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/event/:id", (req, res) => {
  // res.send(req.query.id);
  const sqlSelect = `SELECT * FROM event WHERE event_id = ${req.params.id}`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/eventsearch", (req, res) => {
  // res.send(req.query.id);
  const sqlSelect =
    "SELECT event_id,event_name,event_location,event_start_time,event_end_time,event_address,event_photo,event_details FROM event";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// start express server on port 5000
app.listen(3001, () => {
  console.log("server started on port 5000");
});
