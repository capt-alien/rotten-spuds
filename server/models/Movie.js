let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let movieSchema = new Schema({
    title: {
        type:String,
        trim: true,
        required:[true, "You need to title your new Movie"],
        minlength:[4, "Name needs at least 4 Char."]
    },
    year: {
        type: Number,
        required:[true, "You need to have a Year the movie was made"],
        min:[1900, "Movie must have been made after 1900"]
    },
    summery:{
        type:String,
        trim: true,
        required:[true, "You need a summery of your new Movie"]
        // minlength:[4, "Name needs at least 4 Char."]
    }
}, {timestamp:true});

// Model
mongoose.model('Movie', movieSchema);
