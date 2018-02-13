import React from 'react'
import { connect } from 'react-redux'
import { sortRows } from '../store/actions'
import {
  SortableContainer, 
  SortableElement, 
} from 'react-sortable-hoc';
import Row from '../Row';

const mapStateToProps = (state) => ({
  ...state.rows
})


const SortableItem = SortableElement(({row, uniqueId}) => {
  return (
    <li>
      <Row 
        row={row} 
        uniqueId={uniqueId} 
      />
    </li>
  )
});

const SortableList = SortableContainer(({rows}) => {
  return (
    <ul id="sortableList">
      {rows.map((row, index) => {
        return (
          <SortableItem
            key={row.key} 
            index={index} 
            row={row}
            uniqueId={row.key}
           /> )
      })}
    </ul>
  );
});

const SortRows = ({dispatch, rows}) => (
  <SortableList 
    rows={rows} 
    lockAxis="y"
    useDragHandle={true}
    onSortEnd={(indexes) => dispatch(sortRows(indexes))} />
)

export default connect(mapStateToProps)(SortRows);