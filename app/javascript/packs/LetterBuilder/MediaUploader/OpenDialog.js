import React from 'react'
import { connect } from 'react-redux'
import { openDialog } from '../store/actions'
import RaisedButton from 'material-ui/RaisedButton';
import { styles } from '../../Styles'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const mapStateToProps = (state) => ({
  ...state.open
})

const OpenDialog = ({dispatch, rowKey, columnKey}) => {
  return (
    <MuiThemeProvider>
      <RaisedButton 
        onClick={() => dispatch(openDialog(rowKey, columnKey))} 
      >
        <i className="mi md-dark md-24 material-icons">add_a_photo</i>
      </RaisedButton>
    </MuiThemeProvider>
  )
}

export default connect(mapStateToProps)(OpenDialog);