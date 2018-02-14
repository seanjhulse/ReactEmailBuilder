// --------------- MEDIA UPLOADER --------------- //
// MediaUploader
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
// select templateId from dropdown
export function selectTemplate(templateId) {
  return { type: SELECT_TEMPLATE, templateId }
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
export function deletePicture(rowKey, columnKey) {
  return { type: DELETE_PICTURE, rowKey, columnKey }
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

// --------------- TEXT EDITOR --------------- //
// React Quill Text Editor
export const UPDATE_TEXT = 'UPDATE_TEXT';

// grabs updates the text inside a single column
export function updateText(text, rowKey, columnKey) {
  return { type: UPDATE_TEXT, text, rowKey, columnKey }
}


// --------- SAVE & PREVIEW LETTER ---------- //
export const SAVE = 'SAVE';
export const PREVIEW = 'PREVIEW';

// saves the letter as JSON object
export function save() {
  return { type: SAVE }
}
export function preview() {
  return { type: PREVIEW }
}

// ----------- BRING STATE BACK -------------- //
export const RESTORE_STATE = 'RESTORE_STATE';

export function restoreState(data) {
  return { type: RESTORE_STATE, data }
}
