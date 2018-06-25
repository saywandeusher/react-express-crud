var React = require('react');
var LayoutContainer = require('./layout.jsx');

class editingPokemon extends React.Component {
  render() {
  //  console.log( "hello", this.props.all_pokemon)

    // const pokemonListElements = this.props.all_pokemon.map( function(pokemon){
    //  return (
    //    <li>
    //      <p>name: {pokemon.name}</p>
    //      <p>id: {pokemon.id}</p>
    //      <p><img src={pokemon.img} /></p>
    //    </li>
    //  );
    // });

    // let message = null;

    // if( pokemonListElements.length > 100 ){
    //  message = <h1>List is longer than 100! Bananas!</h1>;
    // }
    console.log(this.props.id);

    return (
      <LayoutContainer>
        <div>
          <form method="POST" action="/pokemon/'+{this.props.id}+'?_method=PUT">
          <input type="text" name="id" placeholder="id" value={this.props.id}/>
          <input type="text" name="num" placeholder="num" value={this.props.num}/>
          <input type="text" name="name" placeholder="name" value={this.props.name}/>
          <input type="text" name="img" placeholder="img" value={this.props.img}/>
          <input type="text" name="height" placeholder="height" value={this.props.height}/>
          <input type="text" name="weight" placeholder="weight" value={this.props.weight}/>
          <input type="submit" value="Edit"/>
          </form>
        </div>
      </LayoutContainer>
    );

  }
}

module.exports = editingPokemon;