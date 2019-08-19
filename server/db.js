const mongoose = require('mongoose');
mongoose.propmise = global.propmise
const {log:print} = console

mongoose.connect('mongodb://amar00:amar00@ds263917.mlab.com:63917/restaurent-app',{useNewUrlParser: true })
.then(()=>print('database is connected'))
.catch((err)=>print('database is not connected'))
module.exports = mongoose