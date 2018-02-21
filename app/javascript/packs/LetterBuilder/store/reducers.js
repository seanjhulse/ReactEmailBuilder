import {
  FETCH_TEMPLATES,
  SELECT_TEMPLATE,
  CHANGE_SUBJECT,
  ADD_PICTURE,
  DELETE_PICTURE,
  SELECT_PICTURE,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  UPDATE_EMAIL_INFO,

  UPDATE_TEXT,

  SAVE,
  PREVIEW,

  RESTORE_STATE,

  PICK_STYLE,
  SAVE_STYLE,

  SET_ROW_AND_COLUMN_KEYS,

  FINISHED_LOADING,
} from './actions'
import { combineReducers } from 'redux'
import update from 'immutability-helper'
import { previewEmail } from '../Preview/PreviewEmail';

const initialState = {
  id: undefined,
  subject: '',
  to_address: '',
  from_address: '',
  preview_address: '',
  template: -1,
  templates: [],
  selectedPicture: {},
  open: false,
  rowKey: '',
  columnKey: '',
  pickedStyle: '',
}

function Reducers(state = initialState, action) {
  switch (action.type) {
    

    case FETCH_TEMPLATES:
      return Object.assign({}, state, { 
        templates: action.templates
      })



    case SELECT_TEMPLATE:
      var template = -1;
      for(var i = 0; i < state.templates.length; i++) {
        if(state.templates[i].id === action.templateId) {
          template = state.templates[i];
        }
      }
      return Object.assign({}, state, { 
        template: template
      })



    case CHANGE_SUBJECT:
      return Object.assign({}, state, { 
        subject: action.subject 
      })



    case UPDATE_EMAIL_INFO:
      return Object.assign({}, state, {
        [action.name]: action.value
      })



    case ADD_PICTURE:
      // get keys
      var rowKey = state.rowKey;
      var columnKey = state.columnKey;
      var indexOfRow = state.template.template.rows.findIndex(row => row.key === rowKey);
      var indexOfColumn = state.template.template.rows[indexOfRow].columns.findIndex(column => column.key === columnKey);

      return update(state, {
        template: {
          template: {
            rows: {
                [indexOfRow]: {
                  columns: {
                    [indexOfColumn]: {
                      image: {$set: state.selectedPicture}
                    }
                  }
                }
              }            
            }
          }
        }
      )



    case DELETE_PICTURE:
      // get keys
      var rowKey = action.rowKey;
      var columnKey = action.columnKey;
      var indexOfRow = state.template.template.rows.findIndex(row => row.key === rowKey);
      var indexOfColumn = state.template.template.rows[indexOfRow].columns.findIndex(column => column.key === columnKey);

      return update(state, {
        template: {
          template: {
            rows: {
                [indexOfRow]: {
                  columns: {
                    [indexOfColumn]: {
                      image: {$set: undefined}
                    }
                  }
                }
              }            
            }
          }
        }
      )



    case SELECT_PICTURE:
      return Object.assign({}, state, { 
        selectedPicture: action.picture 
      })



    case OPEN_DIALOG:
      return Object.assign({}, state, { 
        open: true,
        rowKey: action.rowKey,
        columnKey: action.columnKey,
      }) 



    case CLOSE_DIALOG:
      return Object.assign({}, state, { 
        open: false
      })



    case UPDATE_TEXT:
      // get keys
      var rowKey = action.rowKey;
      var columnKey = action.columnKey;
      var indexOfRow = state.template.template.rows.findIndex(row => row.key === rowKey);
      var indexOfColumn = state.template.template.rows[indexOfRow].columns.findIndex(column => column.key === columnKey);

      return update(state, {
        template: {
          template: {
            rows: {
                [indexOfRow]: {
                  columns: {
                    [indexOfColumn]: {
                      text: {$set: action.text}
                    }
                  }
                }
              }            
            }
          }
        }
      )



    case SAVE:
      let data = JSON.stringify({letter: state});
      var url = '/letters';
      var method = 'post';

      if(state.id !== undefined) {
        url = '/letters/' + state.id;
        method = 'put';
      }

      fetch(url, {
        method: method,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
          },
        body: data
      })
      .then((result) => {
        return {
            status: result.status, 
            response: result.json()
          }
      })
      .then((response) => {
        if(response['status'] === 301) {
          window.location.href = `/letters/${response.id}/edit`
        }
      })

      return state;


    case PREVIEW:
      previewEmail(state);



    case RESTORE_STATE:
      var temp = action.data;

      if(temp !== undefined) {
        return Object.assign({}, state, { 
          id: temp.id,
          subject: temp.subject !== undefined || temp.subject !== null ? temp.subject : '',
          to_address: temp.to_address !== undefined || temp.to_address !== null ? temp.to_address : '',
          from_address: temp.from_address !== undefined || temp.from_address !== null ? temp.from_address : '',
          preview_address: temp.preview_address !== undefined || temp.preview_address !== null ? temp.preview_address : '',
          template: {
            ...template,
            template: temp.letter,
          },

        })        
      } else {
        return state
      }



    case PICK_STYLE:
      return Object.assign({}, state, { 
        pickedStyle: action.style
      })    



    case SAVE_STYLE:
      const pickedStyle = state.pickedStyle.toLowerCase().split(' ').join('_');
      // get keys
      var rowKey = state.rowKey;
      var columnKey = state.columnKey;
      var indexOfRow = state.template.template.rows.findIndex(row => row.key === rowKey);
      var indexOfColumn = state.template.template.rows[indexOfRow].columns.findIndex(column => column.key === columnKey);

      return update(state, {
        template: {
          template: {
            rows: {
                [indexOfRow]: {
                  columns: {
                    [indexOfColumn]: {
                      style: {$set: pickedStyle}
                    }
                  }
                }
              }            
            }
          }
        }
      )



    case SET_ROW_AND_COLUMN_KEYS:
      return Object.assign({}, state, { 
        rowKey: action.rowKey,
        columnKey: action.columnKey,
      })   


    default:
      return state
  }
}



const LetterApp = combineReducers({
  Reducers,
});


export default LetterApp;