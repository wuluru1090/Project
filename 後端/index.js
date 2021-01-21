const express = require("express");
const app = express();
const bodyParser =require('body-parser')
const mysql = require("mysql");
const cors = require("cors");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "123456",
  database: "test",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/member/get/:id',(req,res)=>{
  const sqlSelect=` SELECT * FROM member WHERE member_id  = ${req.params.id}  `;
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

// app.delete('/api/delete/class'),(req,res)=>{
//   const classId =req.params.classId;
//   console.log(classId)
//   // const member_id =req.params.member_id;
//   const sqlDelete =`DELETE FROM like_class WHERE member_id=101 AND class_id =1 `
//   console.log(sqlDelete)
//   db.query(sqlDelete,class_id,(err,result)=>{
//     console(result)
//     if(err) console.log(err)
//     res.json({
//       state:"success"
//     })
//   })
// }

app.post("/member/coupon",(req,res)=>{
  const coupon_id = req.body.coupon_id;
  const member_id= req.body.member_id;
  const valid= 1
 const sqlInsert="INSERT INTO coupon_related (coupon_id ,member_id,valid) VALUES (?,?,?) ";
   console.log(sqlInsert)
       db.query(sqlInsert,[coupon_id ,member_id,valid],(err,result)=>{
         if(err) console.log(err)
         console.log(result);
         res.json({state:"success"})
 })
 
 })

 app.post("/member/photo",(req,res)=>{
  const member_id = req.body.member_id;
  const event_id = req.body.event_id;
  const photo_show = 0;
  const photo_name = req.body.photo_name;
  const valid = 1;
  const c_date= new Date()
 const sqlInsert="INSERT INTO photo (member_id ,event_id,photo_show,photo_name,valid,c_date) VALUES (?,?,?,?,?,?) ";
   console.log(sqlInsert)
       db.query(sqlInsert,[member_id ,event_id,photo_show,photo_name,valid,c_date],(err,result)=>{
         if(err) console.log(err)
         console.log(result);
 })
 
 })


app.get('/member/get/coupon/new/:id',(req,res)=>{
  // const sqlSelect=`SELECT * FROM coupon_main WHERE NOT FIND_IN_SET(${req.params.id}, given_member_id) > 0`;
  const sqlSelect=`SELECT * 
  FROM coupon_main 
  WHERE coupon_id NOT IN (
    SELECT coupon_id FROM coupon_related
      WHERE coupon_related.member_id = ${req.params.id}
      AND valid = 1
  ) `;
  db.query(sqlSelect,(err,result)=>{
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
})
})

app.get('/member/get/coupon/:id',(req,res)=>{
  // const sqlSelect=`SELECT * FROM coupon_main WHERE NOT FIND_IN_SET(${req.params.id}, given_member_id) > 0`;
  const sqlSelect=`SELECT * 
  FROM coupon_main 
  WHERE coupon_id IN (
    SELECT coupon_id FROM coupon_related
      WHERE coupon_related.member_id = ${req.params.id}
      AND valid = 1
  ) `;
  db.query(sqlSelect,(err,result)=>{
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
})
})


app.get('/member/get/collection/class/:id',(req,res)=>{
    const sqlSelect=` SELECT * FROM like_class INNER JOIN main_class ON like_class.class_id=main_class.class_id  WHERE member_id  = ${req.params.id}`;
    db.query(sqlSelect,(err,result)=>{
    res.send(result);
})
})
app.get('/member/get/collection/event/:id',(req,res)=>{
  const sqlSelect=` SELECT * FROM like_event INNER JOIN event ON like_event.event_id=event.event_id  WHERE member_id  = ${req.params.id}`;
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})




