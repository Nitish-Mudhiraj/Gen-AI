const jwt = require("jsonwebtoken");

function authmiddileware(req, res, next) {

   

    const token = req.cookies.token;

    console.log("Token:", token);

    if (!token) {
        return res.status(401).json({
            message: "Invalid user"
        });
    }

    try {

        const decode = jwt.verify(token, process.env.Jwt_Token);

        console.log(decode)
        req.user = decode;

        next();

    } catch (err) {



        return res.status(401).json({
            message: "Invalid user"
        });

    }
}

module.exports = authmiddileware;