import React, {Component} from 'react';
import {
  SortableContainer, 
  SortableElement, 
} from 'react-sortable-hoc';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import AddRowButtons from './rows/AddRowButtons';
import SortRows from './rows/SortRows';
import Save from './Save';
import NameField from './NameField';

function mapStateToProps(state) {
  return {
    name: state.Reducers.name,
    rows: [...state.Reducers.rows]
  };
};

class Template extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      rows: []
    }
  }

  componentWillReceiveProps(props){
    this.setState({ 
      name: props.name,
      rows: props.rows
    })
  }

  render() {
    const SideBar = (
      <Card className="sideBar">
        <h3>Add a Row</h3>
        <AddRowButtons />
        <Save disabled={this.state.name === '' || this.state.name === undefined}/>
      </Card>
    );

    const Rows = (
      <SortRows rows={this.state.rows}/>
    );

    return (
      <div>
        <h1>Build Your Template</h1>
        <NameField />
        <div className="grid">
          {this.state.rows.length > 0 ? Rows : <div>Looks like there is nothing here.</div>}
          {SideBar}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Template);