
/*
import { validateMovie, validatePartialMovie } from "../validations/movieV.js";
export class MovieController {
  constructor({ movieModel }) {
    this.movieModel = movieModel;
  }

  getAll = async (req, res) => {
    const response = await this.movieModel.getAll();
    res.json(response);
  };
  getById = async (req, res) => {
    const { id } = req.params;
    const response = await this.movieModel.getById({ id });
    res.json(response);
  };
  create = async (req, res) => {
    const validated = validateMovie(req.body);
    if (validated.error) {
      res.status(404).json({ message: validated.error });
    }
    const response = await this.movieModel.create({ input: validated.data });
    res.json(response);
  };
  update = async (req, res) => {
    const { id } = req.params;

    const validated = validatePartialMovie(req.body);
    if (validated.error) {
      res.status(404).json({ message: validated.error });
    }

    const response = await this.movieModel.update({ input: validated.data, id });
    res.json(response);
  };
  delete = async (req, res) => {
    const { id } = req.params;
    const response = await this.movieModel.delete({ id });
    res.json(response);
  };
}
*/