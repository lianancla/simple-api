import { app } from "./app.js";

import { create_DB_Connection } from "./database.js";
import mysql2 from "mysql2/promise";
import { db_config } from "./config.js";
import { Response } from "./helpers/response.js";
import { env } from "./config.js";

app.listen(env.PORT, (req, res) => {
  console.log(`Server in on . http://${env.HOST}:${env.PORT}`);
});

const res = await create_DB_Connection({
  response: new Response(),
  config: db_config,
  SA_BD: mysql2,
});

export const connection = res.data;

if (res.error == null) console.log("DB is connected");

import { MovieModel } from "./models/movie.model.js";

const resp = await MovieModel.delete({
  id: 73,
});

console.log(resp)