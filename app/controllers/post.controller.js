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
    // Buat kerangka untuk user harus membuat data apa
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

// Menampilkan 1 data berdasarkan id-nya
exports.findOne = (req, res) => {
    // params maksudnya ketika user memasukan id (data yg di cari)
    // server bisa memberikan data yang di maksud berdasarkan prams yg di inputkan user
    const id = req.params.id
    Post.findById(id)
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "failed to display data"
        })
    });
}
// Menampilkan 1 data berdasarkan id-nya END


// PUT
exports.update = (req, res) => {
    const id = req.params.id

    // cari data berdasarkan id lalu berikan data tersebut satu bundel body
    Post.findByIdAndUpdate(id, req.body)
    .then((result) => {
        // Pemeriksaan apakah data yang di minta itu ada ?
        // jika data tidak ada, maka kirimkan respon 404
        if (!result) {
            res.status(404).send({
                message: "Post not Found"
            })
        }

        // jika ada kirim ini
        res.send({
            message: "Post was Updated"
        })
    })
    .catch((err) => {
        res.status(409).send({
            message: err.message || "failed to update data"
        })
    });
}
// PUT END

// DELET
exports.delete = (req, res) => {
    const id = req.params.id

    Post.findByIdAndRemove(id)
    .then((result) => {
        // Cek apakah data yang di cari user ada ?
        // jika tidak ada beri response 404
        if (!result) {
            res.status(404).send({
                message: "Post not Found"
            })
        }

        // jika ada kirim ini
        res.send({
            message: "Data has been deleted successfully"
        })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || "failed to deleted data"
        })
    });
}
//DELET END