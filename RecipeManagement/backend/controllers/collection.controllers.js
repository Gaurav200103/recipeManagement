const Collection = require("../models/collection.model");

exports.createCollection= async (req, res)=>{
  try {
    const {name, id} = req.body;

    await Collection.create({name, recipeId: id});

    res.json({
      message:"collection created successfully",
      created:true
    })
  } catch (error) {
    console.log(error);
  }
}

exports.removeFromCollection = async (req, res)=>{
  try {
    const {id} = req.params;

    await Collection.destroy({where :{recipeId:id}});

    res.json({
      message:"recipe deleted from collection",
      deleted:true
    })
    
  } catch (error) {
    console.log(error);
  }
}

exports.removeCollection = async (req, res)=>{
  try {
    const {name} = req.params;

    await Collection.destroy({where :{name}});

    res.json({
      message:"collection deleted from collection",
      deleted:true
    })
    
  } catch (error) {
    console.log(error);
  }
}

exports.addToFavorite = async (req, res)=>{
  try {
    const {id} = req.params;

    await Collection.create({name:"favorite", recipeId: id});

    res.json({
      message:"Recipe added into favorite list",
      added:true
    })
  } catch (error) {
    console.log(error);
  }
}