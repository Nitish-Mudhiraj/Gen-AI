const usermodel = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


// Register
async function Register(req, res) {
    try {
        const { username, email, password } = req.body;

        const isUserAlreadyExists = await usermodel.findOne({
            $or: [{ username }, { email }]
        });

        if (isUserAlreadyExists) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hash = crypto
            .createHash("md5")
            .update(password)
            .digest("hex");

        const user = await usermodel.create({
            username,
            email,
            password: hash
        });

        const emailToken = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.Jwt_Token
        );

        await sendEmail({
            to: email,
            subject: "Welcome to PerplexCity",
            html: `
                <p>Hi ${username}</p>
                <p>Please verify your email by clicking the link below:</p>

                <a href="http://localhost:3000/perplex/users/verify-email?token=${emailToken}">
                    Verify Email
                </a>
            `
        });

        return res.status(201).json({
            message: "Registration successful. Please verify your email."
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

// Login
async function Login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await usermodel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const hash = crypto
            .createHash("md5")
            .update(password)
            .digest("hex");

        if (user.password !== hash) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.Jwt_Token
        );

        res.cookie("token", token, {
            httpOnly: true,
            // secure: true, // enable in production (HTTPS)
            // sameSite: "none" // if frontend/backend are on different domains
        });

        return res.status(200).json({
            message: "Login successful",
            user
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
// Get Logged-in User
async function getme(req, res) {

   const user = req.user.id

   const userexists = await usermodel.findById(user)

   if(!userexists){
    return res.status(401).json({
        message:"unauthorized user"
    })
   }

   res.status(200).json({
    message:"user fecthed sucessfully fecthd",
    user: userexists
   })
}

module.exports = {
    Register,
    Login,
  
    getme
};