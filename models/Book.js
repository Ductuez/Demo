const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookSchema = Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    genre: {
        type: String
    },
    special: {
        type: Boolean
    }
})

module.exports = mongoose.model("books", BookSchema)