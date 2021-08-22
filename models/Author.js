const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AuthorSchema = Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    gender: {
        type: String
    }
})

module.exports = mongoose.model("authors", AuthorSchema)