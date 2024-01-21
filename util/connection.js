const mongoose = require("mongoose");

const connection = async (req, res) => {
  try{

    await mongoose
    .connect(
      "mongodb+srv://udaypalnati26:8EFoX9JBXJLUj26J@cluster0.bopqqvt.mongodb.net/"
      )
      .then(() => {
        console.log("connected");
      });
    }catch(err){
      res.status(400).json({message:err})
    }
  };

connection();
