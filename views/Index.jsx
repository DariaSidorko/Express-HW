const React = require('react');

class Index extends React.Component {
  render() {
      const { colors } = this.props;
      return (
              <div>
                  <h1>COLORS</h1>
                  <ul>
                      {colors.map((color, i) => {
                          return (
                              <li>
                                  <a href={`/colors/${i}`}>
                                      {color.color}
                                  </a>
                              </li>
                          );
                      })}
                  </ul>
                  <a href={`/`}> *** Home *** </a>
              </div>
      );
  }
}
module.exports = Index;