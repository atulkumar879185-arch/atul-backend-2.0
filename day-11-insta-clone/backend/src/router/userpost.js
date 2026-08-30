const express = require('express');
const router=express.Router()
const postcontroller=require('../controller/postcontroller')
const multer=require('multer')
const storage=multer.memoryStorage()
const upload=multer({storage:storage})





/* poat API
    createpost
   /api/post/
*/
router.post("/",upload.single('image'),postcontroller.createcontroller);


/*
 GET API
 all post
  /api/post
  */
router.get("/",postcontroller.getpostcontroller)


/* GET API
  post detail
  /api/post/:id
  */
router.get("/details/:postid",postcontroller.getpostdetailcontroller)




module.exports=router