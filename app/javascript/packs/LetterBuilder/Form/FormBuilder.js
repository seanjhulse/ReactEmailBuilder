import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import ReactQuill from 'react-quill'
import { styles } from '../../Styles'
import { updateText } from '../store/actions';
import MediaUploader from '../MediaUploader/MediaUploader';
import RemovePicture from '../MediaUploader/RemovePicture';
import StylesPicker from '../StylesPicker/StylesPicker';
import OpenDialog from '../MediaUploader/OpenDialog';

const mapStateToProps = (state) => ({
  ...state.pictures
})

const FormBuilder = ({dispatch, template}) => {
  if(template.template !== undefined) {
    // iterate over rows
    const form = template.template.rows.map((row) => {
      
      // iterate over columns
      const r_row = row.columns.map((column) => {
        
        // create column divs by Type
        var columnDiv = null;

        // column style is - by default - null
        if(column.style === undefined || column.style === null) {
          column.style = 'Default';
        }

        // HEADER
        if(column.type === 'Header') {
          var style=styles.header;
          style.card.padding = '4rem';

          if(column.image !== undefined && column.image.picture !== undefined) {
            style.card.background = 'url(' + column.image.picture.url + ')';
          }

          columnDiv = (
            <Card style={style.card}>
            <CardHeader
              title={column.type}
              titleStyle={style.title}
              subtitleStyle={style.subtitle}
              subtitle="Add an image or don't. We have a default setting as well. "
              className="cardHeader"
            />
              <OpenDialog rowKey={row.key} columnKey={column.key} />
            }
            </Card>
          )
        }

        // TEXT
        else if(column.type === 'Text') {
          var style=styles.text;
          style.card.padding = '0 .5rem';
          var textValue = '';
          if(column.text !== undefined) {
            textValue = column.text;
          }

          columnDiv = (
            <Card style={style.card}>
              <CardHeader
                title={column.type}
                subtitle="Add some information"
                className="textHeader"
              />
              <p className="subtitleFont">Style: {column.style}</p>
              <CardActions className="cardActions">
                <StylesPicker rowKey={row.key} columnKey={column.key} />
              </CardActions>
              <ReactQuill theme="snow" value={textValue} onChange={(text) => dispatch(updateText(text, row.key, column.key))}/>
              <br />
            </Card>
          )
        } 

        // IMAGE
        else if(column.type === 'Image') {
          var style=styles.image;
          style.card.padding = '0 .5rem';

          const Image = (
            column.image !== undefined && column.image.picture !== undefined ? 
              <div className="mediaUploaderEmbeddedPicture">
                <img src={column.image.picture.url} align="center" />
              </div>
              :
              null
          )
          
          columnDiv = (
            <Card style={style.card}>
              <CardHeader
                title={column.type}
                subtitle="Add an image"
                className="imageHeader"
              />
              <p className="subtitleFont">Style: {column.style}</p>
              <CardActions className="cardActions">
                <OpenDialog rowKey={row.key} columnKey={column.key} />
                <RemovePicture rowKey={row.key} columnKey={column.key} disabled={column.image === undefined} />
                <StylesPicker rowKey={row.key} columnKey={column.key}  />
              </CardActions>
              {Image}
              <br />
            </Card>
          )
        }

        // IMAGE_WITH_TEXT
        else if(column.type === 'Image_With_Text') {
          var style=styles.text;
          style.card.padding = '.5rem';
          var textValue = '';
          if(column.text !== undefined) {
            textValue = column.text;
          }
          const Image = (
            column.image !== undefined && column.image.picture !== undefined ? 
              <div className="mediaUploaderEmbeddedPicture">
                <br />
                <img src={column.image.picture.url} align="center" />
              </div>
              :
              null
          )
          columnDiv = (
            <Card style={style.card}>
              <CardHeader
                title={column.type.split('_').join(' ')}
                subtitle="Add an image and some text below"
                className="textWithImageHeader"
              />
              <p className="subtitleFont">Style: {column.style}</p>
              <CardActions className="cardActions">
                <OpenDialog rowKey={row.key} columnKey={column.key} />
                <RemovePicture rowKey={row.key} columnKey={column.key} disabled={column.image === undefined} />
                <StylesPicker rowKey={row.key} columnKey={column.key}  />
              </CardActions>
              {Image}
              <br />
              <ReactQuill theme="snow" value={textValue} onChange={(text) => dispatch(updateText(text, row.key, column.key))}/>
              <br />
            </Card>
          )

        } 
        // FOOTER
        else if(column.type === 'Footer') {
          var style=styles.footer;
          style.card.padding = '3rem';
          columnDiv = (
            <Card style={style.card}>
              <CardHeader
                title={column.type}
                titleStyle={style.title}
                subtitleStyle={style.subtitle}
                subtitle="Standard footer with some text"
                className="footerHeader"
              />
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

    return (
      <div>
        {form}
        <MediaUploader />
      </div>
    );
  } else {
    return (
      <div>
        <h3>Error, template is undefined</h3>
      </div>
    )
  }
}

export default connect(mapStateToProps)(FormBuilder);