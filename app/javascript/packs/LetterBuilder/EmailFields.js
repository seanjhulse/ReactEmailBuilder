import React from 'react'
import { connect } from 'react-redux'
import { changeSubject, updateEmailInfo } from './store/actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import Save from './Save'
import PreviewButton from './Preview/PreviewButton'

const mapStateToProps = (state) => ({
  ...state.Reducers.subject,
  ...state.Reducers.to_address,
  ...state.Reducers.from_address,
  ...state.Reducers.preview_address,
})

const EmailFields = ({dispatch, subject, preview_address, to_address, from_address}) => {
  return (
    <MuiThemeProvider>
      <Card>
        <CardHeader
          title="Email Information"
          subtitle="Click me to fill out some information!"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <Save disabled={subject === null || subject === undefined}/>
          <PreviewButton disabled={preview_address === null || preview_address === '' || preview_address === undefined}/>
        </CardActions>
        <Divider />
        <CardText expandable={true}>
          <TextField
            floatingLabelText="Preview Address:"
            fullWidth={true}
            errorStyle={{color: 'rgb(0, 188, 212)'}}
            floatingLabelStyle={{color: 'rgb(0, 188, 212)'}}
            errorText="Separate multiple email addresses with commas (spaces are ignored)"
            hintText="Please enter a valid email address in order to send a preview of the email."
            value={preview_address !== null ? preview_address : ''} 
            onChange={(e) => dispatch(updateEmailInfo('preview_address', e.target.value))}       
          />
          <TextField
            type="text" 
            floatingLabelText="Name:"
            fullWidth={true}
            hintText="Name:"
            errorStyle={{color: 'rgb(0, 188, 212)'}}
            floatingLabelStyle={{color: 'rgb(0, 188, 212)'}}
            value={subject} 
            errorText="The name field will be used as a temporary subject / headline when you preview this email."
            onChange={(e) => dispatch(changeSubject(e.target.value))} />
        </CardText>
      </Card>
    </MuiThemeProvider>
  )
}

export default connect(mapStateToProps)(EmailFields);