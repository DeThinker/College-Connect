const express=require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session);
const {flash} = require("express-flash-message")
const csrf = require("csurf");

const authRoutes=require('./Routes/auth');
const postsRoutes=require("./Routes/posts");
const createRoutes=require('./Routes/create');
const searchRoutes=require('./Routes/search');
const profileRoutes=require('./Routes/profile');
const req = require("express/lib/request");
const MONGODB_URI="mongodb://localhost:27017/collegeApp";
const store = new MongoDBStore({uri: MONGODB_URI, collection: 'sessions'})

let csrfProtection=csrf();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.use(session({secret:"my secret",resave:false,saveUninitialized:false,store: store}));
app.use(flash({sessionKeyName: 'flashMessage'}));
app.use(csrfProtection);

app.use((req,res,next)=>{
    res.locals.isLoggdnIn=req.session.isLoggedIn;
    if(req.session.user)
        res.locals.username=req.session.user.username;
    else 
       res.locals.username= null

    req.locals.csrfToken=req.csrfToken();
    next();
})

app.use(authRoutes);
app.use(postsRoutes);
app.use(createRoutes);
app.use(searchRoutes);
app.use(profileRoutes);
app.get("/",(req,res)=>{
    res.render('home.ejs');
})

app.listen(3000,()=>{
    console.log("Listening to 3000");
});
mongoose.connect(MONGODB_URI,()=>{
    console.log("connected to db");
});

let obj = {
    name: "Mukul",
    roll: 11
}
