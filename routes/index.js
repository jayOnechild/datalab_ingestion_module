const express= require("express")
const router=express.Router()

router.get("/", (req, res)=>{
    res.send("I am trying out this route mwana")
})

module.exports = router