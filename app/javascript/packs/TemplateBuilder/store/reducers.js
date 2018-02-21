import { 
  ADD_ROW, 
  DELETE_ROW,
  UPDATE_COLUMN,
  SORT_ROWS,
  SAVE_TEMPLATE,
  CHANGE_NAME
} from './actions';
import { combineReducers } from 'redux'
import update from 'immutability-helper';

const initialState = {
  name: '',
  rows: []
}


// helper function for swapping positions of elements in an array
function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
};

function Reducers(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW:
      // create empty row
      var row = { 
        key: Math.random(),
        columns: []
      };
      // fill row with empty columns
      for(var i = 0; i < action.columnCount; i++) {
        var column = {
          key: Math.random(),
          type: 'Empty',
        }
        row.columns.push(column);
      }
      // return new rows array with row appended
      return Object.assign({}, state, {
        rows: [
          ...state.rows,
          row
        ]
      })

    case DELETE_ROW:
      const uniqueId = action.uniqueId;
      return Object.assign({}, state, { 
        rows: state.rows.filter((row) => row.key !== uniqueId)
      })

    case SORT_ROWS:
      const oldIndex = action.indexes.oldIndex;
      const newIndex = action.indexes.newIndex;
      const rows = array_move(state.rows.slice(), oldIndex, newIndex);
      return Object.assign({}, state, { 
        rows: rows
      })

    case UPDATE_COLUMN:
      // get keys
      const rowKey = action.rowKey;
      const columnKey = action.columnKey;

      var indexOfRow = state.rows.findIndex(row => row.key === rowKey);
      var indexOfColumn = state.rows[indexOfRow].columns.findIndex(column => column.key === columnKey);

      return update(state, {
        rows: {
          [indexOfRow]: {
            columns: {
              [indexOfColumn]: {
                type: {$set: action.value}
              }
            }
          }
        }
      })

    case SAVE_TEMPLATE:
      let data = JSON.stringify({template: state});

      fetch('/templates', {
        method: 'post',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
          },
        body: data
      })
      .then((result) => {
        if(result.status === 200) {
          return result.json()
        } else {
          console.log(result);
          return 'Error';
        }
      })
      .then((response) => {
        if(response !== 'Error') {
          console.log(response)
          const URL = '/letters/new?template=' + JSON.stringify(response.template);
          window.location.href = URL;
        }
      });

    case CHANGE_NAME:
      console.log(action)
      console.log(state)
      return Object.assign({}, state, { 
        name: action.name 
      })

    default:
      return state
  }

}

const TemplateApp = combineReducers({
  Reducers,
});

export default TemplateApp;
