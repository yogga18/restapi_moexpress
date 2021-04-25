// 6. membuat model yg akan terhubung dengan collection (tabel) di database
const dbConfig = require('../../config/db.config')

// 7. membuat object untuk mongoose
const mongoose = require('mongoose')

mongoose.Promise = global.Promise // memanggil mongose menggunakan promise dan dimasukkan ke variable Global


// Membuat objeck db dan di biarkan kosong, nanti akan di isi
const db = {}
db.mongoose = mongoose 
db.url = dbConfig.url // ini berisikan url yang database mongodb yg ada di file db.config.js
db.posts = require('./post.model')(mongoose) // Memanggil db post dari file post.model

// 8 Buat module export untuk db agar object bisa dugunakan di file yg lainnya
module.exports = db