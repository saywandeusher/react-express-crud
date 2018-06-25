var React = require('react');
var LayoutContainer = require('./layout.jsx');

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
	    		<form method="POST" action="/pokemon">
    			<input type="text" name="id" placeholder="id"/>
    			<input type="text" name="num" placeholder="num"/>
    			<input type="text" name="name" placeholder="name"/>
    			<input type="text" name="img" placeholder="img"/>
    			<input type="text" name="height" placeholder="height"/>
    			<input type="text" name="weight" placeholder="weight"/>
    			<input type="submit" value="Create"/>
    			</form>
	    	</div>
    	</LayoutContainer>
    );

  }
}

module.exports = pokemonCreation;