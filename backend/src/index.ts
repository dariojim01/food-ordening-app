import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("Connected to database"));

app.use(express.json());


app.use(cors());

app.get("/test", (req, res) =>{
    res.send("Hello world");
})

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
} );
