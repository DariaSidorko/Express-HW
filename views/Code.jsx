const React = require('react')
class Code extends React.Component {
  render () {
    const color = this.props.color
     return (
       <div>
       <h1> {color.color} color </h1>
         The HEX number: {color.code.hex} <br></br> <br></br> 
         The RGBA number: {color.code.rgba[0]}, {color.code.rgba[1]}, {color.code.rgba[2]}, {color.code.rgba[3]} <br></br> <br></br> 
         
         <a href={`/`}> *** Home *** </a>
       </div>
       );
      }
 }
 module.exports  = Code;