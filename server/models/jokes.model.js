const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [10, "Minimum of 10 characters."]
    },
    punchline: {
        type: String,
        minlength: [3, "Minimum of 3 characters required."]
    }
}, {timestamps: true}
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;