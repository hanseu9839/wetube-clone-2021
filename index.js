import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('HOME');
const handleContact = (req, res) => res.send("Contact");
const handleAbout = (req, res) => res.send("About Us");
const handleProtect = (req, res) => res.send("Protect");
const con = (req, res, next) => {
    console.log("I'm a middleware");
    next();
};


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

const pr = (req, res, next) => {
    res.redirect("/")
}
app.get("/", con, handleHome);
app.get("/contact", con, handleContact);
app.get("/About-Us", con, handleAbout);
app.get("/protect", pr);

app.listen(PORT, handleListening);