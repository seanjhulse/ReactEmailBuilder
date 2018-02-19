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
          subtitle="Fill out this information before sending your email"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <Save />
          <PreviewButton disabled={preview_address === null || preview_address === '' || preview_address === undefined}/>
        </CardActions>
        <Divider />
        <CardText expandable={true}>
          <TextField
            underlineShow={false}
            floatingLabelText="Preview Address:"
            fullWidth={true}
            hintText="Please enter a valid email address in order to send a preview of the email."
            value={preview_address !== null ? preview_address : ''} 
            onChange={(e) => dispatch(updateEmailInfo('preview_address', e.target.value))}       
          />
          <Divider />
          <TextField
            underlineShow={false}
            type="text" 
            fullWidth={true}
            floatingLabelText="To:"
            hintText="someone@wisc.edu"
            value={to_address !== null ? to_address : ''} 
            onChange={(e) => dispatch(updateEmailInfo('to_address', e.target.value))}
          />
          <Divider />
          <TextField
            underlineShow={false}
            type="text" 
            floatingLabelText="From:"
            fullWidth={true}
            hintText="someone@wisc.edu"
            value={from_address !== null ? from_address : ''} 
            onChange={(e) => dispatch(updateEmailInfo('from_address', e.target.value))}
          />
          <Divider />
          <TextField
            type="text" 
            underlineShow={false}
            floatingLabelText="Subject:"
            fullWidth={true}
            hintText="Subject:"
            value={subject} 
            onChange={(e) => dispatch(changeSubject(e.target.value))} />
        </CardText>
      </Card>
    </MuiThemeProvider>
  )
}

export default connect(mapStateToProps)(EmailFields);