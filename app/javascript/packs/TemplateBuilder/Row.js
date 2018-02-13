import React, { Component } from 'react';
import { SortableHandle } from 'react-sortable-hoc';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import DeleteButton from './rows/DeleteRowButton';
import UpdateColumnDropDown from './columns/UpdateColumn';
import { styles } from '../Styles';

const DragHandle = SortableHandle(() => <span className="dragHandle"></span>);

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    if(this.props.row !== undefined && this.props.row.columns.length > 0) {
      
      const row = this.props.row.columns.map((column, columnIndex) => {
        var style = {};
        if(column.type === 'Header') {
          style=styles.header;
        } else if(column.type === 'Footer') {
          style=styles.footer;
        } else if(column.type === 'Text') {
          style=styles.text;
        } else if(column.type === 'Image') {
          style=styles.image;
        }
        const componentCard = (
          <MuiThemeProvider key={column.key}>
            <Card style={style.card}>
              <DragHandle />
              <div>
                <CardTitle title={column.type} titleStyle={style.title} />
                <UpdateColumnDropDown 
                  row={this.props.row} 
                  column={column} 
                  style={style.dropDown} />
              </div>
            </Card>
          </MuiThemeProvider>
          );
        return componentCard;
      })



      return (
        <div>
          <DeleteButton uniqueId={this.props.uniqueId} />
          <div className="row">
            {row}
          </div>
        </div>
      )
    }

    return <p>No components</p>;

  }
}

export default Row;