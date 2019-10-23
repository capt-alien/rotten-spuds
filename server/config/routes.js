let movies = require('./../controllers/movies');


module.exports = function(app){
    // get one
    app.get('/movies/', movies.index)
    // post
    app.post('/movies/', movies.create)
    // get one
    app.get('/movies/:id', movies.show)
    // update
    app.put('/movies/:id', movies.update)
    // delete
    app.delete('/movies/:id', movies.destroy)
}
