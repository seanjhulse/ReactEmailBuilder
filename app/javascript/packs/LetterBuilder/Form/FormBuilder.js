import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import ReactQuill from 'react-quill'
import { styles } from '../../Styles'

import MediaUploader from '../MediaUploader/MediaUploader';
import RemovePicture from '../MediaUploader/RemovePicture';

const mapStateToProps = (state) => ({
  ...state.pictures
})

const SubjectField = ({dispatch, template}) => {
  // iterate over rows
  const form = template.template.rows.map((row) => {
    
    // iterate over columns
    const r_row = row.columns.map((column) => {
      
      // create column divs by Type
      var columnDiv = null;
      
      // HEADER
      if(column.type === 'Header') {
        var style=styles.header;
        style.card.padding = '3rem';

        if(column.image !== undefined && column.image.picture !== undefined) {
          style.card.background = 'url(' + column.image.picture.url + ')';
          style.title = {
            color: '#222',
            textShadow: 'white 0px 0px 30px'
          }
        }

        columnDiv = (
          <Card style={style.card}>
            <CardTitle title={column.type} titleStyle={style.title} />
            <MediaUploader rowKey={row.key} columnKey={column.key} />
          </Card>
        )
      }

      // TEXT
      else if(column.type === 'Text') {
        var style=styles.text;
        style.card.padding = '1rem';
        columnDiv = (
          <Card style={style.card}>
            <CardTitle title={column.type} />
            <ReactQuill theme="snow"/>
          </Card>
        )
      } 

      // IMAGE
      else if(column.type === 'Image') {
        var style=styles.image;
        style.card.padding = '1rem';

        const Image = (
          column.image !== undefined && column.image.picture !== undefined ? 
            <div>
              <RemovePicture />
              <img src={column.image.picture.url} className="mediaUploaderEmbeddedPicture" />
            </div>
            :
            null
        )
        
        columnDiv = (
          <Card style={style.card}>
            <CardTitle title={column.type} />
            <MediaUploader rowKey={row.key} columnKey={column.key} />
            {Image}
          </Card>
        )
      }

      // FOOTER
      else if(column.type === 'Footer') {
        var style=styles.footer;
        style.card.padding = '3rem';
        columnDiv = (
          <Card style={style.card}>
            <CardTitle title={column.type} titleStyle={style.title} />
          </Card>
        )
      }

      // return the column with the right type
      return (
        <div key={column.key}>
          <MuiThemeProvider>
            {columnDiv}
          </MuiThemeProvider>
        </div>
      )
    })

    // return the row with the columns
    return (
      <div className="row" key={row.key}>
        {r_row}
      </div>
    );
  })

  return form;
}

export default connect(mapStateToProps)(SubjectField);