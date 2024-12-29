import { config as configDotenv } from "dotenv";
import playlistRoutes from "./Routes/playlistRoute.js";
import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
const app = express();
import cookieParser from "cookie-parser";

// middleware
configDotenv();
app.use(json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(
  "/api/playlist",
  (req, res, next) => {
    console.log(req.headers);
    next();
  },
  playlistRoutes
);

// connect to db
connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
