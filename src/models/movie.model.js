import { connection } from "../index.js";
import { Response } from "../helpers/response.js";
import { db_errors } from "../db_errors/movies.js";

let response = new Response();

export class MovieModel {
  static async getAll() {
    try {
      [response.data] = await connection.query(
        "SELECT id,name,link,descripcion FROM movies"
      );
    } catch (error) {
      response.error = db_errors.getAll;
      response.notificateError({ error });
    }
    return response;
  }

  static async getById({ id }) {
    try {
      [response] = await connection.query(
        "SELECT name,link,descripcion FROM movies WHERE id = ?;",
        [id]
      );
    } catch (error) {
      response.error = db_errors.getById;
      response.notificateError({ error });
    }

    return response;
  }
  static async create({ input }) {
    try {
      response.data = await connection.query("INSERT INTO movies SET ?;", [
        input,
      ]);
    } catch (error) {
      response.error = db_errors.create;
      response.notificateError({ error });
      return response;
    }
    try {
      [response.data] = await this.getById({
        id: response.data[0]["insertId"],
      });
    } catch (error) {
      response.error = db_errors.getById;
      response.notificateError({ error });
    }

    return response;
  }

  static async update({ input, id }) {
    try {
      response.data = await connection.query(
        "UPDATE movies SET ? WHERE id = ?;",
        [input, id]
      );
    } catch (error) {
      response.error = db_errors.update;
      response.notificateError({ error });
      return response;
    }
    try {
      [response.data] = await this.getById({ id });
    } catch (error) {
      response.error = db_errors.update;
      response.notificateError({ error });
    }

    return response;
  }

  static async delete({ id }) {
    let user_to_delete = null;
    try {
      [user_to_delete] = await this.getById({ id });
    } catch (error) {
      response.error = db_errors.getById;
      response.notificateError({ error });
      return response;
    }
    try {
      await connection.query("DELETE FROM movies WHERE id = ? ", [id]);
      response.data = user_to_delete;
    } catch (error) {
      response.error = db_errors.delete;
      response.notificateError({ error });
    }

    return response;
  }
}
