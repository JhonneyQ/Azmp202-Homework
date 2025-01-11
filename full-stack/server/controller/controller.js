const Model = require("../model/model")



const getAlldata = async (req, res) => {
    try {
        const products = await Model.find()
        res.status(200).json({data:products, message:"succesful"})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
  }



  const deleteData = async (req, res) => {
    try {
        const {id} = req.params
        const DeletedProducts = await Model.findByIdAndDelete(id)
        res.status(200).json({deletedData:DeletedProducts, message:"succesful"})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
  }

  const postData = async (req, res) => {
    try {
        const newProduct = Model({...res.body})
        await newProduct.save()
        res.status(200).json({newData:newProduct, message:"succesful"})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
  }

  const editData = async (req, res) => {
    const {id} = req.params
    try {
        const editProduct = Model.findByIdAndUpdate(id,{...res.body},{
            new:true
        })
        
        res.status(200).json({editData:editProduct, message:"succesful"})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
  }

  

module.exports = {
    getAlldata,
    deleteData,
    postData,
    editData
}