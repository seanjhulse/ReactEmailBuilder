import React from 'react'
import { connect } from 'react-redux'
import { selectTemplate } from './store/actions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const mapStateToProps = (state) => {
  return {
    templates: [...state.Reducers.templates],
    template: state.Reducers.template
  }
}

const TemplatesDropDown = ({dispatch, template, templates}) => {
  return (
  <MuiThemeProvider>
    <DropDownMenu value={template !== -1 ? template.id : template} onChange={(event, index, value) => dispatch(selectTemplate(value))}>
      <MenuItem key={-1} value={-1} primaryText={"Select a Template"} />
      {templates.map((template) => {
        return (
          <MenuItem key={template.id} value={template.id} primaryText={template.template.name} />
        )
      })}
    </DropDownMenu>
  </MuiThemeProvider>
)
}

export default connect(mapStateToProps)(TemplatesDropDown);