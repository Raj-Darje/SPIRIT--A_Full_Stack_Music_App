const express = require("express");
const passport = require("passport");
const { route } = require("./auth");
const User = require("../models/User");
const Song = require("../models/Song");

const Playlist = require("../models/Playlist")

const router = express.Router();



// Route 1: Create a playlist


router.post("/create", 
    passport.authenticate("jwt", {session: false}),
    
    async (req,res)=>{
        const currentUser = req.user;
        const {name, thumbnail, songs} = req.body;
        if(!name || !thumbnail || !songs){
            return res.status(301).json({err: "Insufficient Data"});
        }
        const playlistData= {
            name,
            thumbnail,
            songs,
            owner: currentUser._id,
            collaborators:[]
        }
        const playlist = await Playlist.create(playlistData);
        return res.status(200).json(playlist);
    }

);







// Route 2: Get a playlist by Id



router.get("/get/playlist/:playlistId", 
    passport.authenticate("jwt", {session: false} ),
    async (req,res)=>{
        const playlistId = req.params.playlistId;
        const playlist = await Playlist.findOne({_id: playlistId});

        if(!playlist){
            return res.status(301).json({err: "Invalid ID"});
        }

        return res.status(200).json(playlist);
    }
);







// Get all playlists made by an artist



router.get("/get/artist/:artistId",
    passport.authenticate("jwt", {session: false}),
    async (req,res)=>{
        const artistId = req.params.artistId;
        
        const artist = await User.findOne({_id: artistId})

        if(!artist){
            return res.status(304).json({err: "Invalid artist ID"})
        }

        const playlists = await Playlist.find({owner: artistId});
        return res.status(200).json({data: playlists});
    }
    )












// Add a song to a playlist



router.post("/add/song", passport.authenticate("jwt",{session: false}),

    async (req, res)=>{
        const currentUser = req.user;
        const {playlistId, songId}= req.body;



// step 0 : Get the playlist if valid

        const playlist = await Playlist.findOne({_id: playlistId});

        if(!playlist){
            return res.status(304).json({err: "Playlist does not exist"})
        }

        // step 1: Check if currentUser owns the playlist or is a collaborator

        if(!(playlist.owner.equals(currentUser._id))   && playlist.collaborators.includes(currentUser._id)){
            return res.status(400).json({err: "Not allowed"});
        }

        // step 2: check if the song is valid song

        const song = await Song.findOne({_id: songId});

        if(!song){
            return res.status(304).json({err: "Song does not exist"})
        }




        // Step 3: We can now simply add the song to the playlist 

        playlist.songs.push(songId);
        await playlist.save();


        return res.status(200).json(playlist);




    })





module.exports = router;