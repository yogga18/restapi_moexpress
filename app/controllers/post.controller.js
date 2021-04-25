// 10 Membuat controler dari model post dan membuat request res untuk mendapatkan suatu document
const db = require('../models')
const Post = db.posts

// Posts
// Membuat Function untuk mendapatkan semua data post di collection (table)
exports.findAll = (req, res) => {
    Post.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "An error occurred while fetching the data post"
        })
    });
}
// Posts End


// 13. Create
exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published : req.body.published ? req.body.published : false,
    })


    // buat Query untuk nantinya bisa membuat data
    post.save(post)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "Failed to create new data"
        })
    });
}
// Create End