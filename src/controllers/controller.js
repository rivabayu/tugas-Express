exports.helloWorld = (req, res, next) => {
    res.send('<h1>Halo KAKAKKKK!</h1>');
};

exports.coba = (req, res , next) => {
    res.send({
        nama: 'Riva',
        Alamat: 'Jogja' 
    })
}