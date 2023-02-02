exports.getUser = (req, res, next) => {
    res.send({
        Nama : 'Bayu',
        Alamat : 'Gunungkidul',
        Pekerjaan : 'Presiden',
        Umur: 7
    })
}