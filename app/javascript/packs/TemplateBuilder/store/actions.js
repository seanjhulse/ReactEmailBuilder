export const ADD_ROW = 'ADD_ROW';
export const DELETE_ROW = 'DELETE_ROW';
export const UPDATE_COLUMN = 'UPDATE_COLUMN';
export const SORT_ROWS = 'SORT_ROWS';
export const SAVE_TEMPLATE = 'SAVE_TEMPLATE';
export const CHANGE_NAME = 'CHANGE_NAME';

// adds a row with an unknown number of columns
export function addRow(columnCount) {
  return { type: ADD_ROW, columnCount }
}
// deletes a row via a unique key
export function deleteRow(uniqueId) {
  return { type: DELETE_ROW, uniqueId }
}
// changes the column value via a unique rowKey and columnKey
export function updateColumn(value, rowKey, columnKey) {
  return { type: UPDATE_COLUMN, value, rowKey, columnKey }
}
// sorts the rows via the new indices
export function sortRows(indexes) {
  return { type: SORT_ROWS, indexes }
}
// sends the state to the database as a JSON string
export function saveTemplate() {
  return { type: SAVE_TEMPLATE }
}
// allows users to change name of template
export function changeName(name) {
  return { type: CHANGE_NAME, name }
}