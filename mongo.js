const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//var mongodbErrorHandler = require("mongoose-mongodb-errors");

///mongoose.Promise = global.Promise;
//mongoose.plugin(mongodbErrorHandler);
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true});
 