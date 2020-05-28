

'use strict';

module.exports = function(knex, DataTypes) {
    const Product = knex.define('product', {
        nome: DataTypes.STRING,
        valor: DataTypes.STRING
      }, {});
      Product.associate = function(models) {
        // associations can be defined here
      };
      return Product;
}