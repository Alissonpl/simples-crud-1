const connection = require("../database/connection");

const { Product } = require('../models/Product');

module.exports = {


  async index(request, response) {
    const product = await connection("product").select(
      "*"
   );

    return response.json(product);
  },

  async create(request, response) {
    const {
      nome,
      descricao,
      modelo,
      marca,
      tamanho,
      valor,
      quantidade
    } = request.body;

    const [id] = await connection("product").insert({
      nome,
      descricao,
      modelo,
      marca,
      tamanho,
      valor,
      quantidade
    });

    return response.json({ id });
  },

  

  async delete(request, response) {
    const { id } = request.params;

    await connection("product")
      .where("id", id)
      .delete();
    return response.status(204).send();
  },

  async update(request, response) {
    const { id } = request.params;

    const {
      nome,
      descricao,
      modelo,
      marca,
      tamanho,
      valor,
      quantidade
    } = request.body;

    await connection("product")
      .where("id", id)
      .update({
        nome,
        descricao,
        modelo,
        marca,
        tamanho,
        valor,
        quantidade
      });

    return response.json({
      nome,
      descricao,
      modelo,
      marca,
      tamanho,
      valor,
      quantidade
    });
  }
};
