import e from "express";
import cors from "cors";
import { config } from "dotenv";
import { movieRouter } from "./routes/movie.router.js";
config();

export const app = e();

app.use(e.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hola mundo").statusCode(200);
  res.end();
});
app.use("/movies", movieRouter);
