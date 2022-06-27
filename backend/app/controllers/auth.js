const jwt = require('jsonwebtoken')

function createToken(payload) {
    return jwt.sign(payload, process.env.JWT_SIGNATURE_KEY || "secret")
}

module.exports = {
    async login(req, res) {
        const { email, password } = req.body

        if (email === "" || password === "") {
            res.statusCode = 400
            res.json({
                status: false,
                message: "email dan password tidak boleh kosong"
            })

            return
        }

        if (email !== "some@email.com") {
            res.statusCode = 400
            res.json({
                status: false,
                message: "email tidak ditemukan"
            })

            return
        }

        if (password !== "password123") {
            res.statusCode = 400
            res.json({
                status: false,
                message: "password salah"
            })

            return
        }

        const token = createToken({
            email
        })

        res.json({
            status: true,
            message: "Berhasil login",
            token
        })
    },

    async authorize(req, res, next) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];
            const tokenPayload = jwt.verify(
                token,
                process.env.JWT_SIGNATURE_KEY || "secret"
            );
            next();
        } catch (err) {
            console.error(err);
            res.status(401).json({
                message: "Unauthorized",
            });
        }
    }
}