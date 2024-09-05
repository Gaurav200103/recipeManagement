const Recipe = require("../models/recipe.model");
const Review = require("../models/review.model");

exports.createReview = async (req, res)=>{
  try {
    const {name,email,message} = req.body;
    const {id} = req.params;

    await Review.create({name, email, message, id});

    res.json({
      message:"review send successfully",
      created:true
    })
  } catch (error) {
    console.log(error);
  }
}

exports.rateRecipe = async (req, res)=>{
  try {
    const {rate, id} = req.body;

    const recipe = await Recipe.findOne({where :{id : id}});
    const avg = (recipe.rating + rate) / (recipe.totalRate + 1);
    await Recipe.update({rating: (recipe.rating + rate), totalRate: (recipe.totalRate + 1)});

    res.json({
      message:"rate added successfully",
      created:true
    })
    
  } catch (error) {
    console.log(error);
  }
}