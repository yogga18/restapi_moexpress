// 9. membuat module export dengan parameter mongoose jadi ketika pemanggilan objek ini di haruskan untuk mengisi parameter
module.exports = (mongoose) => {
    // Membuat Scema atau desain tabel
    const schema = mongoose.schema(
        {
            title: String,
            body: String,
            publishde : Boolean,
        },{
            timestamps: true
        }
    )
    // Convert uinik key id menjadi JSon
    schema.method("toJSON", function() {
        // merubah struktur __v, _id dan object lainnya ke dalam object
        const {__v, _id, ... object} = this.toObject()
        // Set unik key _id menjadi id
        object.id = _id
        return object
    })

    // Membuat object ke dalam Post 
    const Post = mongoose.model("posts", schema)
    return Post
}