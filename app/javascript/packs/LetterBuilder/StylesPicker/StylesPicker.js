import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRowAndColumnKeys } from '../store/actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import StylesPickerActions from './StylesPickerActions';
import StylesPickerOptions from './StylesPickerOptions';


function mapStateToProps(state) {
  return {
    pickedStyle: state.Reducers.pickedStyle,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setRowAndColumnKeys: (rowKey, columnKey) => dispatch(setRowAndColumnKeys(rowKey, columnKey))
  }
}

class StylesPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stylePickerDialogOpen: false,
      pickedStyle: '',
      rowKey: '',
      columnKey: '',
    }

    this.handleDialog = this.handleDialog.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      pickedStyle: props.pickedStyle,
      rowKey: props.rowKey,
      columnKey: props.columnKey,
    })
  }

  handleDialog() {
    const { setRowAndColumnKeys } = this.props;
    setRowAndColumnKeys(this.state.rowKey, this.state.columnKey);
    this.setState({stylePickerDialogOpen: !this.state.stylePickerDialogOpen})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton
            key="stylesPicker"
            className="stylesPickerButton"
            onClick={() => this.handleDialog() }
          >
            <i className="mi md-dark material-icons">settings</i>
          </RaisedButton>
          <Dialog
            title="Change the default style"
            modal={false}
            actions={
              <StylesPickerActions 
                handleDialog={this.handleDialog}
              />
            }
            open={this.state.stylePickerDialogOpen}
            onRequestClose={this.handleDialog}
            autoScrollBodyContent={true}
          >
            <StylesPickerOptions pickedStyle={this.state.pickedStyle} />
          </Dialog>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StylesPicker);