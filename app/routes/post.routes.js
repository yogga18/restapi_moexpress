// 11. Membuat End Point untuk bisa mengambil data posts
module.exports = (app) => {
    // panggil controler post di simpan di posts 
    const posts = require('../controllers/post.controller')
    // panggil express dengan metode Router dan si simpan di router 
    const router = require('express').Router()


    // buat api end point dengan methode get
    // ('/') ini adalah route domain
    // dan di arahakan ke posts dengan methode findAll 
    router.get('/', posts.findAll)

    // 14. Daftarkan methode create di route
    router.post('/', posts.create)

    //15 Daftarkan methode untuk menampilkan dat by id
    router.get('/:id', posts.findOne)

    // 16 Daftarkan methode untuk update
    router.put('/:id', posts.update)

    // 17 Daftarkan methode untuk delete
    router.delete('/:id', posts.delete)

    // Registrasi route ke dalam app.use
    // jadi nantinya end point posts adalaha http://localhost:8000/api/posts/
    app.use('/api/posts', router)
}