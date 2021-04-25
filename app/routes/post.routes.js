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
    
    // Registrasi route ke dalam app.use
    // jadi nantinya end point posts adalaha http://localhost:8000/api/posts/
    app.use('/api/posts', router)
}