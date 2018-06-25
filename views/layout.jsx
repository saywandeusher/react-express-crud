var React = require('react');

class LayoutContainer extends React.Component {
  render() {
  	return ( 
      <html>
  		  <head>
  			 <title>Pokedex</title>
  		  </head>
  		  <body>
  			 {this.props.children}
  		  </body>
  	  </html>
    );

  }
}

module.exports = LayoutContainer;