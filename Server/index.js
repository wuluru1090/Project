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

app.get('/class/category',(req,res)=>{
    const sqlSelect = 
    `SELECT main_class.*,class_theme.class_theme_name FROM main_class INNER JOIN class_teacher ON main_class.class_teacher_id = class_teacher.class_teacher_id INNER JOIN class_theme ON main_class.class_theme_id = class_theme.class_theme_id WHERE class_theme_name IN (${req.query.theme}) ${orderby[+req.query.orderby]} 
    `;
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
});

app.get('/class/theme',(req,res)=>{
    const sqlSelect = 
    `SELECT main_class.*,class_theme.class_theme_name FROM main_class INNER JOIN class_teacher ON main_class.class_teacher_id = class_teacher.class_teacher_id INNER JOIN class_theme ON main_class.class_theme_id = class_theme.class_theme_id WHERE class_theme_name IN (${req.query.theme}) LIMIT 6
    `;
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
});


app.get('/class/:id',(req,res)=>{
    const sqlSelect = 
    `SELECT main_class.*,class_teacher.*,class_theme.class_theme_name FROM main_class INNER JOIN class_teacher ON main_class.class_teacher_id = class_teacher.class_teacher_id INNER JOIN class_theme ON main_class.class_theme_id = class_theme.class_theme_id WHERE class_id = ${req.params.id}`;
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
});



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