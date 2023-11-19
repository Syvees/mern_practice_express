const express = require ('express'); // IMPORT EXPRESS
const app = express(); // CREATE AN INSTANCE OF EXPRESS
const port = 8000; // SET THE PORT TO 8000

app.use( express.json() ); // MIDDLEWARE
app.use( express.urlencoded({extended:true}));

const movies = [
    { id: 1, title: "Star Wars", year: 1977 }, 
    { id: 2, title: "The Matrix", year: 1999 }, 
    { id: 3, title: "The Lord of the Rings", year: 2001 }, 
];

// ROUTES
app.get ("/api", (req, res) => { // TEST MESSAGE
    res.json({message: "Hello World Yay!"});
});

app.get ("/api/movies", (ref, res) => { // READ - GET ALL MOVIES
    res.json({results: movies});
});

app.post ("/api/movies", (req, res) => {
    console.log(req.body);
    movies.push(req.body);
    res.json({message: "Created a movie"});
}); 

app.get ("/api/movies/:id", (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    //const id = req.params.id;
    //const movie = movies.find(movie => movie.id == id);
    res.json({ message : "movie"})
});

app.listen(port, () => console.log(`Listening on port: ${port}`)); // TO LISTEN TO PORT 8000


