// 1 Memanggil library express, cors menggunakan require
const express = require('express')
const cors = require('cors')

// 2 Membuat object menggunakan library Express
const app = express()

// 3 di sini kita akan selalu berkomunikasi menggunakan Json, jadi harus kita parsing setiap data request
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // membuat opsi ketika request tidak berbentuk JSon

// 9 menyambungkan (CONFIG) file express dengan file app.js dan akan di teruskan (connect ke database)
const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // ijinkan untuk mencari data dan mengubah data tersebut
        useFindAndModify: true,
    })
    .then((res) => {
        console.log('Database Connected...!!!!',res)
    }).catch((err) => {
        console.log('Cannot Connect to the Database',err)
        // jika error hentikan prosessnya
        process.exit()
    });



// 5 definisikan End Point-nya
app.get('/', (req, res) => {
    res.json({
        message: "Success Conected"
    })
})

// 12. memanggil route agar nanti bisa di gunakan
require('./app/routes/post.routes')(app)

// 4 jalankan express dengan menetukan jalur PORT-nya
const  PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT http://localhost:${PORT}`)
})