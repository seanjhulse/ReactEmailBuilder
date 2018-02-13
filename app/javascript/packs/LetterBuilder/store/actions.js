export const FETCH_TEMPLATES = 'FETCH_TEMPLATES';
export const SELECT_TEMPLATE = 'SELECT_TEMPLATE';
export const CHANGE_SUBJECT  = 'CHANGE_SUBJECT';
export const ALTER_COLUMN    = 'ALTER_COLUMN';
export const ADD_PICTURE     = 'ADD_PICTURE';
export const DELETE_PICTURE  = 'DELETE_PICTURE';
export const SELECT_PICTURE  = 'SELECT_PICTURE';
export const OPEN_DIALOG     = 'OPEN_DIALOG';
export const CLOSE_DIALOG    = 'CLOSE_DIALOG';

// grabs all templates from templates#index
export function fetchTemplates(templates) {
  return { type: FETCH_TEMPLATES, templates }
}
// select template from dropdown
export function selectTemplate(template) {
  return { type: SELECT_TEMPLATE, template }
}
// allows users to change subject of email
export function changeSubject(subject) {
  return { type: CHANGE_SUBJECT, subject }
}
// edit column content and add to JSON obj
export function alterColumn(value, rowKey, columnKey) {
  return { type: ALTER_COLUMN, value, rowKey, columnKey }
}
// add picture to state from mediaUploader
export function addPicture() {
  return { type: ADD_PICTURE }
} 
// delete picture from state in mediaUploader
export function deletePicture() {
  return { type: DELETE_PICTURE }
} 
// select picture in Picture
export function selectPicture(picture) {
  return { type: SELECT_PICTURE, picture }
} 
// opens MediaUploader Dialog
export function openDialog(rowKey, columnKey) {
  return { type: OPEN_DIALOG, rowKey, columnKey }
}
// closes MediaUploader Dialog
export function closeDialog() {
  return { type: CLOSE_DIALOG }
}