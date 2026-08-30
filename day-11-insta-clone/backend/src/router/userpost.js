const express = require('express');
const router=express.Router()
const postcontroller=require('../controller/postcontroller')
const identifyuser=require('../middleware/identifyuser')
const multer=require('multer')
const storage=multer.memoryStorage()
const upload=multer({storage:storage})





/* poat API
    createpost
   /api/post/
*/
router.post("/",upload.single('image'),identifyuser,postcontroller.createcontroller);


/*
 GET API
 all post
  /api/post
  */
router.get("/",identifyuser,postcontroller.getpostcontroller)


/* GET API
  post detail
  /api/post/:id
  */
router.get("/details/:postid",identifyuser,postcontroller.getpostdetailcontroller)




module.exports=router