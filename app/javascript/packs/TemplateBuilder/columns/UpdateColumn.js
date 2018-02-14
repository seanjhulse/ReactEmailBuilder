import React from 'react'
import { connect } from 'react-redux'
import { updateColumn } from '../store/actions'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const mapStateToProps = (state) => ({
  ...state.rows
})

const updateColumnDropDown = ({dispatch, row, column, style}) => (
  <DropDownMenu value={column.type.toString()} labelStyle={style} onChange={(event, index, value) => dispatch(updateColumn(value, row.key, column.key))}>
    <MenuItem value={"Empty"} primaryText="Empty" />
    <MenuItem value={"Header"} primaryText="Header" />
    <MenuItem value={"Text"} primaryText="Textbox" />
    <MenuItem value={"Image"} primaryText="Image" />
    <MenuItem value={"Image_With_Text"} primaryText="Image with Text" />
    <MenuItem value={"Footer"} primaryText="Footer" />
  </DropDownMenu>
)

export default connect(mapStateToProps)(updateColumnDropDown);