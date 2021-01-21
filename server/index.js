const express = require("express");
<<<<<<< HEAD
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

//活動相簿
app.get("/api/event/album/:id?", (req, res) => {
  const sqlSelect = `SELECT photo.*, member.member_name AS member_name FROM photo JOIN member ON photo.member_id = member.member_id WHERE photo.event_id=${req.params.id} AND photo.valid=1 AND photo.photo_show=1`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//會員相簿照片
app.get("/api/event/memberalbum", (req, res) => {
  const eventId = req.query.eventId;
  const memberId = req.query.memberId;
  const sqlSelect = `SELECT photo.*, member.member_name AS member_name FROM photo JOIN member ON photo.member_id = member.member_id WHERE photo.event_id=${eventId} AND photo.member_id = ${memberId} AND photo.valid=1`;
  // console.log(sqlSelect);
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

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
  // console.log(req.query.id, req.query.theme);
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
  // console.log(sqlInsert);
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

//獲得訂單(參與者頁面用)
app.get("/api/eventorder", (req, res) => {
  const sqlSelect = `SELECT * FROM s_event WHERE vaild = ${req.query.valid}`;
  // console.log(sqlSelect);
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
  const sqlSelect = `SELECT * FROM like_event WHERE event_id=${eventId} AND member_id=${memId}`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// app.get("/api/eventwasbought", (req, res) => {
//   const eventId = req.query.eventId;
//   const memberId = req.query.memberId;
//   const sqlSelect = `SELECT * FROM s_event WHERE id=${memberId} AND  FIND_IN_SET(${eventId}, event_id) > 0`;
// });

// start express server on port 5000
app.listen(3001, () => {
  console.log("server started on port 5000");
});
=======
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require("cookie-parser")
const session = require("express-session")

const mysql = require('mysql');

const db = mysql.createPool({
	host : '127.0.0.1',
	user : 'root',
	password : '',
	database : 'final_project',
});

app.use(cookieParser());

// 圖片base64需要改最大容量
app.use(bodyParser.urlencoded({
	extended: true,
	limit: '50mb',
	parameterLimit: 100000
}));
app.use(cors({
	origin: ["http://localhost:3000"],
	methods: ["GET", "POST"],
	credentials: true,

}));
// 圖片base64需要改最大容量
app.use(express.json({limit: '50MB'}));
app.use(
	session({
		key: "userId",
		secret: "subscribe",
		resave: false,
		saveUninitialized: false,
		cookie:{
			expires: 60 * 60 * 24 * 60,
		},
	})
)

// 註冊資料進資料庫
app.post("/register", (req, res) =>{
	console.log(req.body.username)
	

	const name = req.body.name;
	const username = req.body.username;
	const password = req.body.password;
	const email = req.body.email;
	const birthDate = req.body.birthDate;
	const sex = req.body.sex;
	const exp = req.body.exp;



	db.query("INSERT INTO member (member_name, member_account, member_password, member_email, member_birthday, member_gender, member_ex, valid) VALUES (?,?,?,?,?,?,?,?)", [name, username, password, email, birthDate, sex, exp, "1"], (err,result)=>{
		console.log(err);
	});

	res.send("i got u")
	
	
});

// 登入/登出 session取得+ loggedin切換
app.get("/login", (req,res) =>{
	if(req.session.user){
		res.send({loggedIn: true, user: req.session.user})
	}else{
		res.send({loggedIn: false})
	}
})
app.get('/logout', (req, res)=> {
	if (req.session.user) {
			res.clearCookie('userId');
			res.send({loggedIn: false})
		}
	})

	// 登入驗證
app.post("/login", (req, res) =>{

	const username = req.body.username;
	const password = req.body.password;



	db.query(
		"SELECT * FROM member WHERE member_account = ? AND member_password = ?", 
		[username, password], (err,result)=>{
		console.log({err: err});

		if(result.length>0) {
			req.session.user = result
			console.log(req.session.user)
			res.send(result);
		}else{
			res.send({ message: "錯誤的帳號或密碼"})
		}
	});
	
});


// 發起活動頁進資料庫
app.post("/eventform", (req, res) =>{
	console.log(JSON.stringify(req.body.event_host_contact))
	

	const event_host_contact = JSON.stringify(req.body.event_host_contact);
	const startDate = req.body.startDate;
	const endDate = req.body.endDate;
	const actlocaction = req.body.actlocaction;
	const actcity = req.body.actcity;
	const actexactlocaction = req.body.actexactlocaction;
	const actclump = req.body.actclump;
	const actexactclump = req.body.actexactclump;
	const actsignupdead = req.body.actsignupdead;
	const actprice = req.body.actprice;
	// const actpricemethod = req.body.actpricemethod;
	const actpeople = req.body.actpeople;
	const actpeopleline = req.body.actpeopleline;
	const acttitle = req.body.acttitle;
	const acttheme = req.body.acttheme;
	const actdetail = req.body.actdetail;
	const acttags = req.body.acttags;

	const actupload = req.body.actupload;

	const memberid = req.body.memberid;

	console.log(memberid)

	
	db.query("INSERT INTO event_tags (tags_name) VALUES (?)", [acttags], (err,result)=>{
		console.log(err);
	});
	db.query("INSERT INTO event (event_host_contact, event_start_time, event_end_time, event_location, event_city, event_address, event_meeting_point, event_meeting_address, event_deadline_date, event_fees, event_valid_attendents, event_limit_number, event_name, event_theme, event_details,event_photo, event_host_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [event_host_contact, startDate, endDate, actlocaction,actcity, actexactlocaction, actclump, actexactclump, actsignupdead, actprice, actpeople, actpeopleline, acttitle, acttheme, actdetail, actupload, memberid], (err,result)=>{
		console.log(err);
	});
	
});

// 城市map
app.get('/cityya', (req, res)=> {

		db.query(
			"SELECT * FROM event_city WHERE 1", (err,result)=>{
			// console.log(result);
			res.send(result)
			}
		);
		
	})	


// 標籤map
app.get('/tagss', (req, res)=> {

	db.query(
		"SELECT * FROM event_tags WHERE 1", (err,result)=>{
		console.log(result);
		res.send(result)
		}
	);
		
})	

// 現在測試用event資料表 之後要用關聯式
app.get('/eventstartdata/get/:id',(req,res)=>{
	const sqlselect = `SELECT * FROM event WHERE event_id = ${req.params.id}`;
	db.query(sqlselect,(err,result)=>{
		res.send(result);
		console.log(result)
	})

})





app.listen(3001, ()=>{
	console.log("running on port 3001")
});
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
