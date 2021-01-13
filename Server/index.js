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

app.get('/class/:id',(req,res)=>{
    const sqlSelect = 
    `SELECT main_class.*,class_teacher.*,class_theme.class_theme_name FROM main_class INNER JOIN class_teacher ON main_class.class_teacher_id = class_teacher.class_teacher_id INNER JOIN class_theme ON main_class.class_theme_id = class_theme.class_theme_id WHERE class_id = ${req.params.id}`;
    // `SELECT * FROM main_class WHERE class_id = ${req.params.id}`;
    db.query(sqlSelect,(err,result)=>{
        res.send(result)
    })
});

// app.post("/api/insert",(req,res)=>{

//     const movieName = req.body.movieName
//     const movieReview = req.body.movieReview

//     const sqlInsert = 
//     "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)";
//     db.query(sqlInsert,[movieName,movieReview],(err,result)=>{
//         console.log(result);
//     });
// });

app.listen(3001,()=>{
    console.log("running on port 3001")
})