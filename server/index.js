const express = require("express");
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