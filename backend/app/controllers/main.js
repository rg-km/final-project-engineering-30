module.exports = {
    index(req, res) {
        res.json({
            status: true,
            message: "Berhasil terkoneksi ke API"
        })
    },

    onLost(req, res, next) {
        res.status(404).json({
            status: false,
            message: "url not found",
            url: req.url,
        });
    },

    onError(err, req, res, next) {
        console.log(err)

        let name = err.name
        let message = err.message

        res.status(500).json({
            name: name,
            message: message,
        });
    },
}