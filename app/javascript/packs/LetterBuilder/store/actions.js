// --------------- MEDIA UPLOADER --------------- //
// MediaUploader
export const FETCH_TEMPLATES    = 'FETCH_TEMPLATES';
export const SELECT_TEMPLATE    = 'SELECT_TEMPLATE';
export const CHANGE_SUBJECT     = 'CHANGE_SUBJECT';
export const ALTER_COLUMN       = 'ALTER_COLUMN';
export const ADD_PICTURE        = 'ADD_PICTURE';
export const DELETE_PICTURE     = 'DELETE_PICTURE';
export const SELECT_PICTURE     = 'SELECT_PICTURE';
export const OPEN_DIALOG        = 'OPEN_DIALOG';
export const CLOSE_DIALOG       = 'CLOSE_DIALOG';
export const UPDATE_EMAIL_INFO  = 'UPDATE_EMAIL_INFO';
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
// updates some unknown name / value relationship (dynamic data)
export function updateEmailInfo(name, value) {
  return { type: UPDATE_EMAIL_INFO, name, value }
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

// --------- STYLE PICKER OPTIONS ------------ //
export const PICK_STYLE = 'PICK_STYLE';
export const SAVE_STYLE = 'SAVE_STYLE';

// selects the style from options
export function pickStyle(style) {
  return { type: PICK_STYLE, style }
}
// saves the selected style to the template / letter
export function saveStyle() {
  return { type: SAVE_STYLE }
}


// -------- SET ROW AND COLUMN KEYS --------- //
export const SET_ROW_AND_COLUMN_KEYS = 'SET_ROW_AND_COLUMN_KEYS';
// sets the row and column keys in the reducers to be passed to the right action
export function setRowAndColumnKeys(rowKey, columnKey) {
  return { type: SET_ROW_AND_COLUMN_KEYS, rowKey, columnKey }
}

