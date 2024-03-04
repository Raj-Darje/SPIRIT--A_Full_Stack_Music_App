const express =require("express");
const app = express();

const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;

const passport = require("passport");

const User = require("./models/User");

const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");

require("dotenv").config();
const cors = require("cors");

const port = 8080;


app.use(cors());
app.use(express.json());



// mongoose setup


mongoose.connect("mongodb+srv://rajdarje2001:"+ process.env.MONGO_PASSWORD+"@rajcluster.9d9d0nj.mongodb.net/?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}
)
.then((x)=>{
    console.log("Connected to Mongo!")
}).catch((err)=>{
    console.log("Error while connecting to Mongo");
})









// setup passport-jwt



// setup passport-jwt
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({_id: jwt_payload.identifier}, function (err, user) {
            // done(error, doesTheUserExist)
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    })
);








app.get("/",(req, res)=>{
    res.send("Hello Raj")
});




app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);


app.listen(port, ()=>{
    console.log(`app is listening on port number ${port}`)
})