var mongoose      = require ( 'mongoose' ),
Schema        = mongoose.Schema,
photoSchema = new Schema (
    {
        Url: String,
        Username: String,
       
    }
);

module.exports = mongoose.model ( 'Photos', photoSchema );