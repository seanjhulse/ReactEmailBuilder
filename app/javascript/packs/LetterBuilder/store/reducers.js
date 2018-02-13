import {
  FETCH_TEMPLATES,
  SELECT_TEMPLATE,
  CHANGE_SUBJECT,
  ADD_PICTURE,
  DELETE_PICTURE,
  SELECT_PICTURE,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './actions';
import { combineReducers } from 'redux'
import update from 'immutability-helper';

const initialState = {
  subject: '',
  template: -1,
  templates: [],
  selectedPicture: {},
  open: false,
  rowKey: '',
  columnKey: ''
}

function Reducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEMPLATES:
      return Object.assign({}, state, { 
        templates: action.templates
      })

    case SELECT_TEMPLATE:
      return Object.assign({}, state, { 
        template: action.template
      })

    case CHANGE_SUBJECT:
      return Object.assign({}, state, { 
        subject: action.subject 
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
      console.log(state);
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

    default:
      return state
  }
}

const LetterApp = combineReducers({
  Reducers,
});

export default LetterApp;