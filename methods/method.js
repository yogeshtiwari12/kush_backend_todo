import mongoose from "mongoose";
import User from '../models/model.js'

export const savetodoitems = async(req, res) => {
    const {serialno,title,description,startDate,endDate} = req.body;
    try {
        const user  = await User.findOne({serialno});

        if(user){
            return res.status(400).json({message: "Task already exists"});
        }
 
       const newtodo  = new User({
        serialno,
        title,
        description,
        startDate,
        endDate,
       })
       await newtodo.save();

       res.status(201).json({message: "Task created successfully"});

    } catch (error) {
        res.status(500).json({message: "Server error",error: error.message});
        console.log(error.message);
    }
}
export const fetchalltodo = async(req, res) => {
    try {
        const alltodo = await User.find();
        res.json(alltodo);
    } catch (error) {
        res.status(500).json({message: "Task not found"})
    }


    
}
export const deletetodo = async(req, res) => {
    try {
       const todo = await User.findById(req.params.id);
        if(!todo){
            return res.status(404).json({message: "Todo not found"});
        }
       await todo.deleteOne();
       res.status(200).json({message: "Task deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Task not found"})
    }
}