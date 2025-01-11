const express = require("express")

const {
    getAlldata,
    deleteData,
    postData,
    editData
} = require("../controller/controller")

const router = express.Router()


router.get("/", getAlldata)
router.delete("/:id", deleteData)
router.post("/",postData)
router.put(":id",editData)

module.exports = router