const Recipe = require("../models/recipe.model");


exports.addRecipe = async (req, res)=>{
  try {
    const {name, preparetionTime, cookingTime, ingredients,difficulty, category, img, method} = req.body;

    await Recipe.create({name, preparetionTime, cookingTime, ingredients, category, rating: 0, totalRate: 0, img,difficulty, method, UserId: req.user.id});

    res.json({
      message:"recipe created successfully",
      created:true
    })
    
  } catch (error) {
    console.log(error);
  }
}

exports.getRecipes = async (req, res)=>{
  try {
    const recipes= await Recipe.findAll({});

    res.json({
      recipes
    })
  } catch (error) {
    console.log(error);
  }
}

exports.getMyRecipes = async (req, res)=>{
  try {
    const recipes = await Recipe.findAll({where : {UserId : req.user.id}});

    res.json({
      recipes
    })
  } catch (error) {
    console.log(error);
  }
}

exports.removeRecipe = async (req, res)=>{
  try {
    const {id} = req.params;

    await Recipe.destroy({where : {id : id}});

    res.json({
      message:"recipe deleted successfully",
      deleted:true
    })
    
  } catch (error) {
    console.log(error);
  }
}

exports.updateRecipe = async (req, res)=>{
  try {
    const {id, name, preprationTime, cookingTime, ingredients, category,rating, img, method} = req.body;
  

    await Recipe.update({name, preprationTime, cookingTime, ingredients, category, rating, img, method} , {where : {id: id}});


    res.json({
      message:"recipe updated successfully",
      updated:true
    })
    
  } catch (error) {
    console.log(error);
  }
}

exports.addFilter = async (req, res)=>{
  try {
    const {category, preprationTime, difficulty} = req.query;

    if(category){
      const recipe = await Recipe.findAll({where :{category}});
      return res.json({
        recipe
      })
    }
    else if(difficulty){
      const recipe = await Recipe.findAll({where : {difficulty}});
      return res.json({
        recipe
      })
    }
    else{
      if(preprationTime == "LH"){
        const recipe = await Recipe.findAll({
          order:[
            "preprationTime", "ASC"
          ]
        })
        return res.json({
          recipe
        })
      }
      else{
        const recipe = await Recipe.findAll({
          order:[
            "preprationTime", "ASC"
          ]
        })
        return res.json({
          recipe
        })
      }
    }
  } catch (error) {
    console.log(error);
  }
}