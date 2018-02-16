import React from 'react'
import { connect } from 'react-redux'
import { changeSubject } from './store/actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Card, CardHeader, CardText} from 'material-ui/Card'

const mapStateToProps = (state) => ({
  ...state.Reducers.subject
})

const EmailFields = ({dispatch, subject}) => {

  return (
    <MuiThemeProvider>
      <Card>
        <CardHeader
          title="Email Information"
          subtitle="Fill out this information before sending your email"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <TextField
            type="text" 
            floatingLabelText="To:"
            hintText="someone@wisc.edu"
          />
          <br />
          <TextField
            type="text" 
            floatingLabelText="From:"
            hintText="someone@wisc.edu"
          />
          <br />
          <TextField
            type="text" 
            floatingLabelText="Subject"
            hintText="Subject"
            value={subject} 
            onChange={(e) => dispatch(changeSubject(e.target.value))} />
        </CardText>
      </Card>
    </MuiThemeProvider>
  )
}

export default connect(mapStateToProps)(EmailFields);