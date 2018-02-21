import React, { Component } from 'react'
import { render } from 'react-dom'
import MediaUploader from '../LetterBuilder/MediaUploader/MediaUploader'
import OpenDialog from '../LetterBuilder/MediaUploader/OpenDialog'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import LetterApp from '../LetterBuilder/store/reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'

let store = createStore(LetterApp);

class MediaLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableUpload: true,
      toBeUploadedPicture: {},
      displayPictures: [],
      open: false,
    }
    this.handleOpen    = this.handleOpen.bind(this);
    this.handleClose   = this.handleClose.bind(this);
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


  handleOpen() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
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
    const { displayPictures } = this.state;
    return (
      <Provider store={store}>
        <div>
          <h1>Media Library</h1>
          <MuiThemeProvider>
            <RaisedButton 
              style={{minWidth: '185px', height: '40px'}}
              primary={true}
              label="Add a Photo"
              labelStyle={{verticalAlign: 'sub'}}
              onClick={() => this.setState({open: true})} 
            >
              <i className="mi md-light md-36 material-icons">add_a_photo</i>
            </RaisedButton>
          </MuiThemeProvider>
          <br />
          <br />
          <MuiThemeProvider>
            <Dialog
              title="Pick an Image"
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
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
            </Dialog>
          </MuiThemeProvider>
          <div className='mediaLibraryGrid'>
            {displayPictures.map((pic) => (
              <div id={"picture-" + pic.id} key={pic.id}>
                <form data-confirm="Are you sure you want to delete this photo permanently from the photo library?" className="button_to" method="post" action={"/pictures/"+pic.id} data-remote="true">
                  <input type="hidden" name="_method" value="delete"/>
                  <button className="pictures-destroy-button" type="submit">
                    <i className="material-icons md-36 mi md-light">delete_forever</i>
                  </button>
                  <input type="hidden" name="authenticity_token" value="B2xjbSP5zjRkDjhoACBiIM8XIB43LAYkaR5OYZrlupcwBPquppzteCpapAH4pYUqpgDnXAUBqAxEMlVuWZSHLQ==" />
                </form>
                <img src={pic.picture.url} className='mediaLibraryGridItem'/>
              </div>
            ))}
          </div>
        </div>
      </Provider>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('main');
  render(<MediaLibrary />,container);
});
