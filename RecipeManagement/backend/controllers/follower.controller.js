const Follower = require("../models/follower.model");

exports.followUser = async (req, res)=>{
  try {
    const {id} = req.params;

    await Follower.create({followeeId : id})

    res.json({
      message:"follower added successfully",
      follow: true
    })
    
  } catch (error) {
    console.log(error);
  }
}