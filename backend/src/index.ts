import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=> console.log("Connected to database"));

app.use(express.json());


app.use(cors());

app.use("/api/my/user", MyUserRoute);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
} );
