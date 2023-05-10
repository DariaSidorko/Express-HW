const React = require('react')
class Data extends React.Component {
  render () {
    const data = this.props.color;
    const i = this.props.index;
     return (
       <div>
       <h1> Colors Page </h1>
         The {data.color} is {data.type} type color <br></br> 
         Category is {data.category} <br></br>
         <a href={`/colors/code/${i}`}> Color Code</a> <br></br>
         <br></br>
         <a href={`/colors`}> *** Go Back *** </a> <br></br>
         <a href={`/`}> *** Home *** </a>
       </div>
       );
      }
 }
 module.exports  = Data;