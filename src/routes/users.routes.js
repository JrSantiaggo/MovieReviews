const {Router} = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();

function myMiddleware(request, response, next){
  const { isAdmin } = request.body;
  if(!isAdmin){
    return response.json({message: "user unauthorized"});
  }
  next();
}


const usersController = new UsersController();

usersRoutes.post("/create", myMiddleware, usersController.create)

module.exports = usersRoutes;