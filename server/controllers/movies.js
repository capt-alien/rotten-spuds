let Movie = require('mongoose').model('Movie');
let errorHandler = require('./helpers/error-Handler');


module.exports = {
    index(req, res){
        Movie.find(req.body)
        .then(movies=>res.json(movies)) //spits out json
        .catch(errorHandler.bind(res));
    },
    // CREATE
    create(req,res){
        Movie.create(req.body)
        .then(movie => res.json(movie))
        .catch(errorHandler.bind(res));
    },
    // SHOW
    show(req,res){
        Movie.findById(req.params.id)
        .then(movie => res.json(movie))
        .catch(errorHandler.bind(res));
    },
    // update
    update(req, res) {
        Movie.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, new: true})
        .then(movie => res.json(movie))
        .catch(errorHandler.bind(res));
    },
    // DESTROY
    destroy(req,res){
        Movie.findOneAndDelete({_id:req.params.id})
        .then(result => res.json(result))
        .catch(errorHandler.bind(res));
    }
};
