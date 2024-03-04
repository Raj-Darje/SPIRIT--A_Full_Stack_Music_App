const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        
    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    email: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    LikedSongs:{
        type:String,
        default: ""
    },
    LikedPlaylists:{
        type: String,
        default: ""
    },
    SubscribedArtists: {
        type: String,
        default: ""
    }


});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;