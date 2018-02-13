import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type="file" name="image" accept="image/*" onChange={this.props.imageEditor}/>
      </form>
    )
  }
}

export default Text;