app.get('/member/get/event_host/:id',(req,res)=>{
  const sqlSelect=` SELECT * FROM event WHERE event_host_id  = ${req.params.id} AND event_start_time >=NOW() `;
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/get/event_host/finish/:id',(req,res)=>{
  const sqlSelect=` SELECT * FROM event WHERE event_host_id  = ${req.params.id} AND event_start_time <=NOW() `;
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/get/history/event/:id',(req,res)=>{
  const sqlSelect=` SELECT s_event.event_id, s_event.id FROM s_event WHERE id = ${req.params.id}   `;


  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/history/event/att',(req,res)=>{
  console.log(req.query.id)
  const sqlSelect=` SELECT * FROM event WHERE event_id IN (${req.query.id}) AND event_start_time < NOW()  `;
  console.log(sqlSelect)
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/history/event/att/mem',(req,res)=>{
  console.log(req.query.id)
  const sqlSelect=` SELECT member_id,member_name,member_img FROM member WHERE member_id IN (${req.query.id}) `;
  console.log(sqlSelect)
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/get/history/class/:id',(req,res)=>{
  const sqlSelect=` SELECT s_class.class_id, s_class.id FROM s_class WHERE id = ${req.params.id} `;
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/history/class/att',(req,res)=>{
  // console.log(req.query.id)
  const sqlSelect=` SELECT * FROM main_class WHERE class_id IN (${req.query.id}) AND class_end_date < CURDATE()  `;
  // console.log(sqlSelect)
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})
app.get('/member/get/order/event/:id',(req,res)=>{
  const sqlSelect=` SELECT  * FROM  s_event WHERE id  = ${req.params.id} AND order_paid=1 `;



  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/order/event/att',(req,res)=>{
  // console.log(req.query.id)
  const sqlSelect=` SELECT event_id,event_name,event_location,event_start_time,event_end_time,event_address,event_photo FROM event WHERE event_id IN (${req.query.id})   `;
  // console.log(sqlSelect)
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/get/order/class/:id',(req,res)=>{
  const sqlSelect=` SELECT  * FROM  s_class WHERE id  = ${req.params.id} AND order_paid=1 `;



  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/order/class/att',(req,res)=>{
  // console.log(req.query.id)
  const sqlSelect=` SELECT class_id,class_name,class_place,class_start_date,class_end_date,class_address,class_main_pic FROM main_class WHERE class_id IN (${req.query.id})   `;
  // console.log(sqlSelect)
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/get/order/event/pay/:id',(req,res)=>{
  const sqlSelect=` SELECT  * FROM  s_event WHERE id  = ${req.params.id} AND order_paid=0 `;


  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/order/event/pay/att',(req,res)=>{
  // console.log(req.query.id)
  const sqlSelect=` SELECT event_id,event_name,event_location,event_start_time,event_end_time,event_address,event_photo FROM event WHERE event_id IN (${req.query.id})   `;
  // console.log(sqlSelect)
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/get/order/class/pay/:id',(req,res)=>{
  const sqlSelect=` SELECT * FROM  s_class WHERE id  = ${req.params.id} AND order_paid=0 `;



  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/order/class/pay/att',(req,res)=>{
  // console.log(req.query.id)
  const sqlSelect=` SELECT class_id,class_name,class_place,class_start_date,class_end_date,class_address,class_main_pic FROM main_class WHERE class_id IN (${req.query.id})   `;
  // console.log(sqlSelect)
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/get/score/:id',(req,res)=>{
  const sqlSelect=` SELECT * FROM score INNER JOIN member ON score.member_id = member.member_id WHERE score.toscore_id  = ${req.params.id}`;
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/get/score/mem/:id',(req,res)=>{

  const sqlSelect=`SELECT * FROM score INNER JOIN member ON score.toscore_id = member.member_id WHERE score.member_id = ${req.params.id}`;
  db.query(sqlSelect,(err,result)=>{
  res.send(result);
})
})

app.get('/member/get/event/photo',(req,res)=>{

    const member_id = req.body.member_id;
    console.log(member_id)
  const sqlSelect=` SELECT * FROM photo INNER JOIN event ON photo.event_id = event.event_id WHERE photo.event_id IN (${req.query.id}) AND  photo.member_id IN (${req.query.member})`;
  console.log(sqlSelect)
  db.query(sqlSelect,(err,result)=>{
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
})
})











app.put("/member/update/img",(req,res)=>{
  const member_id= req.body.member_id;
  const member_img= req.body.member_img;
  const sqlUpdate="UPDATE member SET member_img=?  WHERE member_id=?";
  db.query(sqlUpdate,[member_img,member_id],
      (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
})
})

app.put('/member/update',(req,res)=>{
    const member_id= req.body.member_id;
    const member_name= req.body.member_name;
    const member_phone= req.body.member_phone;
    // const member_birthday= req.body.member_birthday;
    const member_ex= req.body.member_ex;
    const member_about = req.body.member_about;
    const sqlUpdate="UPDATE member SET member_name=?,member_phone=?,member_ex=?, member_about=?  WHERE member_id=?";
    db.query(sqlUpdate,[member_name,member_phone,member_ex,member_about,member_id],
        (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
       
    })
})



app.post("/member/score",(req,res)=>{
 const member_id = req.body.member_id;
 const event_id = req.body.event_id;
 const toscore_id = req.body.toscore_id;
 const rating = req.body.rating;
 const rating_evaluate = req.body.rating_evaluate;
 const c_date= new Date()
const sqlInsert="INSERT INTO score (member_id ,event_id,toscore_id,rating,rating_evaluate,c_date) VALUES (?,?,?,?,?,?) ";
  console.log(sqlInsert)
      db.query(sqlInsert,[member_id ,event_id,toscore_id,rating,rating_evaluate,c_date],(err,result)=>{
        if(err) console.log(err)
        console.log(result);
})

})





app.delete('/api/delete/:member_id',(req,res)=>{
  const member_id =req.params.member_id;
  const sqlDelete="Delete FROM  member WHERE member_id=?";
  db.query(sqlDelete,member_id,(err,result)=>{
      if(err) console.log(err)
  })
})



app.listen(3001,()=>{
    console.log("running on port 3001");

})




