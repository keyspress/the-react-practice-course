import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Fileupload extends Component {
  constructor() {
    super();
    this.state = {
      uploadedFiles: [],
      uploding: false
    };
  }

  onDrop = files => {
    this.setState({ uploading: true });
    let formdata = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' }
    };
    formdata.append('file', files[0]);

    axios.post('/api/users/uploadimage', formData, config).then(reponse => {
      this.setState(
        {
          uploading: false,
          uploadedFiles: [...this.state.uploadedFiles, response.data]
        },
        () => {
          this.props.imagesHandler(this.state.uploadedFiles);
        }
      );
    });
  };

  showUploadedImages = () => {};

  render() {
    return (
      <div>
        <section>
          <div className="dropzone clear">
            <Dropzone
              onDrop={e => this.onDrop(e)}
              multiple={false}
              className="dropzone_box"
            >
              <div className="wrap">
                <FontAwesomeIcon icon={faPlusCircle} />
              </div>
            </Dropzone>
            {this.showUploadedImages()}
            {this.state.uploading ? (
              <div
                className="dropzone_box"
                style={{ textAlign: 'center', paddingTop: '60px' }}
              >
                <CircularProgress style={{ color: '#00bcd4' }} thickness={7} />
              </div>
            ) : null}
          </div>
        </section>
      </div>
    );
  }
}
