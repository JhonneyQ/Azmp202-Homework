const express = require("express")

const {
    getAlldata,
    deleteData,
    postData,
    editData,
    getAlldataById
} = require("../controller/controller")

const router = express.Router()


router.get("/", getAlldata)
router.get("/:id", getAlldataById)
router.delete("/:id", deleteData)
router.post("/",postData)
router.put(":id",editData)

module.exports = router