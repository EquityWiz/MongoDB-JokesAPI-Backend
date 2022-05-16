const Joke = require("../models/jokes.model");

// Find All 
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err));
};
// Find Single Joke
module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(singleJoke => res.json({data: singleJoke}))
        .catch(err => res.json({message: "ErRoR", error: err}));
};
// Create a new Joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({data: newJoke}))
        .catch(err => res.json({message: "ErRoR", error: err}));
};
// Update one Joke
module.exports.updateSingleJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then(updatedJoke => res.json({data: updatedJoke}) )
        .catch(err => res.json({message: "ErRoR", error: err}));
}
// Delete one Joke 
module.exports.deleteSingleJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({data: result}))
        .catch(err => res.json({message: "ErRoR", error: err}));
}
