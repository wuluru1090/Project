const express = require ('express');
const bodyParser = require('body-parser')
const app = express();
const mysql=require('mysql');
const cors = require('cors')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'project_class'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
const orderby=["","ORDER BY class_start_date DESC","ORDER BY class_price ASC","ORDER BY class_price DESC"]

// 接收主題篩選及排序的資料
app.get('/class/category',(req,res)=>{
    const sqlSelect = 
    `SELECT main_class.*,class_theme.class_theme_name FROM main_class INNER JOIN class_teacher ON main_class.class_teacher_id = class_teacher.class_teacher_id INNER JOIN class_theme ON main_class.class_theme_id = class_theme.class_theme_id WHERE class_theme_name IN (${req.query.theme}) ${orderby[+req.query.orderby]} 
    `;
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
});

// 接收商品頁下方的推薦主題商品
app.get('/class/theme',(req,res)=>{
    const sqlSelect = 
    `SELECT main_class.*,class_theme.class_theme_name FROM main_class INNER JOIN class_teacher ON main_class.class_teacher_id = class_teacher.class_teacher_id INNER JOIN class_theme ON main_class.class_theme_id = class_theme.class_theme_id WHERE class_theme_name IN (${req.query.theme}) LIMIT 6
    `;
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
});

// 商品頁面資料
app.get('/class/:id',(req,res)=>{
    const sqlSelect = 
    `SELECT main_class.*,class_teacher.*,class_theme.class_theme_name FROM main_class INNER JOIN class_teacher ON main_class.class_teacher_id = class_teacher.class_teacher_id INNER JOIN class_theme ON main_class.class_theme_id = class_theme.class_theme_id WHERE class_id = ${req.params.id}`;
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
});

// 加入我的收藏
app.post('/class/favorites',(req,res)=>{
    const member_id = req.body.member_id;
    const class_id = req.body.class_id;
    const member_like = req.body.member_like;
    const sqlInsert = "INSERT INTO like_class (member_id,class_id,member_like) VALUES (?,?,?)";
    // console.log(sqlInsert)
    db.query(sqlInsert,[member_id,class_id,member_like],(err,result)=>{
        console.log(result)
        res.json({
            state: "success"
        })
    })
})

// 刪除我的收藏
app.delete('/class/delete/:classId',(req,res)=>{ 
    const sqlDelete = `DELETE FROM like_class WHERE member_id=101 AND class_id=${req.params.classId}`
    console.log(sqlDelete)
    db.query(sqlDelete,(err,result)=>{
        console.log(result)
        res.json({
            state: "success"
        })
    })
})


// 接收所有課程的資料
app.get('/class',(req,res)=>{
    const sqlSelect = 
    `SELECT main_class.*,class_theme.class_theme_name FROM main_class INNER JOIN class_teacher ON main_class.class_teacher_id = class_teacher.class_teacher_id INNER JOIN class_theme ON main_class.class_theme_id = class_theme.class_theme_id
    `;
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
});


app.listen(3001,()=>{
    console.log("running on port 3001")
})