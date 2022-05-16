const JokesController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/:id", JokesController.findSingleJoke);
    app.post("/api/jokes/new", JokesController.createNewJoke);
    app.put("/api/jokes/update/:id", JokesController.updateSingleJoke );
    app.delete("/api/jokes/delete/:id", JokesController.deleteSingleJoke);
}