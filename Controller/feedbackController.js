const express =require("express");
const Feedback = require("../model/feedbackmodel.js");
// const { Feedback } = require("../model/feedbackmodel.js");

const router = express.Router();



router.post("/",async(req,res)=>{
    const payload = req.body;

    try {
    
        const newFeedback  = new Feedback(payload);
        await newFeedback.save();
        res.status(200).json({msg:"Successful Feedback created",feedback:payload})

    } catch (error) {
        res.status(400).send(error.message)
    }
})


router.get("/",async(req,res)=>{
    try {

        const feedback = await Feedback.find().lean().exec();
        res.status(200).send(feedback)
        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedFeedback = await Feedback.findByIdAndDelete(id);
  
      if (!deletedFeedback) {
        return res.status(404).json({ msg: "Feedback not found" });
      }
  
      res.status(200).json({ msg: "Feedback deleted successfully", feedback: deletedFeedback });
    } catch (error) {
      res.status(400).send(error.message);
    }
  });



module.exports={
    router
}