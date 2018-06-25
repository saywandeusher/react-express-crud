var React = require('react');

class Cola extends React.Component {
  render() {
  	return ( 
    <form method="POST" action="/pokemon">
    <input type="text" name="id" placeholder="id"/>
    <input type="text" name="num" placeholder="num"/>
    <input type="text" name="name" placeholder="name"/>
    <input type="text" name="img" placeholder="img"/>
    <input type="text" name="height" placeholder="height"/>
    <input type="text" name="weight" placeholder="weight"/>
    <input type="submit" value="Create"/>
    </form>
    );

  }
}

module.exports = Cola;