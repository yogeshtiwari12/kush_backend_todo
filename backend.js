import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import allroutes from "./routes/routes.js";

const app = express();

mongoose.connect('mongodb://localhost:27017/kush_todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("connected to mongodb database", mongoose.connection.db.databaseName);
})
.catch(err => {
    console.log("error connecting to mongodb database", err.message);
});


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3001', // Update this to match your frontend URL
    credentials: true
}));
// app.use(cors());

app.use("/kushtodo", allroutes);

app.listen(3000, () => { 
    console.log('Server is running at port 6000');
});
