const mongoose = require('mongoose');

const URL = "mongodb+srv://sdmohapatra7:shakti@shakti.hxlbeos.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL)
.then(()=> console.log('Db Is connected'))
.catch((err)=>console.log('Error connected to Db',err));

module.exports = URL;