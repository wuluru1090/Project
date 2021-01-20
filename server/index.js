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
  const sqlSelect = `SELECT event.*, event_type.event_type_name AS event_type_name, event_theme.event_theme_name AS event_theme_name, member.member_name AS event_host_name, member.member_img AS event_host_img FROM event JOIN event_type ON event.event_type = event_type.event_type_id JOIN event_theme ON event.event_theme = event_theme.event_theme_id JOIN member ON event.event_host_id = member.member_id WHERE event_id = ${req.params.id}`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//活動標籤(用在橫版卡片)
app.get("/api/eventtags/:id?", (req, res) => {
  const sqlSelect = `SELECT event_tags_relate.*, event_tags.tags_name AS tags_name FROM event_tags_relate JOIN event_tags ON event_tags_relate.event_tags_tags_id = event_tags.tags_id WHERE event_tags_relate.event_tags_event_id = ${req.params.id}`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//活動詳細頁輪播
app.get("/api/eventsearch/relative", (req, res) => {
  console.log(req.query.id, req.query.theme);
  const sqlSelect = `SELECT event.*,event_type.event_type_name AS event_type_name,event_theme.event_theme_name AS event_theme_name FROM event JOIN event_type ON event.event_type = event_type.event_type_id JOIN event_theme ON event.event_theme = event_theme.event_theme_id WHERE event_theme = (${req.query.theme}) and event_id <> (${req.query.id}) ORDER BY RAND() LIMIT 6`;
  // console.log(sqlSelect);
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
  if (req.query.type) where.push(`event.event_type = ${req.query.type}`);

  const whereSql = where.length > 0 ? " WHERE " + where.join(" AND ") : "";

  const sqlSelect = `SELECT event.*,event_type.event_type_name AS event_type_name, event_theme.event_theme_name AS event_theme_name FROM event JOIN event_type ON event.event_type = event_type.event_type_id JOIN event_theme ON event.event_theme = event_theme.event_theme_id ${whereSql}`;
  // console.log(sqlSelect);
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

//活動頁留言板寫入資料
app.post("/api/comment", (req, res) => {
  const commentEventId = req.body.commentEventId;
  const commentMemberId = req.body.commentMemberId;
  const commentContent = req.body.commentContent;
  const commentTime = req.body.commentTime;

  const sqlInsert =
    "INSERT INTO event_comment (comment_event_id, comment_member_id,comment_content,comment_time) VALUES (?,?,?,NOW())";
  console.log(sqlInsert);
  db.query(
    sqlInsert,
    [commentEventId, commentMemberId, commentContent, commentTime],
    (err, result) => {
      console.log(err);
    }
  );
});

//活動頁留言板獲取資料
app.get("/api/get/comment/:id?", (req, res) => {
  const sqlSelect = `SELECT event_comment.*,member.member_name AS member_name, member.member_img AS member_img FROM event_comment JOIN member ON event_comment.comment_member_id = member.member_id  WHERE comment_event_id =${req.params.id} ORDER BY comment_time`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//獲得訂單
app.get("/api/eventorder", (req, res) => {
  const sqlSelect = `SELECT * FROM s_event WHERE vaild = ${req.query.valid}`;
  console.log(sqlSelect);
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//收藏
app.post("/api/save", (req, res) => {
  const likeEventId = req.body.likeEventId;

  const likeMemberId = req.body.likeMemberId;

  const memberLike = 1;

  const sqlInsert =
    "INSERT INTO like_event (member_id,event_id,member_like) VALUES (?,?,?)";
  db.query(
    sqlInsert,
    [likeMemberId, likeEventId, memberLike],
    (err, result) => {
      console.log(err);
    }
  );
});
//刪除收藏
app.delete("/api/delete", (req, res) => {
  const eventId = req.query.eventId;
  const memId = req.query.memId;
  const sqlDelete = `Delete FROM like_event WHERE event_id=${eventId} AND member_id=${memId}`;
  db.query(sqlDelete, (err, result) => {
    if (err) console.log(err);
  });
});

//查是否有收藏
app.get("/api/save", (req, res) => {
  const eventId = req.query.eventId;
  const memId = req.query.memId;
  // console.log(eventId, memId);
  const sqlSelect = `SELECT * FROM like_event WHERE event_id=${eventId} AND member_id=${memId}`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// start express server on port 5000
app.listen(3001, () => {
  console.log("server started on port 5000");
});
