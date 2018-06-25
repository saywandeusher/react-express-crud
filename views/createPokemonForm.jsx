var React = require('react');
var LayoutContainer = require('./layout.jsx');
var Cola = require('./form.jsx');

class pokemonCreation extends React.Component {
  render() {
  // 	console.log( "hello", this.props.all_pokemon)

		// const pokemonListElements = this.props.all_pokemon.map( function(pokemon){
		// 	return (
		// 		<li>
		// 			<p>name: {pokemon.name}</p>
		// 			<p>id: {pokemon.id}</p>
		// 			<p><img src={pokemon.img} /></p>
		// 		</li>
		// 	);
		// });

		// let message = null;

		// if( pokemonListElements.length > 100 ){
		// 	message = <h1>List is longer than 100! Bananas!</h1>;
		// }

    return (
    	<LayoutContainer>
	    	<div>
	    		<Cola>
	    		</Cola>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = pokemonCreation;