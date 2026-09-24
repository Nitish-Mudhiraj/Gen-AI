const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "This field is important"],
        unique: true
    },

    email: {
        type: String,
        required: [true, "This field is important"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "This field is important"]
    },

    verified: {
        type: Boolean,
        default: false
    }
});

const usermodel = mongoose.model("User", userSchema);

module.exports = usermodel