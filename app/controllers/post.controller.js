// 10 Membuat controler dari model post dan membuat request res untuk mendapatkan suatu document
const db = require('../models')
const Post = db.posts

// Membuat Function untuk mendapatkan semua data post di collection (table)
exports.findAll = (req, res) => {
    Post.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some Error while retrieving posts"
        })
    });
}