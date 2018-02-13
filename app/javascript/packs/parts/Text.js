import React, { Component } from 'react';
import ReactQuill from 'react-quill'; 

class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactQuill value={this.props.value}
                  onChange={(text) => this.props.textEditor(text, this.props.rowIndex, this.props.columnIndex)} />
    )
  }
}

export default Text;