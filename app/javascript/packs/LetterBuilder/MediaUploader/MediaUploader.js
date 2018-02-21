import React, { Component } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import MediaFormActions from './MediaFormActions'
import Picture from './Picture'

function mapStateToProps(state) {
  return {
    selectedPicture: state.Reducers.selectedPicture,
    open: state.Reducers.open,
  };
};

class MediaUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      disableUpload: true,

      toBeUploadedPicture: {},
      selectedPicture: {},
      displayPictures: [],
    }

    this.handleOpen    = this.handleOpen.bind(this);
    this.submitPhoto   = this.submitPhoto.bind(this);
    this.chosePhoto    = this.chosePhoto.bind(this);
  }

  componentDidMount() {
    fetch('/get_images', {
      method: 'get',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
    .then((response) => response.json())
    .then((results) => this.setState({displayPictures: results}));
  }

  componentWillReceiveProps(props) {
    this.setState({
      pictures: props.pictures,
      selectedPicture: props.selectedPicture,
      open: props.open,
    })
  }

  handleOpen() {
    this.setState({open: true})
  }

  submitPhoto(event) {
    fetch('/get_images', {
      method: 'get',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
    .then((response) => response.json())
    .then((results) => {
      this.setState({
        displayPictures: results,
        toBeUploadedPicture: {},
        disableUpload: true
      })
    })
  }

  chosePhoto(event) {
    const file = event.target.files[0];
    this.setState({toBeUploadedPicture: file});
    this.setState({disableUpload: false})
  }

  render() {
    const {displayPictures, selectedPicture} = this.state;
    const actions = <MediaFormActions />;
    return (
      <MuiThemeProvider>
        <Dialog
          title="Pick an Image"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <form className="new_picture" id="new_picture" encType="multipart/form-data" action="/upload_image" acceptCharset="UTF-8" onSubmit={(e) => setTimeout(() => this.submitPhoto(e), 2000)} data-remote="true" method="post">
            <input name="utf8" type="hidden" value="✓" />
            <input type="hidden" name="authenticity_token" value="m98usILW1Ua8t+17IzVIwX89an2xQAqcPf+EESw368MYkyvuFbfRGqnxuy0gskTyyrMbjy6hhl9p6kTlmnxukA==" />
            <p>
              <label>Add a Photo to Media Library</label>
              <input type="file" name="picture[picture]" id="picture_picture" onChange={(e) => this.chosePhoto(e)} />
            </p>
            <RaisedButton 
              label="Add Photo"
              type="submit"
              secondary={true}
              disabled={this.state.disableUpload}
            />
          </form>
          <ul className="picturesList">
            {
              displayPictures.length > 0 ? 
              
              displayPictures.map((pic) => {
                return (
                  <Picture 
                    key={pic.id}
                    selectedPicture={pic}
                    style={pic.id === selectedPicture.id ? {border: '5px solid #e91e63'} : null}
                  />
                )
              }) 
              
              :

              "No photos to display! Go ahead and add one."

            }
          </ul>
        </Dialog>
      </MuiThemeProvider>
    )
  }
}

export default connect(mapStateToProps)(MediaUploader);