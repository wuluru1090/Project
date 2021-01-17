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

//活動詳細頁資訊(單筆資料)
app.get("/api/event/:id?", (req, res) => {
  // res.send(req.query.id);
  const sqlSelect = `SELECT event.*, event_type.event_type_name AS event_type_name, event_theme.event_theme_name AS event_theme_name, member.member_name AS event_host_name, member.member_img AS event_host_img FROM event JOIN event_type ON event.event_type = event_type.event_type_id JOIN event_theme ON event.event_theme = event_theme.event_theme_id JOIN member ON event.event_host_id = member.member_id WHERE event_id = ${req.params.id}`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//活動詳細頁輪播
app.get("/api/eventsearch/relative", (req, res) => {
  // console.log(req.query.id);
  const sqlSelect = `SELECT event.*,event_type.event_type_name AS event_type_name,event_theme.event_theme_name AS event_theme_name FROM event JOIN event_type ON event.event_type = event_type.event_type_id JOIN event_theme ON event.event_theme = event_theme.event_theme_id WHERE event_theme = (${req.query.theme}) LIMIT 6`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//活動搜尋頁頁資訊(單筆資料)
app.get("/api/eventsearch", (req, res) => {
  // res.send(req.query.id);
  const today = converter(new Date().getTime());
  function converter(D) {
    let dateTime = new Date(D);
    let yyyy = dateTime.getFullYear();
    let mm = dateTime.getMonth() + 1;
    let dd = dateTime.getDate();
    let tt = "23:59:59";

    dateTime = String(yyyy + "/" + mm + "/" + dd + " " + tt);
    return dateTime;
  }

  const where = [];
  if (req.query.searchbar)
    where.push(`event.event_name like '%${req.query.searchbar}%'`);
  if (req.query.locate) where.push(`event.event_city = ${req.query.locate}`);
  if (req.query.time)
    where.push(
      `event.event_start_time BETWEEN '${today}' AND '${converter(
        req.query.time
      )}'`
    );
  if (req.query.theme) where.push(`event.event_theme = ${req.query.theme}`);

  const whereSql = where.length > 0 ? " WHERE " + where.join(" AND ") : "";

  const sqlSelect = `SELECT event.*,event_type.event_type_name AS event_type_name, event_theme.event_theme_name AS event_theme_name FROM event JOIN event_type ON event.event_type = event_type.event_type_id JOIN event_theme ON event.event_theme = event_theme.event_theme_id ${whereSql}`;
  console.log(sqlSelect);
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
//活動詳細頁(參加者資訊)
app.get("/api/attendants", (req, res) => {
  // console.log(req.query.id);
  const sqlSelect = `SELECT member_id,member_name,member_img FROM member WHERE member_id IN (${req.query.id})`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// start express server on port 5000
app.listen(3001, () => {
  console.log("server started on port 5000");
});
