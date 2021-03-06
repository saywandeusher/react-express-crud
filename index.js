const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override')

const app = express();
//Allows access to files in public folder
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const FILE = 'pokedex.json';

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');



/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app

/**
 * ===================================
 * Routes
 * ===================================
 */
 var getPokemonInfo = (request, response) => {

  // get json from specified file
  jsonfile.readFile(FILE, (err, obj) => {
    // obj is the object from the pokedex json file
    // extract input data from request
    let inputId = request.params.id;

    // find pokemon by id from the pokedex json file
    // (note: find() is a built-in method of JavaScript arrays)
    let pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.id === parseInt(inputId, 10);
    });

    if (pokemon === undefined) {

      // send 404 back
      response.status(404);
      response.send("not found");
    } else {

      response.send(pokemon);
    }
  });
};
//create a html page with Form.
var createFormPage = (request, response) => {

  response.render('createPokemonForm');

};

//create a html page with editing Form.
var editFormPage = (request, response) => {

  jsonfile.readFile(FILE, (err, obj) => {
    let index = request.params.id;
    console.log(index);
    let selectedPokemon = obj.pokemon[index-1];
    response.render('editPokemonForm', selectedPokemon);
  });

};

var createNewPokemon = (request, response) => {
	//reads Json file
	jsonfile.readFile('pokedex.json', (err,obj) => {

		let newPokemon = {
            "id": parseInt(request.body.id),
            "num": request.body.num,
            "name": request.body.name,
            "img": request.body.img,
            "height": request.body.height,
            "weight": request.body.weight,
            "candy": "",
            "candy_count": "",
            "egg": "",
            "avg_spawns": "",
            "spawn_time": ""
        };
        //adds new object into pokemon's array
		obj.pokemon.push(newPokemon);
		//to make sure var pokemon does not get overwritten
		let newObj = obj;

		//overwrites Json file
		jsonfile.writeFile('pokedex.json', newObj, (err) => {

			response.send('created pokemon! Check pokedex.json');

      	});
	});
};

var editedPokemon = (request, response) => {

	jsonfile.readFile('pokedex.json', (err,obj) => {
		let index = request.params.id;
		let editPokemon = {
            "id": parseInt(request.body.id),
            "num": request.body.num,
            "name": request.body.name,
            "img": request.body.img,
            "height": request.body.height,
            "weight": request.body.weight,
            "candy": "",
            "candy_count": "",
            "egg": "",
            "avg_spawns": "",
            "spawn_time": ""
        };

        obj.pokemon[index-1] = editPokemon;

        let newObj = obj;

		jsonfile.writeFile('pokedex.json', newObj, (err) => {

			response.send('Edited pokemon! Check pokedex.json');

      	});        
	});
};

app.get('/:id', getPokemonInfo)
   .get('/pokemon/new', createFormPage)
   .post('/pokemon', createNewPokemon)
   .get('/:id/edit', editFormPage)
   .put('/pokemon/:id', editedPokemon);



/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
