import mongoose from 'mongoose'
//configuracion de mongodb
const URL_MONGODB = 'mongodb://localhost:27017/mevn-youtube';
const OPT_MONGODB = { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true };

//mongodb connection
mongoose.connect(URL_MONGODB, OPT_MONGODB)
    .then(() => { console.log('Conectado a DB') },
    (err) => { console.log(err) }
);


module.exports = mongoose