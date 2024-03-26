import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import plansRoute from './routes/plansRoute.js';
import chatgptRoute from './routes/chatgptRoute.js';

const app = express();
app.use(cors());
app.use(express.json());

// Connecting to the database
dotenv.config();
const mongodb_URI = process.env.MONGODB_URL
const port = process.env.PORT

mongoose
  .connect(mongodb_URI)
  .then(() => {
    console.log('App connected to database');
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("mongoose error")
    console.log(error);
  });

// tested
app.get("/", (req, res) => {
    console.log("main page");
    return res.status(234).send("hello this is the trip planner app")
});

app.use('/plans', plansRoute);
app.use('/', chatgptRoute);


