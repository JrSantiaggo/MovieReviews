const AppError = require("../utils/AppError")

class UsersController {
  create(request, response){
    const { name, email, password, avatar} = request.body;

    if(!name){
      throw new AppError("o nome é obrigatório")
    }

    response.json({name, email, password, avatar})
  }
}

module.exports = UsersController;