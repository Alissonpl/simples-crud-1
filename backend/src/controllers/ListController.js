const connection = require("../database/connection");


module.exports = {

    async index(request, response) {
        const product = await connection("product").select(
          "*"
       );
    
        return response.json(product);
      }
    

}

